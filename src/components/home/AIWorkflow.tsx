import { motion } from 'framer-motion';
import { PenTool, BrainCircuit, Rocket } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { AnimatedText } from '../ui/AnimatedText';

export const AIWorkflow = () => {
  const { t } = useLanguage();

  const steps = [
    {
      id: '01',
      title: t('workflow.steps.s1.title'),
      tools: t('workflow.steps.s1.tools'),
      description: t('workflow.steps.s1.desc'),
      icon: PenTool,
    },
    {
      id: '02',
      title: t('workflow.steps.s2.title'),
      tools: t('workflow.steps.s2.tools'),
      description: t('workflow.steps.s2.desc'),
      icon: BrainCircuit,
    },
    {
      id: '03',
      title: t('workflow.steps.s3.title'),
      tools: t('workflow.steps.s3.tools'),
      description: t('workflow.steps.s3.desc'),
      icon: Rocket,
    }
  ];

  return (
    <section id="workflow" className="py-32 relative px-6 z-10 bg-primary transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-secondary)]/10 border border-[var(--accent-secondary)]/20 text-[var(--accent-secondary)] text-[10px] font-bold uppercase tracking-[0.2em] mb-8 transition-colors duration-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-secondary)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-secondary)]"></span>
              </span>
              <AnimatedText text={t('workflow.tag')} />
            </div>

            <h2 className="text-4xl md:text-7xl font-bold text-primary tracking-tighter leading-[0.9] mb-8 transition-colors duration-500">
              <AnimatedText text={t('workflow.title')} />
            </h2>

            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-[var(--accent-secondary)] opacity-50 transition-colors duration-500" />
              <span className="text-secondary font-mono text-sm tracking-widest uppercase transition-colors duration-500">
                <AnimatedText text={t('workflow.subtitle')} />
              </span>
            </div>
          </div>

          <div className="max-w-sm">
            <p className="text-secondary text-lg font-light leading-relaxed transition-colors duration-500 border-l border-primary pl-8">
              <AnimatedText text={t('workflow.desc')} />
            </p>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row items-stretch gap-6 lg:gap-8 relative w-full">
          <div className="hidden xl:block absolute top-[40%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-secondary)]/20 to-transparent -z-10" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={index} className="flex-1 w-full group relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="w-full h-full flex flex-col p-8 lg:p-10 bg-secondary border border-primary rounded-[2.5rem] relative overflow-hidden transition-all duration-500 group-hover:border-[var(--accent-secondary)]/40 group-hover:shadow-[0_20px_50px_-20px_rgba(168,85,247,0.15)]"
                >
                  <div className="flex justify-between items-start mb-10">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--accent-secondary)]/10 border border-[var(--accent-secondary)]/20 flex items-center justify-center text-[var(--accent-secondary)] group-hover:scale-110 group-hover:bg-[var(--accent-secondary)]/20 transition-all duration-500">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-4xl font-bold text-primary/10 font-mono group-hover:text-[var(--accent-secondary)]/20 transition-colors duration-500 tracking-tighter">{step.id}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-primary mb-3 transition-colors duration-500">
                    <AnimatedText text={step.title} />
                  </h3>

                  <div className="mb-6">
                    <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] leading-snug transition-colors duration-500">
                      <span className="text-[var(--accent-secondary)]">/</span> <AnimatedText text={step.tools} />
                    </p>
                  </div>

                  <p className="text-secondary font-light leading-relaxed transition-colors duration-500">
                    <AnimatedText text={step.description} />
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
