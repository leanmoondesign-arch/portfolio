import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "../../types";

// Icons that get rendered as a single combo tag (no text, just icons side by side)
const comboIcons = ['React', 'Vite', 'TypeScript', 'Node.js'];

const stackIcons: Record<string, string> = {
  'React': 'react.svg',
  'Vite': 'vite.svg',
  'TypeScript': 'typescript.svg',
  'Node.js': 'nodejs.svg',
  'Claude': 'claude-ai-icon.svg',
  'Gemini/Codex': 'gemini.svg',
  'AI Skills': 'antigravity.svg',
  'GitHub': 'github.svg',
  'Firebase': 'firebase.svg',
  'Supabase': 'supabase.svg',
  'AWS': 'aws.svg',
  'Figma': 'figma.svg',
  'Notion': 'notion.svg',
  'Jira': 'jira.svg',
  'Google Cloud': 'google-cloud.svg',
  'PostgreSQL': 'postgresql.svg',
  'VS Code': 'vscode.svg',
};

type Props = { 
  project: CaseStudy; 
  onClick: () => void;
};

export const ProjectCard = ({ project, onClick }: Props) => {
  // Separate combo items from regular items
  const comboItems = project.stack.filter(item => comboIcons.includes(item));
  const regularItems = project.stack.filter(item => !comboIcons.includes(item));

  return (
    <motion.button
      type="button"
      onClick={onClick}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-2xl border border-primary bg-secondary text-left shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all hover:border-[var(--accent-primary)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] w-full isolation-isolate"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-indigo-500/10 blur-2xl" />
      </div>

      <div className="flex items-center border-b border-primary px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="text-2xl font-bold leading-tight text-primary transition-colors group-hover:text-indigo-500 duration-300">
            {project.title}
          </h3>
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-secondary transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
        </div>

        <p className="line-clamp-3 text-sm leading-relaxed text-secondary font-light mb-6 transition-colors duration-500">
          {project.summary}
        </p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
          {/* Combo tag: React + Vite + TS + Node icons together */}
          {comboItems.length > 0 && (
            <span className="flex items-center gap-1 rounded-md border border-primary bg-primary/50 px-2 py-1 transition-colors duration-500">
              {comboItems.map((item, i) => (
                <span key={item} className="flex items-center gap-1">
                  {i > 0 && <span className="text-[9px] text-secondary/40 font-bold">+</span>}
                  <img 
                    src={`/assets/stack/isotypes/${stackIcons[item]}`} 
                    alt={item}
                    title={item}
                    className="w-3.5 h-3.5 object-contain isotype-img"
                  />
                </span>
              ))}
            </span>
          )}

          {/* Regular stack tags */}
          {regularItems.map((item, index) => {
            const icon = stackIcons[item];
            const isGeminiCodex = item === 'Gemini/Codex';
            return (
              <span 
                key={`${project.id}-stack-${index}`} 
                className="flex items-center gap-1.5 rounded-md border border-primary bg-primary/50 px-2.5 py-1 text-[10px] text-secondary uppercase tracking-wider font-medium transition-colors duration-500"
              >
                {isGeminiCodex ? (
                  <>
                    <img 
                      src="/assets/stack/isotypes/gemini.svg" 
                      alt="Gemini"
                      className="w-3.5 h-3.5 object-contain isotype-img"
                    />
                    <img 
                      src="/assets/stack/isotypes/codex.svg" 
                      alt="Codex"
                      className="w-3.5 h-3.5 object-contain isotype-img"
                    />
                  </>
                ) : icon ? (
                  <img 
                    src={`/assets/stack/isotypes/${icon}`} 
                    alt={item}
                    className="w-3.5 h-3.5 object-contain isotype-img"
                  />
                ) : null}
                {item}
              </span>
            );
          })}
        </div>

        <div className="mt-4 border-t border-primary pt-3 flex justify-between items-center transition-colors duration-500">
          <span className="rounded-md border border-primary bg-primary/30 px-2.5 py-1 text-[10px] text-secondary font-semibold uppercase tracking-wide">
            {project.category === "Work" ? "Enterprise" : "Personal"}
          </span>
          <span className="text-[10px] text-indigo-500 font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
            Ver Caso →
          </span>
        </div>
      </div>
    </motion.button>
  );
};
