import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ProjectModal } from '../ui/ProjectModal';
import { ProjectCard } from '../ui/ProjectCard';
import type { CaseStudy } from '../../types';

const vaultProjects: CaseStudy[] = [
  {
    id: 'subo-redesign',
    title: 'Cuando SUBO — Redesign',
    summary: 'Propuesta de rediseño UX para resolver los principales pain points de la app de transporte público más usada de Buenos Aires, priorizando velocidad de acceso y usabilidad en contextos de movilidad real.',
    category: 'Personal',
    stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'Firebase', 'GitHub', 'Claude', 'Gemini/Codex', 'AI Skills'],
    images: Array.from({ length: 10 }, (_, i) => `/projects/subo-redesign/${i + 1}.webp`),
    demo: 'https://cuando-subo-redesign.vercel.app/',
    github: '#',
    vision: 'Propuesta de rediseño UX para resolver los principales pain points de la app de transporte público más usada de Buenos Aires, priorizando velocidad de acceso y usabilidad en contextos de movilidad real.',
    problem: 'La arquitectura de información de la app no responde a los casos de uso críticos del usuario en movimiento: consulta de saldo, carga y seguimiento de recorridos. La interfaz no está optimizada para uso en exteriores ni para interacciones de alta frecuencia y baja tolerancia al error.',
    solution: 'Conduje un proceso de UX research basado en mi experiencia como usuario frecuente, mapeé los flujos críticos y rediseñé la arquitectura de información alrededor de las tres acciones más frecuentes. Interfaz de alto contraste para uso en exteriores, flujo de carga reducido a tres pasos y sistema de notificaciones contextual.',
    execution: 'Skill de research en Claude para estructurar el análisis de pain points y generar las primeras hipótesis de rediseño. Las propuestas de UI fueron iteradas directamente en código con un Skill de front-end antes de entrar a Figma para el refinamiento final.',
    impact: ['Flujo de carga reducido de 7+ pasos a 3.', 'Interfaz de alto contraste optimizada para legibilidad en exteriores.', 'Sistema de notificaciones contextual que reduce interrupciones innecesarias.'],
    features: ['UX research y mapeo de pain points', 'Rediseño de arquitectura de información', 'Sistema de UI de alto contraste para uso en exteriores', 'Diseño de notificaciones contextual y no invasivo']
  },
  {
    id: 'awaken-project',
    title: 'Awaken — Habit Gamification',
    summary: 'Plataforma de gamificación de hábitos construida sobre principios de behavioral design y el modelo de los 66 días. Desarrollada para resolver el problema principal de los habit trackers: la ausencia de recompensa psicológica inmediata.',
    category: 'Personal',
    stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'Supabase', 'GitHub', 'Claude', 'Gemini/Codex', 'AI Skills'],
    images: Array.from({ length: 10 }, (_, i) => `/projects/awaken-project/${i + 1}.webp`),
    demo: 'https://awaken-project.vercel.app/',
    github: '#',
    vision: 'Plataforma de gamificación de hábitos construida sobre principios de behavioral design y el modelo de los 66 días. Desarrollada para resolver el problema principal de los habit trackers: la ausencia de recompensa psicológica inmediata.',
    problem: 'Los habit trackers existentes tienen tasas de abandono críticas porque no generan engagement sostenido. La ausencia de feedback loops positivos y recompensas inmediatas hace que el usuario pierda motivación antes de que el hábito se consolide.',
    solution: 'Diseñé e implementé un sistema de gamificación con mecánicas de RPG: experiencia acumulable, niveles, rachas y un avatar que evoluciona con el progreso real del usuario. Cada hábito completado genera feedback inmediato y progresión visible.',
    execution: 'Proyecto end-to-end con ownership total: arquitectura de datos en Supabase, desarrollo front-end y lógica de gamificación. Skill de arquitectura en Claude con los fundamentos científicos del modelo de hábitos y la lógica de progresión. Gemini Pro y Codex para la ejecución de componentes.',
    impact: ['Sistema de recompensa visual inmediata impulsando la completitud diaria de hábitos.', 'Mecánicas de progresión RPG sosteniendo el engagement a largo plazo.', 'Arquitectura de datos escalable soportando tracking de múltiples hábitos.'],
    features: ['Sistema de progresión basado en RPG: XP, niveles, rachas', 'Avatar que evoluciona con el progreso real del usuario', 'Modelo de consolidación de hábitos en 66 días', 'Arquitectura de datos escalable en Supabase + PostgreSQL']
  },
  {
    id: 'cumbre-portfolio',
    title: 'Cumbre — Agency Portfolio',
    summary: 'Landing de alta performance para agencia creativa, desarrollada como alternativa técnica a WordPress con foco en velocidad de carga, animaciones fluidas y SEO optimizado.',
    category: 'Personal',
    stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'GitHub', 'Claude', 'Gemini/Codex', 'AI Skills'],
    images: Array.from({ length: 10 }, (_, i) => `/projects/cumbre-portfolio/${i + 1}.webp`),
    demo: 'https://cumbreportfolio.vercel.app/',
    github: '#',
    vision: 'Landing de alta performance para agencia creativa, desarrollada como alternativa técnica a WordPress con foco en velocidad de carga, animaciones fluidas y SEO optimizado.',
    problem: 'El brief original requería WordPress, una plataforma que genera overhead técnico innecesario para un sitio de alta carga visual. La primera impresión de una agencia creativa no puede verse comprometida por tiempo de carga.',
    solution: 'Propuse y desarrollé una SPA ultraligera con React y Vite, usando GSAP para animaciones de scroll que no penalizan la carga inicial. El resultado fue un sitio con Performance 100/100 en Lighthouse.',
    execution: 'Skill de front-end en Claude con el criterio visual del proyecto y las restricciones del stack. Codex para la ejecución de componentes. Primer proyecto donde validé en producción el workflow AI-assisted que luego escalé a los proyectos de Peabody.',
    impact: ['Lighthouse Performance score: 100/100.', 'Animaciones GSAP sin impacto en el tiempo de carga inicial.', 'Primera validación en producción del workflow AI-assisted.'],
    features: ['SPA ultraligera: React + Vite', 'Animaciones de scroll con GSAP', 'Optimización SEO desde el build inicial', 'Workflow AI-assisted: Claude Skill + Codex']
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export const DigitalVault = () => {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);
  return (
    <>
      <section id="vault" className="py-32 relative px-6 z-10 bg-primary transition-colors duration-500">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20 text-[var(--accent-primary)] text-[10px] font-bold uppercase tracking-[0.2em] mb-8 transition-colors duration-500">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-primary)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-primary)]"></span>
                </span>
                Proactive Research & Vibecoding
              </div>
              <h2 className="text-4xl md:text-7xl font-bold text-primary tracking-tighter leading-[0.9] mb-8 transition-colors duration-500">
                Experimentos <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-400 dark:from-cyan-400 dark:to-emerald-400">Personales.</span>
              </h2>
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-primary/20 transition-colors duration-500" />
                <span className="text-secondary font-mono text-sm tracking-widest uppercase transition-colors duration-500">Side Projects</span>
              </div>
            </div>
            <div className="max-w-sm">
              <p className="text-secondary text-lg font-light leading-relaxed transition-colors duration-500 border-l border-primary pl-8">
                Mi proactividad va más allá de la empresa. Estos proyectos reflejan mi estilo de diseño y criterio estratégico, orientados siempre a proveer la solución más empática y eficiente para el usuario.
              </p>
            </div>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vaultProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
            ))}
          </motion.div>
        </div>
      </section>
      <ProjectModal isOpen={selectedProject !== null} onClose={() => setSelectedProject(null)} data={selectedProject} />
    </>
  );
};
