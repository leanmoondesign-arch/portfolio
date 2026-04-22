export const stackTools = [
  // Estrategia & Diseño
  { name: 'Figma', filename: 'figma.svg', color: '#F24E1E' },
  { name: 'Notion', filename: 'notion.svg', color: 'var(--text-primary)' },
  { name: 'Google Analytics', filename: 'google_analytics.svg', color: '#E37400' },
  // AI Workflow
  { name: 'Claude', filename: 'claude.svg', color: '#D97757' },
  { name: 'Gemini', filename: 'gemini.svg', color: '#8E75B2' },
  { name: 'OpenAI', filename: 'openai.svg', color: 'var(--text-primary)' },
  { name: 'Codex', filename: 'openai.svg', color: 'var(--text-primary)' }, 
  { name: 'Cursor', filename: 'cursor.svg', color: 'var(--text-primary)' },
  { name: 'Antigravity', filename: 'antigravity.svg', color: 'var(--text-primary)' },
  // Dev Engine & Cloud
  { name: 'Node.js', filename: 'node_js.svg', color: '#5FA04E' },
  { name: 'Vite', filename: 'vite.svg', color: '#9135FF' },
  { name: 'React', filename: 'react.svg', color: '#61DAFB' },
  { name: 'Tailwind CSS', filename: 'tailwind_css.svg', color: '#06B6D4' },
  { name: 'Supabase', filename: 'supabase.svg', color: '#3FCF8E' },
  { name: 'Firebase', filename: 'firebase.svg', color: '#FFCA28' },
  { name: 'Vercel', filename: 'vercel.svg', color: 'var(--text-primary)' },
  { name: 'VS Code', filename: 'vscode.svg', color: '#007ACC' },
  { name: 'GitHub', filename: 'github.svg', color: 'var(--text-primary)' },
];

const aiTools = [
  { name: 'Claude', filename: 'claude.svg' },
  { name: 'Gemini', filename: 'gemini.svg' },
  { name: 'Codex', filename: 'openai.svg' },
  { name: 'VS Code', filename: 'vscode.svg' },
  { name: 'Antigravity', filename: 'antigravity.svg' },
];

const devTools = [
  { name: 'GitHub', filename: 'github.svg' },
  { name: 'Node.js', filename: 'node_js.svg' },
  { name: 'Vite', filename: 'vite.svg' },
  { name: 'React', filename: 'react.svg' },
  { name: 'Tailwind CSS', filename: 'tailwind_css.svg' },
  { name: 'Supabase', filename: 'supabase.svg' },
  { name: 'Firebase', filename: 'firebase.svg' },
  { name: 'Vercel', filename: 'vercel.svg' },
];

export const FullStackGrid = () => {
  return (
    <div className="w-full space-y-16">
      
      {/* AI Workflow Section */}
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-secondary opacity-60">
            AI Workflow
          </h3>
          <div className="flex-1 h-[1px] bg-primary/10"></div>
        </div>
        
        <div className="flex flex-wrap items-center gap-10 md:gap-14">
          {aiTools.map((tool) => (
            <div key={tool.name} className="group flex items-center gap-3 transition-transform hover:-translate-y-1 duration-300">
              <img 
                src={`/assets/stack/isotypes/${tool.filename}`}
                alt={tool.name}
                className="w-9 h-9 object-contain transition-all duration-300 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100"
              />
              <span className="font-bold text-xl font-sans text-primary transition-colors duration-300 group-hover:text-indigo-500">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Dev Engine & Cloud Section */}
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-secondary opacity-60">
            Dev Engine & Cloud
          </h3>
          <div className="flex-1 h-[1px] bg-primary/10"></div>
        </div>
        
        <div className="flex flex-wrap items-center gap-10 md:gap-14">
          {devTools.map((tool) => (
            <div
              key={tool.name}
              className="group flex items-center justify-center transition-transform hover:-translate-y-1 duration-300"
              title={tool.name}
            >
              <img 
                src={`/assets/stack/logotypes/${tool.filename}`}
                alt={tool.name}
                className="h-8 md:h-9 w-auto object-contain transition-all duration-300 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
