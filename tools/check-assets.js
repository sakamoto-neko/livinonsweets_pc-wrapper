#!/usr/bin/env node
// Usage: node tools/check-assets.js [path-to-build_120d0w]
// Default path: ./game/build_120d0w (falls back to ./game)
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const req = JSON.parse(fs.readFileSync(path.join(root, 'required-assets.json'), 'utf8'));

let dir = process.argv[2];
if (!dir) dir = fs.existsSync(path.join(root, 'game', 'build_120d0w')) ? path.join(root, 'game', 'build_120d0w') : path.join(root, 'game');
dir = path.resolve(dir);
if (!fs.existsSync(dir)) { console.error('Folder not found: ' + dir); process.exit(2); }

const missing = [], empty = [];
for (const f of req.files) {
  const p = path.join(dir, ...f.path.split('/'));
  if (!fs.existsSync(p)) missing.push(f);
  else if (fs.statSync(p).size === 0) empty.push(f);
}
const total = req.files.length;
console.log(`Checked ${dir}`);
console.log(`${total - missing.length - empty.length} / ${total} files OK`);
for (const f of missing) console.log(`MISSING  ${f.path.padEnd(42)} ${f.use}\n         ${req.source}${f.path}`);
for (const f of empty) console.log(`EMPTY    ${f.path.padEnd(42)} ${f.use}`);
process.exit(missing.length || empty.length ? 1 : 0);
