import { motion, type Variants } from 'framer-motion';
import { useRef } from 'react';
import cvPath from '../../assets/Moon_Leandro_2026.pdf';

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
    <section id="hero" ref={containerRef} className="relative min-h-[100svh] flex flex-col justify-center px-6 pt-32 pb-20 overflow-hidden bg-primary transition-colors duration-500">
      {/* Background Elements - Now Animated */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-[var(--accent-primary)]/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-[20%] -right-[5%] w-[40%] h-[40%] bg-[var(--accent-secondary)]/10 rounded-full blur-[100px]"
        />
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
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[clamp(4.5rem,10vw,10rem)] font-bold tracking-tighter mb-10 md:mb-12 text-primary transition-colors duration-500 leading-[0.85]"
        >
          AI Product <br />
          <span className="text-gradient">Architect</span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="max-w-3xl lg:max-w-4xl"
        >
          <p className="text-xl md:text-2xl text-primary font-light transition-colors duration-500 leading-relaxed">
            Hola, soy <span className="font-bold">Leandro Moon</span> y traduzco problemas en soluciones reales mediante un flujo <span className="font-bold">End-to-End</span> potenciado por IA. Desde el <span className="font-bold">diseño de AI Skills</span> hasta la ejecución técnica, construyo productos digitales fluidos, escalables y con valor real para el usuario.
          </p>
        </motion.div>

        {/* Unified Actions Row */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 mt-14"
        >
          <a
            href="#projects"
            style={{ backgroundColor: 'var(--accent-primary)', boxShadow: '0 15px 40px -15px var(--accent-primary)' }}
            className="group relative px-10 py-5 rounded-2xl text-white font-bold transition-all hover:scale-105 hover:brightness-110 active:scale-95 text-[10px] tracking-[0.2em] uppercase whitespace-nowrap"
          >
            Ver Proyectos
          </a>

          <div className="flex items-center gap-x-6 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
            <a
              href={cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-[var(--accent-primary)] transition-all relative group"
            >
              CV
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--accent-primary)] group-hover:w-full transition-all duration-300" />
            </a>
            <span className="opacity-10 text-primary">/</span>
            <a
              href="https://www.linkedin.com/in/leanmoon/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-[var(--accent-primary)] transition-all relative group"
            >
              LinkedIn
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--accent-primary)] group-hover:w-full transition-all duration-300" />
            </a>
            <span className="opacity-10 text-primary">/</span>
            <a
              href="#contact"
              className="text-primary hover:text-[var(--accent-primary)] transition-all relative group"
            >
              Hablemos
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--accent-primary)] group-hover:w-full transition-all duration-300" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
