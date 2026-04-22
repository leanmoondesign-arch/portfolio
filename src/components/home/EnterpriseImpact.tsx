import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectModal } from '../ui/ProjectModal';
import { ProjectIcons } from '../ui/ProjectIcons';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import type { CaseStudy } from '../../types';

const items: CaseStudy[] = [
  {
    id: 'peabody-pim',
    title: 'PIM (Product Information Manager)',
    summary: "Antes de que existiera esta herramienta, cada área de la empresa vivía en su propia isla. Marketing tenía sus carpetas, Ingeniería las suyas, CX pedía por mail lo que Producto tardaba días en mandar. Identifiqué ese ruido y trabajé para eliminarlo: un gestor centralizado que convirtió el caos de activos y datos técnicos en una única fuente de verdad para toda la empresa.",
    category: 'Work',
    stack: ['Information Architecture', 'Product Strategy', 'React', 'Node.js', 'Claude+Skills', 'GitHub'],
    images: Array.from({ length: 10 }, (_, i) => `/projects/peabody-pim/${i + 1}.webp`),
    privacyNotice: 'Debido a políticas de privacidad y confidencialidad de la empresa Goldmund SA, no es posible mostrar el acceso directo a la plataforma ni datos internos sensibles de producción.',
    impact: [
      "Cero ruido: toda la información de producto: fichas técnicas, assets de marketing, manuales de service, datos para CX, en un solo lugar, actualizada y accesible.",
      "Las solicitudes entre áreas que antes tardaban días desaparecieron por completo.",
      "La carga de datos se volvió un proceso colectivo: cada área encontró su propio motivo para nutrir el sistema.",
      "El proyecto que había fallado dos veces fue finalmente adoptado porque cambió el enfoque: de 'implementar tecnología' a 'resolver problemas de personas'."
    ],
    problem: "Más de 300 productos, múltiples departamentos, y ninguno hablaba el mismo idioma. Archivos duplicados, versiones sin nombre, assets que llegaban tarde y en el formato equivocado. El equipo de Sistemas había intentado antes proponer este gestor, pero sin lograr que los demás comprendieran su valor real. El problema no era técnico: era de empatía y comunicación.",
    solution: "Mi rol fue escuchar antes de proponer. Fui departamento por departamento —Marketing, CX, Ingeniería, Service— identificando qué les dolía en su día a día. A partir de esos puntos de dolor reales, fui armando los MVPs del producto y presentando features que resolvían problemas concretos para cada equipo. No convencí a nadie de 'usar un sistema nuevo': les mostré cómo ese sistema les devolvía tiempo. La adopción llegó sola.",
    features: [
      "Ficha técnica normalizada por producto",
      "Repositorio centralizado de assets multimedia con conversión automática a WebP",
      "Acceso segmentado por rol (Marketing, Ingeniería, CX, Service)",
      "Núcleo de datos que alimenta ecommerce, catálogos y sistemas de atención"
    ]
  },
  {
    id: 'peabody-ecosistema',
    title: 'Ecosistema Web Peabody',
    summary: "Cuando el equipo interno empezó a tomar las riendas de los productos digitales que antes estaban tercerizados, mi rol fue asegurar que la migración no fuera solo técnica, sino centrada en las personas que iban a usar esas herramientas todos los días. Desde webs con código legacy hasta productos construidos desde cero, fui el puente entre lo que el negocio necesitaba y lo que el usuario iba a vivir.",
    category: 'Work',
    stack: ['UX Research', 'UI Design', 'React', 'Vite', 'Node.js', 'Claude+Skills', 'Gemini/Codex', 'GitHub'],
    images: Array.from({ length: 10 }, (_, i) => `/projects/peabody-ecosistema/${i + 1}.webp`),
    demo: [
      { label: 'Peabody Home', url: 'https://peabody.com.ar/' },
      { label: 'Cophi Home', url: 'https://cophi.com.ar/home' },
      { label: 'Cophi Perfil', url: 'https://cophi.com.ar/perfil' },
      { label: 'Peabody Cultura', url: 'https://peabodycultura.com.ar/' },
      { label: 'Masterchef Peabody', url: 'https://masterchef.ar/' }
    ],
    impact: [
      "+65% en Performance Lighthouse al migrar el código legacy a stack moderno.",
      "El equipo de Marketing pasó a gestionar contenido de forma completamente autónoma.",
      "Cophi lanzó con un sistema de fidelización end-to-end, desde la arquitectura hasta la interfaz.",
      "Integración de Botmaker y eMBlue para automatizar atención y comunicaciones."
    ],
    vision: "Que cada producto digital de la empresa tuviera sentido para quien lo usa: ya sea un cliente desde su casa o alguien de Marketing queriendo cambiar un banner sin depender de Sistemas. Migrar de sitios rígidos y tercerizados a herramientas vivas, mantenibles y fáciles de operar internamente.",
    execution: "En los sitios heredados como peabody.com.ar y peabodycultura.com.ar, lideré la transición hacia nuestro stack interno con foco en optimización de imágenes, mejoras de UI y armado de un CMS para que Marketing gestionara contenido de forma autónoma. Integré Looker Studio para que los datos fueran accesibles y accionables sin depender del equipo técnico. En los proyectos nuevos —cophi.com.ar y masterchef.ar— tuve más influencia en la arquitectura y el front-end, usando IA para prototipar rápido y validar antes de construir. El caso más interesante fue Cophi: una app de fidelización con sistema de 'tazas' acumulables, canje de puntos y una experiencia pensada para que volver a tomar un café se sintiera como desbloquear un logro.",
    features: [
      "CMS interno para gestión de banners, assets y contenido editorial",
      "Sistema de fidelización gamificado (App Cophi)",
      "Dashboard de métricas con Looker Studio y Google Analytics",
      "Chatbot personalizado con flujos JSON en Botmaker"
    ]
  },
  {
    id: 'peabody-cx',
    title: 'Portal Postventa "Mi Peabody"',
    summary: "Lo que empezó como un formulario para pedir turno en un taller terminó siendo algo mucho más interesante: un espacio donde el usuario puede registrar sus electrodomésticos, ponerles nombre, acceder a sus manuales, pedir asistencia técnica y gestionar su garantía. Un PIM, pero para el cliente.",
    category: 'Work',
    stack: ['Service Design', 'UX/UI Design', 'React', 'Node.js', 'Claude+Skills', 'GitHub'],
    images: Array.from({ length: 10 }, (_, i) => `/projects/peabody-cx/${i + 1}.webp`),
    demo: 'https://mi.peabody.com.ar/',
    impact: [
      "Las consultas a CX y llamadas para coordinar servicio técnico se redujeron significativamente.",
      "El cliente gestiona garantías, accede a manuales y hace preórdenes sin intervención humana.",
      "La experiencia de postventa —antes un punto de fricción— se convirtió en un diferencial de marca.",
      "Toda la información de la app viene del PIM, garantizando que siempre esté actualizada."
    ],
    problem: "La postventa era el momento más crítico para fidelizar, y justamente ahí era donde más fricciones había. Formularios largos, llamadas a CX, esperas, reprogramaciones. Una experiencia que generaba frustración en el peor momento posible.",
    solution: "Con el PIM ya funcionando como fuente de datos interna, la idea fue natural: darle al usuario acceso a esa misma información sobre sus propios productos. Trabajé junto a los equipos de Ecommerce, CX y Marketing para diseñar un producto que transformara la relación entre el cliente y sus electrodomésticos. Desde la arquitectura del flujo hasta los detalles más pequeños —como la posibilidad de ponerle un apodo a tu freidora— el foco estuvo siempre en hacer que algo funcional se sintiera cercano.",
    features: [
      "Registro y gestión de productos propios con apodos personalizados",
      "Acceso a manuales, recetarios y fichas técnicas por producto",
      "Preórdenes de servicio técnico con geolocalización de talleres",
      "Gestión de garantías integrada al ecosistema Peabody"
    ]
  }
];

