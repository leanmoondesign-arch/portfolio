import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ProjectModal } from '../ui/ProjectModal';
import { ProjectCard } from '../ui/ProjectCard';
import type { CaseStudy } from '../../i18n/projects';
import { useLanguage } from '../../context/LanguageContext';
import { AnimatedText } from '../ui/AnimatedText';
import { getVaultProjects } from '../../i18n/projects';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export const DigitalVault = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { language, t } = useLanguage();
  const projects = getVaultProjects(language);

  const selectedProject = projects.find(p => p.id === selectedId) || null;

  return (
    <>
      <section id="vault" className="py-32 relative px-6 z-10 bg-primary transition-colors duration-500 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-8 transition-colors duration-500">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <AnimatedText text={t('vault.tag')} />
              </div>
              <h2 className="text-4xl md:text-7xl font-bold text-primary tracking-tighter leading-[0.9] mb-8 transition-colors duration-500">
                <AnimatedText text={t('vault.title')} /> <br />
                <AnimatedText text={t('vault.subtitle')} className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-400 dark:from-cyan-400 dark:to-emerald-400" />
              </h2>
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-primary/20 transition-colors duration-500" />
                <span className="text-secondary font-mono text-sm tracking-widest uppercase transition-colors duration-500"><AnimatedText text={t('vault.sideprojects')} /></span>
              </div>
            </div>
            <div className="max-w-sm">
              <p className="text-secondary text-lg font-light leading-relaxed transition-colors duration-500 border-l border-primary pl-8">
                <AnimatedText text={t('vault.desc')} />
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
