import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ProjectModal } from '../ui/ProjectModal';
import { ProjectCard } from '../ui/ProjectCard';
import { useLanguage } from '../../context/LanguageContext';
import { AnimatedText } from '../ui/AnimatedText';
import { getEnterpriseProjects } from '../../i18n/projects';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export const EnterpriseImpact = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { language, t } = useLanguage();
  const projects = getEnterpriseProjects(language);
  
  const selectedProject = projects.find(p => p.id === selectedId) || null;
  
  return (
    <>
      <section id="projects" className="py-32 relative px-6 z-10 bg-primary transition-colors duration-500">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20 text-[var(--accent-primary)] text-[10px] font-bold uppercase tracking-[0.2em] mb-8 transition-colors duration-500">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-primary)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-primary)]"></span>
                </span>
                <AnimatedText text={t('enterprise.tag')} />
              </div>
              <h2 className="text-5xl md:text-8xl font-bold text-primary tracking-tighter leading-[0.9] mb-8 transition-colors duration-500">
                <AnimatedText text={t('enterprise.title1')} /> <br /><AnimatedText text={t('enterprise.title2')} className="text-gradient" />
              </h2>
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[var(--accent-primary)] opacity-50" />
                <span className="text-secondary font-mono text-sm tracking-widest uppercase transition-colors duration-500"><AnimatedText text={t('enterprise.subtitle')} /></span>
              </div>
            </div>
            <div className="max-w-sm">
              <p className="text-secondary text-lg font-light leading-relaxed transition-colors duration-500 border-l border-primary pl-8">
                <AnimatedText text={t('enterprise.desc')} />
              </p>
            </div>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} onClick={() => setSelectedId(project.id)} />
            ))}
          </motion.div>
        </div>
      </section>
      <ProjectModal isOpen={selectedId !== null} onClose={() => setSelectedId(null)} data={selectedProject} />
    </>
  );
};
