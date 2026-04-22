import React from 'react';
import { Claude, Gemini, Github, OpenAI } from '@lobehub/icons';
import { Sparkles } from 'lucide-react';

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
  { name: 'Antigravity', filename: 'antigravity.svg', color: 'var(--text-primary)' }, // We will use a fallback or text
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

type LocalTool = {
  name: string;
  filename: string;
  color: string;
};

const devTools: LocalTool[] = [
  { name: 'Node.js', filename: 'node_js.svg', color: '#5FA04E' },
  { name: 'Vite', filename: 'vite.svg', color: '#9135FF' },
  { name: 'React', filename: 'react.svg', color: '#61DAFB' },
  { name: 'Tailwind CSS', filename: 'tailwind_css.svg', color: '#06B6D4' },
  { name: 'Supabase', filename: 'supabase.svg', color: '#3FCF8E' },
  { name: 'Firebase', filename: 'firebase.svg', color: '#FFCA28' },
  { name: 'Vercel', filename: 'vercel.svg', color: 'var(--text-primary)' },
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
          <div className="flex items-center gap-3 transition-transform hover:-translate-y-1 duration-300">
            <Claude size={36} type="color" />
            <span className="font-bold text-xl font-sans text-primary">Claude</span>
          </div>
          
          <div className="flex items-center gap-3 transition-transform hover:-translate-y-1 duration-300">
            <Gemini size={36} type="color" />
            <span className="font-bold text-xl font-sans text-primary">Gemini</span>
          </div>
          
          <div className="flex items-center gap-3 transition-transform hover:-translate-y-1 duration-300 text-primary">
            <OpenAI size={36} />
            <span className="font-bold text-xl font-sans">Codex</span>
          </div>
          
          <div className="flex items-center gap-3 transition-transform hover:-translate-y-1 duration-300 text-primary">
            {/* VS Code is not in lobehub, using a clean SVG path for it to match the requested look */}
            <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 text-[#007ACC]">
              <path d="M1.385 4.398c-.183-.105-.406-.063-.54.103l-.715.891a.48.48 0 0 0 .041.65l6.468 5.76a.48.48 0 0 1 0 .717L.18 18.278a.48.48 0 0 0-.041.65l.715.891c.134.166.357.208.54.103l21.218-12.083c.182-.104.282-.303.245-.506l-.426-2.316a.48.48 0 0 0-.462-.395H1.385zm20.887 2.128l-.512-2.784a1.441 1.441 0 0 0-1.387-1.185H1.97A1.442 1.442 0 0 0 .546 4.102l-.715.891a1.44 1.44 0 0 0 .123 1.95l5.88 5.237-5.88 5.236a1.44 1.44 0 0 0-.123 1.95l.715.891c.403.5.143 1.25-.49 1.517l21.218 12.083A1.441 1.441 0 0 0 24 22.783v-5.266c0-.525-.28-1.011-.734-1.27l-5.321-3.03 5.321-3.03c.454-.259.734-.745.734-1.27V3.65c0-.203-.1-.402-.282-.506z"/>
            </svg>
            <span className="font-bold text-xl font-sans">VS Code</span>
          </div>

          <div className="flex items-center gap-3 transition-transform hover:-translate-y-1 duration-300 text-primary">
            {/* Antigravity representation using Sparkles as it's an AI assistant persona */}
            <div className="p-1 rounded-lg bg-primary/5 text-primary">
              <Sparkles size={28} className="text-indigo-500" />
            </div>
            <span className="font-bold text-xl font-sans">Antigravity</span>
          </div>
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
          <div className="flex items-center gap-3 transition-transform hover:-translate-y-1 duration-300 text-primary">
            <Github size={36} />
            <span className="font-bold text-xl font-sans">GitHub</span>
          </div>
          
          {devTools.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center justify-center transition-transform hover:-translate-y-1 duration-300"
              style={{ '--brand-color': tool.color } as React.CSSProperties}
              title={tool.name}
            >
              <div 
                className="w-32 h-9 bg-[var(--brand-color)] transition-colors duration-300"
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

    </div>
  );
};
