import { toc } from '@lobehub/icons';
const ids = toc.map(t => t.id.toLowerCase());
console.log('Vscode:', ids.find(id => id.includes('code')));
console.log('Antigravity:', ids.find(id => id.includes('anti') || id.includes('grav')));
