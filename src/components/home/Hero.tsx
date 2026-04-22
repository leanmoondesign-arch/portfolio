import { motion, type Variants } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative min-h-[100svh] lg:h-screen flex flex-col justify-center px-6 pt-32 pb-20 overflow-hidden bg-primary transition-colors duration-500">
      {/* Background Elements - Now Static */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[var(--accent-primary)]/5 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-[var(--accent-secondary)]/5 rounded-full blur-[100px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto w-full flex flex-col items-center text-center relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20 text-[var(--accent-primary)] text-[10px] font-bold uppercase tracking-[0.2em]">
            Welcome | Intro
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 text-primary transition-colors duration-500"
        >
          AI Product <span className="text-gradient">Architect</span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="max-w-2xl space-y-6"
        >
          <p className="text-xl md:text-2xl text-primary font-light transition-colors duration-500 leading-relaxed">
            Hola, mi nombre es Leandro Moon y soy una persona con facilidad para escuchar e identificar <span className="italic">problemas</span>, y una curiosidad innata por resolverlos.
          </p>
          <p className="text-sm md:text-base text-secondary font-light leading-relaxed transition-colors duration-500 opacity-80">
            Creo que el diseño es, ante todo, un acto de empatía. Mi rol es ser el puente comunicativo donde la estrategia del negocio y la necesidad humana dejan de ser opuestos para convertirse en una solución.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-row items-center gap-6 mt-12">
          <a
            href="#projects"
            style={{ backgroundColor: 'var(--accent-primary)', boxShadow: '0 10px 30px -10px var(--accent-primary)' }}
            className="group relative px-10 py-4 rounded-2xl text-white font-bold transition-all hover:scale-105 hover:brightness-110 active:scale-95 text-xs tracking-widest uppercase"
          >
            Ver Proyectos
          </a>
          <a
            href="#contact"
            className="group flex items-center gap-2 text-primary hover:text-[var(--accent-primary)] transition-all text-xs font-bold tracking-widest uppercase"
          >
            Hablemos
            <span className="w-8 h-[1px] bg-primary group-hover:bg-[var(--accent-primary)] transition-all duration-300" />
          </a>
        </motion.div>
      </motion.div>

      {/* Static Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2 text-primary z-10 hover:text-[var(--accent-primary)] transition-colors cursor-default"
      >
        <span className="italic text-[10px] uppercase tracking-[0.4em] font-light opacity-30">Explorar</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
        </motion.div>
      </motion.div>
    </section>
  );
};
