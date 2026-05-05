import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { AnimatedText } from '../ui/AnimatedText';

export const About = () => {
  const { t } = useLanguage();

  const getTranslatedSteps = () => {
    return t('about.steps') as string[];
  };

  return (
    <section id="about" className="py-24 relative px-6 z-10 bg-primary transition-colors duration-500 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto space-y-16">
        {/* BLOQUE 0: Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-primary tracking-tight leading-[1.1]">
            <AnimatedText text={t('about.title1')} /> <br />
            <AnimatedText text={t('about.title2')} className="text-gradient" /> <AnimatedText text={t('about.title3')} />
          </h2>
        </motion.div>

        {/* BLOQUE 1: Filosofía y Flujo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-secondary font-light leading-relaxed">
              <AnimatedText html={true} text={t('about.desc1')} />
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-6 rounded-2xl bg-secondary/50 border border-primary glass-card"
          >
            <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
              {getTranslatedSteps().map((step: string, i: number, arr: string[]) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-xl border border-[var(--accent-primary)] text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-primary bg-[var(--accent-primary-faded)] transition-colors">
                    <AnimatedText text={step} />
                  </span>
                  {i < arr.length - 1 && (
                    <span className="text-[var(--accent-primary)] font-bold opacity-30">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* BLOQUE 2: Stack Tecnológico */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-primary tracking-tight">
            <AnimatedText text={t('about.stack_title')} /> <AnimatedText text={t('about.stack_gradient')} className="text-gradient" />
          </h3>
          <p className="text-secondary text-sm mt-2 font-light"><AnimatedText text={t('about.stack_desc')} /></p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <StackCard
            title={t('about.cat_mgmt')}
            tools={[
              { name: "Figma", icon: "figma.svg" },
              { name: "Notion", icon: "notion.svg" },
              { name: "Miro", icon: "miro.svg" },
              { name: "Jira", icon: "jira.svg" },
              { name: "Slack", icon: "slack.svg" },
              { name: "Whimsical", icon: "Whimsical.svg" }
            ]}
            index={0}
          />
          <StackCard
            title={t('about.cat_ai')}
            tools={[
              { name: "Claude", icon: "claude-ai-icon.svg" },
              { name: "Gemini", icon: "gemini.svg" },
              { name: "Codex", icon: "codex.svg" },
              { name: "VS Code", icon: "vscode.svg" },
              { name: "GitHub", icon: "github.svg" },
              { name: "Antigravity", icon: "antigravity.svg" }
            ]}
            index={1}
          />
          <StackCard
            title={t('about.cat_cloud')}
            tools={[
              { name: "Firebase", icon: "firebase.svg" },
              { name: "Google Cloud", icon: "google-cloud.svg" },
              { name: "AWS", icon: "aws.svg" },
              { name: "Analytics", icon: "analytics.svg" },
              { name: "Supabase", icon: "supabase.svg" },
              { name: "PostgreSQL", icon: "postgresql.svg" }
            ]}
            index={2}
          />
        </div>
      </div>
    </section>
  );
};

interface Tool {
  name: string;
  icon: string;
}

const StackCard = ({ title, tools, index }: { title: string, tools: Tool[], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
    className="p-6 rounded-2xl bg-primary/30 border border-primary transition-all duration-300 group"
  >
    <h4 className="text-primary font-bold mb-6 text-sm uppercase tracking-widest opacity-70"><AnimatedText text={title} /></h4>
    <div className="grid grid-cols-3 gap-y-8 gap-x-4">
      {tools.map((tool) => (
        <div key={tool.name} className="flex flex-col items-center gap-2 group/tool">
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-secondary border border-primary group-hover/tool:bg-primary/20 group-hover/tool:border-primary transition-all duration-300">
            <img 
              src={`/assets/stack/isotypes/${tool.icon}`} 
              alt={tool.name}
              className="w-7 h-7 object-contain opacity-80 group-hover/tool:opacity-100 isotype-img"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
          <span className="text-[10px] text-secondary font-medium text-center leading-tight group-hover/tool:text-primary transition-colors">
            {tool.name}
          </span>
        </div>
      ))}
    </div>
  </motion.div>
);
