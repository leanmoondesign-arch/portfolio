import React from 'react';
import { stackTools } from './FullStackGrid';

interface ProjectIconsProps {
  techNames: string[];
  className?: string;
}

export const ProjectIcons = ({ techNames, className = "" }: ProjectIconsProps) => {
  // Map provided names to tool configurations
  const icons = techNames.map(name => {
    // Try exact match or partial match
    return stackTools.find(
      t => t.name.toLowerCase() === name.toLowerCase() || 
           name.toLowerCase().includes(t.name.toLowerCase())
    );
  }).filter(Boolean); // Remove unfound icons

  if (icons.length === 0) return null;

  return (
    <div className={`flex flex-wrap gap-1.5 ${className}`}>
      {icons.map((icon, index) => (
        <div
          key={`${icon!.name}-${index}`}
          className="group relative flex items-center justify-center w-6 h-6 rounded-md bg-secondary/80 border border-primary/10 transition-all duration-300 hover:scale-110 hover:border-white/20 hover:bg-secondary"
          style={{ '--brand-color': icon!.color } as React.CSSProperties}
          title={icon!.name}
        >
          <div 
            className="w-3 h-3 transition-all duration-300 bg-white/50 group-hover:bg-[var(--brand-color)]"
            style={{
              WebkitMaskImage: `url('/assets/stack/isotypes/${icon!.filename}')`,
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              maskImage: `url('/assets/stack/isotypes/${icon!.filename}')`,
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
            }}
          />
        </div>
      ))}
    </div>
  );
};
