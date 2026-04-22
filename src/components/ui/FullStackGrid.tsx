import React from 'react';

type Tool = {
  name: string;
  filename: string;
  color: string;
  category: 'Estrategia & Diseño' | 'AI Workflow' | 'Dev Engine & Cloud';
};

export const stackTools: Tool[] = [
  // Estrategia & Diseño
  { name: 'Figma', filename: 'figma.svg', color: '#F24E1E', category: 'Estrategia & Diseño' },
  { name: 'Notion', filename: 'notion.svg', color: '#FFFFFF', category: 'Estrategia & Diseño' },
  { name: 'Google Analytics', filename: 'google_analytics.svg', color: '#E37400', category: 'Estrategia & Diseño' },
  
  // AI Workflow
  { name: 'Claude', filename: 'claude.svg', color: '#D97757', category: 'AI Workflow' },
  { name: 'Gemini', filename: 'gemini.svg', color: '#8E75B2', category: 'AI Workflow' },
  { name: 'OpenAI', filename: 'openai.svg', color: '#FFFFFF', category: 'AI Workflow' },
  { name: 'Cursor', filename: 'cursor.svg', color: '#FFFFFF', category: 'AI Workflow' },
  
  // Dev Engine & Cloud
  { name: 'Node.js', filename: 'node_js.svg', color: '#5FA04E', category: 'Dev Engine & Cloud' },
  { name: 'Vite', filename: 'vite.svg', color: '#9135FF', category: 'Dev Engine & Cloud' },
  { name: 'React', filename: 'react.svg', color: '#61DAFB', category: 'Dev Engine & Cloud' },
  { name: 'Tailwind CSS', filename: 'tailwind_css.svg', color: '#06B6D4', category: 'Dev Engine & Cloud' },
  { name: 'Supabase', filename: 'supabase.svg', color: '#3FCF8E', category: 'Dev Engine & Cloud' },
  { name: 'Firebase', filename: 'firebase.svg', color: '#FFCA28', category: 'Dev Engine & Cloud' },
  { name: 'Vercel', filename: 'vercel.svg', color: '#FFFFFF', category: 'Dev Engine & Cloud' },
];

export const FullStackGrid = () => {
  const categories = Array.from(new Set(stackTools.map(t => t.category)));

  return (
    <div className="w-full space-y-12">
      {categories.map((category) => (
        <div key={category} className="space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-secondary opacity-60">
            {category}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {stackTools.filter(t => t.category === category).map((tool) => (
              <div
                key={tool.name}
                className="group relative flex items-center justify-center p-6 rounded-2xl bg-secondary/50 border border-primary/10 transition-all duration-500 hover:border-white/20 hover:bg-secondary"
                style={{ '--brand-color': tool.color } as React.CSSProperties}
              >
                <div 
                  className="w-full h-8 transition-all duration-500 bg-white/50 group-hover:scale-105 group-hover:bg-[var(--brand-color)]"
                  style={{
                    WebkitMaskImage: `url('/assets/stack/logotypes/${tool.filename}')`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskImage: `url('/assets/stack/logotypes/${tool.filename}')`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
