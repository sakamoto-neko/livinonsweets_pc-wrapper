# LIVIN' ON SWEETS! – PC wrapper

A small [Electron](https://www.electronjs.org/) app that runs **LIVIN' ON SWEETS!**, the Blue Archive web rhythm minigame (Global event, October 2024), as a Windows desktop program, offline, without the Nexon event page around it.

The repository contains **only the wrapper code**. The game itself (code, images, music, fonts) belongs to Nexon / NEXON Games and is **not included**. You need your own copy of the original `build_120d0w` folder (see [Required assets](#required-assets)).

## What the wrapper does

- Loads the original game bundle (`index.js`) and calls `BLUE_ARCHIVE_RHYTHM.init("play", …)` the same way the event page did, with English as the default language and the login/score-upload callbacks replaced by no-ops.
- Serves the game files from disk through a private `app://` protocol, so the game's automatic asset paths, `fetch`/XHR loading and `localStorage` (settings, offsets) all work offline.
- Opens a 1280×720 window and keeps the game area at exactly 16:9. It measures the real page viewport so no black bars appear in windowed mode.
- Keys: **F11** / **Alt+Enter** fullscreen, **Esc** leave fullscreen, **F12** DevTools. Game controls are unchanged: **D F J K** to play, arrow keys + **Enter** for menus.

## Project layout

```
main.js               Electron main process (window, app:// protocol, game-folder lookup, 16:9 sizing)
index.html            Page that loads the game bundle and starts it
icon.ico              Window / exe icon
package.json          Dependencies and npm scripts
required-assets.json  Machine-readable list of every file the game needs
tools/check-assets.js Checks a game folder against required-assets.json
game/                 (not committed) put build_120d0w here for development
```

## Building

Requirements: [Node.js](https://nodejs.org/) 20 or newer. The build makes a Windows x64 exe and also runs on Linux or macOS; no Wine is needed.

```bash
npm install                 # downloads Electron 45.4.1 and @electron/packager
npm run check-assets        # verify ./game/build_120d0w is complete (optional)
npm start                   # run from source
npm run build               # -> dist/LivinOnSweets-win32-x64/LivinOnSweets.exe
```

Then give the built app its game files. Either copy `build_120d0w` into `dist/LivinOnSweets-win32-x64/game/`, or let it find them on first launch (see below).

## Where the app looks for the game files

On start-up the app takes the first of these folders that contains `index.js` **and** a `static` folder:

1. `<exe folder>\game\build_120d0w\`
2. `<exe folder>\game\`, i.e. the *contents* of `build_120d0w` copied straight into `game`
3. `<exe folder>\..\https_\nxm-clw-cdn.dn.nexoncdn.co.kr\ba\events\2024\10\minigame_r3409u\build_120d0w\`, the layout produced by saving the event page with a site-mirroring tool
4. a folder remembered from a previous launch

If none of these has the files, the app asks you to pick the `build_120d0w` folder and remembers it. When running from source (`npm start`), "exe folder" means the project folder.

Settings and saved data live in `%APPDATA%\LIVIN' ON SWEETS!\`.

## Notes

- Electron's bundled `ffmpeg.dll` handles the MP3 audio; no extra codecs are needed.
- The bundle also mentions a Chart.js CDN URL. It is never loaded during play, so the app runs fully offline.
- Not affiliated with Nexon, NEXON Games or Yostar. Blue Archive and all game assets are the property of their owners.
