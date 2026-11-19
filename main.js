const { app, BrowserWindow, protocol, net, dialog, Menu, shell } = require('electron');
const path = require('path');
const fs = require('fs');
const { pathToFileURL } = require('url');

protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { standard: true, secure: true, supportFetchAPI: true, corsEnabled: true, stream: true } }
]);

// Folder that sits next to the .exe (portable builds) or the app folder (dev).
const baseDir = app.isPackaged ? path.dirname(process.execPath) : __dirname;
const configFile = () => path.join(app.getPath('userData'), 'game-path.json');

function isGameDir(dir) {
  try { return fs.existsSync(path.join(dir, 'index.js')) && fs.existsSync(path.join(dir, 'static')); }
  catch { return false; }
}

function findGameDir() {
  const candidates = [
    path.join(baseDir, 'game', 'build_120d0w'),
    path.join(baseDir, 'game'),
    path.join(baseDir, '..', 'https_', 'nxm-clw-cdn.dn.nexoncdn.co.kr', 'ba', 'events', '2024', '10', 'minigame_r3409u', 'build_120d0w'),
  ];
  try {
    const saved = JSON.parse(fs.readFileSync(configFile(), 'utf8')).gameDir;
    if (saved) candidates.push(saved);
  } catch {}
  for (const c of candidates) if (isGameDir(c)) return path.resolve(c);

  dialog.showMessageBoxSync({
    type: 'info',
    title: "LIVIN' ON SWEETS!",
    message: 'Game files not found.',
    detail: 'Please select the "build_120d0w" folder (the one that contains index.js and the "static" folder).'
  });
  const pick = dialog.showOpenDialogSync({ properties: ['openDirectory'], title: 'Select build_120d0w folder' });
  if (pick && isGameDir(pick[0])) {
    try { fs.mkdirSync(path.dirname(configFile()), { recursive: true }); fs.writeFileSync(configFile(), JSON.stringify({ gameDir: pick[0] })); } catch {}
    return pick[0];
  }
  return null;
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    useContentSize: true,
    backgroundColor: '#000000',
    title: "LIVIN' ON SWEETS!",
    autoHideMenuBar: true,
    icon: path.join(__dirname, 'icon.ico'),
    webPreferences: { contextIsolation: true, nodeIntegration: false, backgroundThrottling: false }
  });
  // Keep the *game area* at exactly 16:9 so there are no side bars.
  // Windows' own content-size numbers can be off (frame/menu/DPI), so we measure the real
  // page viewport (innerWidth/innerHeight) and size the outer window from that.
  const RATIO = 16 / 9;
  let frame = null;                       // [extra width, extra height] of the window chrome
  const inner = () => win.webContents.executeJavaScript('[window.innerWidth, window.innerHeight]', true);
  const measureFrame = async () => {
    const [iw, ih] = await inner();
    const b = win.getBounds();
    frame = [b.width - iw, b.height - ih];
    return [iw, ih];
  };
  const normalState = () => !(win.isMaximized() || win.isFullScreen() || win.isMinimized());
  const fitContent = async (initial) => {
    if (!normalState()) return;
    try {
      const [iw, ih] = await measureFrame();
      const b = win.getBounds();
      if (initial) {                      // start at exactly 1280x720 game area
        win.setBounds({ x: b.x - Math.round((1280 + frame[0] - b.width) / 2), y: b.y, width: 1280 + frame[0], height: 720 + frame[1] });
        return;
      }
      const wantH = Math.round(iw / RATIO);
      if (Math.abs(wantH - ih) > 1) win.setBounds({ x: b.x, y: b.y, width: b.width, height: wantH + frame[1] });
    } catch {}
  };
  win.on('will-resize', (e, nb, details) => {
    if (!frame || !normalState()) return;
    const [dw, dh] = frame;
    const edge = (details && details.edge) || 'bottom-right';
    let cw = nb.width - dw, ch = nb.height - dh;
    if (edge === 'top' || edge === 'bottom') cw = Math.round(ch * RATIO);
    else ch = Math.round(cw / RATIO);
    const w = cw + dw, h = ch + dh;
    const cur = win.getBounds();
    const x = edge.includes('left') ? cur.x + cur.width - w : cur.x;
    const y = edge.includes('top') ? cur.y + cur.height - h : cur.y;
    e.preventDefault();
    win.setBounds({ x: Math.round(x), y: Math.round(y), width: w, height: h });
  });
  let t = null;
  win.on('resize', () => { clearTimeout(t); t = setTimeout(() => fitContent(false), 150); });
  win.on('unmaximize', () => setTimeout(() => fitContent(false), 50));
  win.on('leave-full-screen', () => setTimeout(() => fitContent(false), 50));
  win.webContents.once('did-finish-load', () => fitContent(true));
  win.loadURL('app://ui/index.html');

  win.webContents.on('before-input-event', (e, input) => {
    if (input.type !== 'keyDown') return;
    if (input.key === 'F11' || (input.key === 'Enter' && input.alt)) {
      win.setFullScreen(!win.isFullScreen()); e.preventDefault();
    } else if (input.key === 'Escape' && win.isFullScreen()) {
      win.setFullScreen(false);
    } else if (input.key === 'F12') {
      win.webContents.toggleDevTools(); e.preventDefault();
    }
  });
  // Never navigate away / open popups inside the game window.
  win.webContents.setWindowOpenHandler(({ url }) => { if (/^https?:/.test(url)) shell.openExternal(url); return { action: 'deny' }; });
  win.webContents.on('will-navigate', (e, url) => { if (!url.startsWith('app://')) e.preventDefault(); });
}

app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');

app.whenReady().then(() => {
  Menu.setApplicationMenu(null);
  const gameDir = findGameDir();
  if (!gameDir) { app.quit(); return; }

  protocol.handle('app', (request) => {
    const u = new URL(request.url);
    const rel = decodeURIComponent(u.pathname).replace(/^\/+/, '');
    let root;
    if (u.host === 'ui') root = __dirname;
    else if (u.host === 'game' && rel.startsWith('build/')) root = gameDir;
    else return new Response('Not found', { status: 404 });
    const sub = u.host === 'game' ? rel.slice('build/'.length) : rel;
    const file = path.normalize(path.join(root, sub));
    if (!file.startsWith(path.normalize(root))) return new Response('Forbidden', { status: 403 });
    if (!fs.existsSync(file)) { console.warn('missing asset:', file); return new Response('Not found', { status: 404 }); }
    return net.fetch(pathToFileURL(file).toString(), { headers: request.headers });
  });

  createWindow();
});

app.on('window-all-closed', () => app.quit());
