import { toc } from '@lobehub/icons';
const ids = toc.map(t => t.id.toLowerCase());
const search = ['react', 'vite', 'node', 'tailwind', 'supabase', 'firebase', 'vercel', 'github', 'cursor', 'codex', 'claude', 'gemini', 'openai'];
search.forEach(s => {
  const found = ids.find(id => id.includes(s));
  console.log(`${s}: ${found || 'NOT FOUND'}`);
});
