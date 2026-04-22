const fs = require('fs');
const https = require('https');
const path = require('path');

const logotypesDir = path.join(__dirname, 'public/assets/stack/logotypes');
const isotypesDir = path.join(__dirname, 'public/assets/stack/isotypes');

const tools = [
  'Figma', 'Notion', 'Google Analytics', 'Claude', 'Gemini', 'OpenAI', 'Cursor',
  'Node.js', 'Vite', 'React', 'Tailwind CSS', 'Supabase', 'Firebase', 'Vercel'
];

https.get('https://svgl.app/api/svgs', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const svgs = JSON.parse(data);
    tools.forEach(toolName => {
      const tool = svgs.find(s => s.title.toLowerCase() === toolName.toLowerCase() || (s.title.toLowerCase() === 'claude ai' && toolName === 'Claude') || (s.title.toLowerCase() === 'google gemini' && toolName === 'Gemini'));
      if (tool) {
        // Download logotype (usually wordmark)
        if (tool.wordmark) {
          download(tool.wordmark, path.join(logotypesDir, `${toolName.toLowerCase().replace(/ /g, '_')}.svg`));
        } else {
          // Fallback to route if no wordmark
          download(typeof tool.route === 'object' ? tool.route.light : tool.route, path.join(logotypesDir, `${toolName.toLowerCase().replace(/ /g, '_')}.svg`));
        }
        
        // Download isotype
        const isotypeUrl = typeof tool.route === 'object' ? tool.route.light : tool.route;
        download(isotypeUrl, path.join(isotypesDir, `${toolName.toLowerCase().replace(/ /g, '_')}.svg`));
      } else {
        console.log(`Tool not found: ${toolName}`);
      }
    });
  });
});

function download(url, dest) {
  if (!url) return;
  // Handle relative URLs from svgl.app
  if (url.startsWith('/')) url = `https://svgl.app${url}`;
  
  https.get(url, (res) => {
    if (res.statusCode === 301 || res.statusCode === 302) {
      return download(res.headers.location, dest);
    }
    const file = fs.createWriteStream(dest);
    res.pipe(file);
    file.on('finish', () => file.close());
  }).on('error', (err) => console.error(`Error downloading ${url}:`, err.message));
}
