import React from 'react';
import { Claude, Gemini, Github, OpenAI } from '@lobehub/icons';

export const stackTools = [
  // Estrategia & Diseño
  { name: 'Figma', filename: 'figma.svg', color: '#F24E1E' },
  { name: 'Notion', filename: 'notion.svg', color: '#FFFFFF' },
  { name: 'Google Analytics', filename: 'google_analytics.svg', color: '#E37400' },
  // AI Workflow
  { name: 'Claude', filename: 'claude.svg', color: '#D97757' },
  { name: 'Gemini', filename: 'gemini.svg', color: '#8E75B2' },
  { name: 'OpenAI', filename: 'openai.svg', color: '#FFFFFF' },
  { name: 'Codex', filename: 'openai.svg', color: '#FFFFFF' }, // Using OpenAI logo for Codex
  { name: 'Cursor', filename: 'cursor.svg', color: '#FFFFFF' },
  { name: 'GitHub', filename: 'github.svg', color: '#FFFFFF' },
  // Dev Engine & Cloud
  { name: 'Node.js', filename: 'node_js.svg', color: '#5FA04E' },
  { name: 'Vite', filename: 'vite.svg', color: '#9135FF' },
  { name: 'React', filename: 'react.svg', color: '#61DAFB' },
  { name: 'Tailwind CSS', filename: 'tailwind_css.svg', color: '#06B6D4' },
  { name: 'Supabase', filename: 'supabase.svg', color: '#3FCF8E' },
  { name: 'Firebase', filename: 'firebase.svg', color: '#FFCA28' },
  { name: 'Vercel', filename: 'vercel.svg', color: '#FFFFFF' },
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
  { name: 'Vercel', filename: 'vercel.svg', color: '#FFFFFF' },
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
          
          <div className="flex items-center gap-3 transition-transform hover:-translate-y-1 duration-300">
            <OpenAI size={36} type="color" />
            <span className="font-bold text-xl font-sans text-primary">Codex</span>
          </div>
          
          <div className="flex items-center gap-3 transition-transform hover:-translate-y-1 duration-300">
            <Github size={36} />
            <span className="font-bold text-xl font-sans text-primary">GitHub</span>
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
