import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as simpleIcons from 'simple-icons';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isotypesDir = path.join(__dirname, 'public/assets/stack/isotypes');
const logotypesDir = path.join(__dirname, 'public/assets/stack/logotypes');

const icon = simpleIcons['siVisualstudiocode'];
if (icon) {
  const filename = 'vscode.svg';
  
  // Create isotype
  const isotypeSvg = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="${icon.path}" fill="currentColor"/></svg>`;
  fs.writeFileSync(path.join(isotypesDir, filename), isotypeSvg);
  
  // Create logotype (Icon + Text)
  const logotypeSvg = `<svg role="img" viewBox="0 0 120 24" xmlns="http://www.w3.org/2000/svg">
    <path d="${icon.path}" fill="currentColor" transform="scale(0.8) translate(0, 3)"/>
    <text x="28" y="16" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600" fill="currentColor">VS Code</text>
  </svg>`;
  fs.writeFileSync(path.join(logotypesDir, filename), logotypeSvg);
  
  console.log(`Generated VS Code (Color: #${icon.hex})`);
}
