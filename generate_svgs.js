import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as simpleIcons from 'simple-icons';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tools = [
  { name: 'Figma', slug: 'siFigma' },
  { name: 'Notion', slug: 'siNotion' },
  { name: 'Google Analytics', slug: 'siGoogleanalytics' },
  { name: 'Claude', slug: 'siAnthropic' }, // Claude is usually Anthropic
  { name: 'Gemini', slug: 'siGooglegemini' },
  { name: 'OpenAI', slug: 'siOpenai' },
  { name: 'Cursor', slug: 'siCursor' },
  { name: 'Node.js', slug: 'siNodedotjs' },
  { name: 'Vite', slug: 'siVite' },
  { name: 'React', slug: 'siReact' },
  { name: 'Tailwind CSS', slug: 'siTailwindcss' },
  { name: 'Supabase', slug: 'siSupabase' },
  { name: 'Firebase', slug: 'siFirebase' },
  { name: 'Vercel', slug: 'siVercel' }
];

const isotypesDir = path.join(__dirname, 'public/assets/stack/isotypes');
const logotypesDir = path.join(__dirname, 'public/assets/stack/logotypes');

fs.mkdirSync(isotypesDir, { recursive: true });
fs.mkdirSync(logotypesDir, { recursive: true });

tools.forEach(tool => {
  const icon = simpleIcons[tool.slug];
  if (!icon) {
    console.error(`Missing icon for ${tool.name} (slug: ${tool.slug})`);
    return;
  }
  
  const filename = tool.name.toLowerCase().replace(/[\s\.]/g, '_') + '.svg';
  
  // Create isotype
  const isotypeSvg = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="${icon.path}" fill="currentColor"/></svg>`;
  fs.writeFileSync(path.join(isotypesDir, filename), isotypeSvg);
  
  // Create logotype (Icon + Text)
  // 24px height for icon, space, then text
  const logotypeSvg = `<svg role="img" viewBox="0 0 120 24" xmlns="http://www.w3.org/2000/svg">
    <path d="${icon.path}" fill="currentColor" transform="scale(0.8) translate(0, 3)"/>
    <text x="28" y="16" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600" fill="currentColor">${tool.name}</text>
  </svg>`;
  fs.writeFileSync(path.join(logotypesDir, filename), logotypeSvg);
  
  console.log(`Generated ${tool.name} (Color: #${icon.hex})`);
});