export const EnterpriseImpact = () => {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);

  return (
    <>
      <section id="projects" className="py-32 relative px-6 z-10 bg-primary transition-colors duration-500">
        <div className="max-w-6xl mx-auto">
          {/* Section Header - Redesigned for Pro Narrative */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-32">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20 text-[var(--accent-primary)] text-[10px] font-bold uppercase tracking-[0.2em] mb-8 transition-colors duration-500">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-primary)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-primary)]"></span>
                </span>
                Architecture & Corporate Impact
              </div>

              <h2 className="text-5xl md:text-8xl font-bold text-primary tracking-tighter leading-[0.9] mb-8 transition-colors duration-500">
                Simplificando <br />
                <span className="text-gradient">el día a día.</span>
              </h2>

              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[var(--accent-primary)] opacity-50" />
                <span className="text-secondary font-mono text-sm tracking-widest uppercase transition-colors duration-500">
                  Estrategia Digital en Peabody
                </span>
              </div>
            </div>

            <div className="max-w-sm">
              <p className="text-secondary text-lg font-light leading-relaxed transition-colors duration-500 border-l border-primary pl-8">
                No solo diseño herramientas; construyo puentes que resuelven problemas reales. Mi enfoque en Peabody consiste en escuchar a cada equipo para transformar sus desafíos en productos intuitivos, que devuelven el tiempo y la claridad a las personas.
              </p>
            </div>
          </div>

          {/* Project List - Strategic Layout */}
          <div className="space-y-32">
            {items.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                {/* Visual / Info Column */}
                <div className="lg:col-span-1 hidden lg:flex items-center justify-center">
                  <span className="text-6xl font-bold font-mono text-primary/10 transition-colors group-hover:text-indigo-500/10">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                </div>

                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold text-indigo-500 uppercase tracking-widest transition-colors duration-500">
                      Case Study
                    </span>
                    <div className="h-[1px] flex-1 bg-primary/10" />
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-primary tracking-tight transition-colors duration-500 group-hover:text-indigo-500">
                    {project.title}
                  </h3>

                  <p className="text-lg text-secondary font-light leading-relaxed transition-colors duration-500">
                    {project.summary}
                  </p>

                  <div className="pt-2">
                    <ProjectIcons techNames={project.stack} />
                  </div>
                </div>

                {/* Impact / Results Column */}
                <div className="lg:col-span-5">
                  <div className="p-8 rounded-3xl bg-secondary border border-primary glass-card transition-all duration-500 group-hover:border-indigo-500/30 group-hover:shadow-[0_20px_50px_-20px_rgba(99,102,241,0.15)]">
                    <h4 className="flex items-center gap-2 text-sm font-bold text-primary mb-6 uppercase tracking-widest transition-colors duration-500">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      Impacto Directo
                    </h4>
                    <ul className="space-y-4">
                      {project.impact?.map((imp, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                          <span className="text-sm text-secondary font-light leading-snug transition-colors duration-500">
                            {imp}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="mt-8 flex items-center justify-between w-full p-4 rounded-2xl bg-primary text-secondary border border-primary font-bold text-xs transition-all hover:bg-[var(--accent-primary)] hover:text-white dark:hover:text-white hover:border-[var(--accent-primary)] active:scale-[0.98]"
                    >
                      VER DETALLES DEL PROYECTO
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
