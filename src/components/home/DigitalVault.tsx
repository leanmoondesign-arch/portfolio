import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ProjectModal } from '../ui/ProjectModal';
import { ProjectCard } from '../ui/ProjectCard';
import type { CaseStudy } from '../../types';

const vaultProjects: CaseStudy[] = [
  {
    id: 'subo-redesign',
    title: 'Cuando SUBO Redesign',
    summary: "Soy usuario del transporte público y, como cualquier porteño, la app me frustraba. No por lo que le faltaba, sino porque en el momento que más la necesitás —apurado, en la calle, con el sol en la pantalla— fallaba. Tomé eso como punto de partida para proponer un rediseño desde cero, centrado en velocidad y claridad.",
    category: 'Personal',
    stack: ['UX/UI Design', 'Vibecoding', 'React', 'Firebase', 'APIs', 'Claude+Skills', 'GitHub'],
    images: Array.from({ length: 10 }, (_, i) => `/projects/subo-redesign/${i + 1}.webp`),
    impact: [
      "Flujo de carga reducido a 3 pasos",
      "Interfaz de alto contraste optimizada para uso en exteriores",
      "Sistema de notificaciones contextual, no invasivo"
    ],
    problem: "La app está diseñada para quien tiene tiempo de explorarla. Pero la movilidad urbana no funciona así: necesitás la información justa, en el momento justo, sin fricción. Cada segundo de confusión tiene un costo real.",
    solution: "Investigué los flujos más usados y rediseñé la experiencia alrededor de ellos: consulta de saldo, carga y seguimiento de recorridos. Interfaz de alto contraste para usar al aire libre, flujo de carga reducido a tres pasos, y notificaciones que avisan cuando importa.",
    demo: 'https://cuando-subo-redesign.vercel.app/',
    github: '#'
  },
  {
    id: 'awaken-project',
    title: 'Awaken Project',
    summary: "Soy fan de los videojuegos y tenía dificultades para sostener hábitos. Un día me pregunté: ¿qué pasaría si completar una rutina diaria se sintiera como subir de nivel? Awaken nació de esa pregunta. Una app que convierte hábitos en misiones, el progreso en experiencia, y los 66 días que tarda un hábito en consolidarse en una aventura que vale la pena terminar.",
    category: 'Personal',
    stack: ['Vibecoding', 'React', 'SQL', 'Auth & Security', 'Claude+Skills', 'Gemini/Codex', 'GitHub'],
    images: Array.from({ length: 10 }, (_, i) => `/projects/awaken-project/${i + 1}.webp`),
    impact: [
      "Sistema de rachas con recompensas visuales inmediatas",
      "Avatar que evoluciona según el progreso real del usuario",
      "Arquitectura de datos escalable construida con Supabase y PostgreSQL"
    ],
    problem: "Los habit trackers son funcionales pero aburridos. No ofrecen ninguna recompensa psicológica inmediata, y eso hace que sean fáciles de abandonar. Si no sentís que algo avanza, dejás de hacerlo.",
    solution: "Construí Awaken de punta a punta: desde la arquitectura de datos hasta la interfaz. Integré mecánicas de RPG —niveles, experiencia, rachas— a la gestión de tareas diarias. Cada hábito completado hace evolucionar a tu personaje. La base científica viene del modelo de los 66 días y principios de diseño de comportamiento, para que la gamificación tenga un propósito real y no sea solo estética.",
    demo: 'https://awaken-project.vercel.app/',
    github: '#'
  },
  {
    id: 'cumbre-portfolio',
    title: 'Cumbre Portfolio',
    summary: "En la facu nos pidieron hacer un portfolio en WordPress. A mí WordPress me resulta rígido, y mis compañeros no tenían experiencia en desarrollo web. Así que propuse hacer algo distinto: diseñé y desarrollé la landing desde cero con las herramientas que ya dominaba, usando IA como co-piloto, para llegar a un resultado que realmente nos representara.",
    category: 'Personal',
    stack: ['Vibecoding', 'React', 'Vite', 'DNS & APIs', 'Claude+Skills', 'Gemini/Codex', 'GitHub'],
    images: Array.from({ length: 10 }, (_, i) => `/projects/cumbre-portfolio/${i + 1}.webp`),
    impact: [
      "Performance 100/100 en Lighthouse",
      "Animaciones fluidas sin penalizar la carga inicial",
      "Validación del flujo de trabajo con IA que uso profesionalmente"
    ],
    problem: "Las agencias creativas suelen tener sitios que pesan demasiado. El tiempo de carga penaliza la primera impresión, justamente cuando más importa.",
    solution: "Desarrollé una SPA ultraligera con React y Vite, usando GSAP para animaciones de scroll que no comprometen la carga inicial. El proceso fue el mismo que aplico en el trabajo: Claude para planificar y maquetar, Gemini y Codex para ejecutar, con skills personalizados para cada componente y prompts refinados para minimizar alucinaciones.",
    demo: 'https://cumbreportfolio.vercel.app/',
    github: '#'
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const DigitalVault = () => {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);

  return (
    <>
      <section id="vault" className="py-32 relative px-6 z-10 bg-primary transition-colors duration-500">
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header - Redesigned for Proactive Criteria */}
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
                Criterio en <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-400 dark:from-cyan-400 dark:to-emerald-400">Movimiento</span>
              </h2>
              
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-primary/20 transition-colors duration-500" />
                <span className="text-secondary font-mono text-sm tracking-widest uppercase transition-colors duration-500">
                  Exploraciones Personales & Side Projects
                </span>
              </div>
            </div>

            <div className="max-w-sm">
              <p className="text-secondary text-lg font-light leading-relaxed transition-colors duration-500 border-l border-primary pl-8">
                Mi proactividad va más allá de la empresa. Estos proyectos reflejan mi estilo de diseño y criterio estratégico, orientados siempre a proveer la solución más empática y eficiente para el usuario.
              </p>
            </div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {vaultProjects.map((project) => (
              <ProjectCard 
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <ProjectModal 
        isOpen={selectedProject !== null} 
        onClose={() => setSelectedProject(null)} 
        data={selectedProject} 
      />
    </>
  );
};
