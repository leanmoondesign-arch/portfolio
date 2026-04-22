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

const localTools: LocalTool[] = [
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
    <div className="w-full overflow-hidden py-10 relative">
      {/* Gradients for smooth fade effect at edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-infinite-scroll">
        {/* We duplicate the array 3 times to ensure infinite scroll fills the screen */}
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center gap-16 px-8">
            
            {/* LobeHub Icons */}
            <div className="flex items-center gap-3 transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-105">
              <Claude size={32} type="color" />
              <span className="font-bold text-lg font-sans">Claude</span>
            </div>
            
            <div className="flex items-center gap-3 transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-105">
              <Gemini size={32} type="color" />
              <span className="font-bold text-lg font-sans">Gemini</span>
            </div>
            
            <div className="flex items-center gap-3 transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-105">
              <OpenAI size={32} type="color" />
              <span className="font-bold text-lg font-sans">Codex</span>
            </div>
            
            <div className="flex items-center gap-3 transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-105">
              <Github size={32} />
              <span className="font-bold text-lg font-sans">GitHub</span>
            </div>

            {/* Local Icons */}
            {localTools.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center justify-center transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-105"
                style={{ '--brand-color': tool.color } as React.CSSProperties}
                title={tool.name}
              >
                <div 
                  className="w-32 h-8 bg-[var(--brand-color)] transition-colors duration-300"
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
        ))}
      </div>
    </div>
  );
};
