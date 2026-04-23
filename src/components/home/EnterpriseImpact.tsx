import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ProjectModal } from '../ui/ProjectModal';
import { ProjectCard } from '../ui/ProjectCard';
import type { CaseStudy } from '../../types';

const items: CaseStudy[] = [
  {
    id: 'peabody-pim',
    title: 'PIM — Product Information Manager',
    summary: 'Centralización estratégica de datos maestros para eliminar silos operativos en una organización de más de 300 SKUs. Una única source of truth que conecta Marketing, Ingeniería, CX y Service.',
    category: 'Work',
    stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'Firebase', 'GitHub', 'Claude', 'Gemini/Codex', 'AI Skills'],
    images: Array.from({ length: 10 }, (_, i) => `/projects/peabody-pim/${i + 1}.webp`),
    privacyNotice: 'Debido a políticas de privacidad y confidencialidad de la empresa Goldmund SA, no es posible mostrar el acceso directo a la plataforma ni datos internos sensibles de producción.',
    vision: 'Centralización estratégica de datos maestros para eliminar silos operativos en una organización de más de 300 SKUs. Una única source of truth que conecta Marketing, Ingeniería, CX y Service.',
    problem: 'La fragmentación de datos entre departamentos generaba ineficiencias críticas: assets duplicados, versiones desactualizadas y flujos de solicitud manual que impactaban directamente en el time-to-market. Los intentos previos de adopción fallaron por falta de product-market fit interno.',
    solution: 'Conduje un proceso de discovery con cada área, mapeando pain points reales y priorizando features por impacto operativo. Iteré MVPs por departamento, validando adopción incremental antes de escalar.',
    execution: 'Diseñé un Skill de arquitectura en Claude con el modelo de datos de los 300+ SKUs y los pain points relevados en cada área. Esto permitió iterar los MVPs con consistencia entre sesiones, reducir el retrabajo y validar decisiones de producto con criterio técnico antes de cada presentación departamental.',
    impact: ['Eliminación total de silos de datos: fichas técnicas, assets, manuales y datos de CX unificados.', 'Solicitudes manuales entre áreas reducidas a cero.', 'Adopción cross-departamental sostenida: cada área encontró su propio caso de uso.', 'Proyecto que había fallado en dos iteraciones previas fue finalmente adoptado al reorientar el enfoque.'],
    features: ['Modelo de datos normalizado (300+ SKUs)', 'Repositorio centralizado de assets con conversión automática a WebP', 'Role-based access control: Marketing, Ingeniería, CX, Service', 'Data core que alimenta ecommerce, catálogos y sistemas de atención']
  },
  {
    id: 'peabody-mi-peabody',
    title: 'Mi Peabody',
    summary: 'Transformación del flujo de postventa de un proceso reactivo y manual a una plataforma de autogestión centrada en el usuario.',
    category: 'Work',
    stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'Firebase', 'GitHub', 'Claude', 'Gemini/Codex', 'AI Skills'],
    images: Array.from({ length: 10 }, (_, i) => `/projects/peabody-cx/${i + 1}.webp`),
    demo: 'https://mi.peabody.com.ar/',
    vision: 'Transformación del flujo de postventa de un proceso reactivo y manual a una plataforma de autogestión centrada en el usuario. Un producto que convierte el touchpoint de mayor fricción en un diferencial de marca.',
    problem: 'El flujo de postventa presentaba una tasa de fricción crítica: formularios extensos, dependencia de CX para cada gestión y coordinación manual con talleres.',
    solution: 'Arquitecté una plataforma de autogestión que aprovecha el modelo de datos del PIM como backend de producto. Conduje un discovery conjunto con Ecommerce, CX y Marketing para definir el scope del MVP.',
    execution: 'Desarrollé un Skill de UX en Claude con todos los user flows, los criterios de diseño y la lógica del PIM como contexto base. Los recorridos principales fueron validados con un Skill de QA antes del handoff.',
    impact: ['Reducción significativa del volumen de consultas a CX y llamadas de coordinación de service.', 'Gestión de garantías y solicitud de service técnico sin intervención humana.', 'Experiencia de postventa transformada de mayor punto de fricción a diferencial de marca.', 'Consistencia de datos garantizada por la integración con el PIM como source of truth.'],
    features: ['Registro de productos del usuario con naming personalizado', 'Gestión de garantías integrada al ecosistema de producto', 'Acceso a documentación técnica y recetarios por producto', 'Pre-órdenes de service con geolocalización de talleres']
  },
  {
    id: 'peabody-cultura',
    title: 'Peabody Cultura',
    summary: 'Migración de una propiedad web legacy tercerizada a stack interno moderno, con foco en performance, autonomía editorial y escalabilidad.',
    category: 'Work',
    stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'Firebase', 'GitHub', 'Claude', 'Gemini/Codex', 'AI Skills'],
    images: Array.from({ length: 6 }, (_, i) => `/projects/peabodycultura/${i + 1}.webp`),
    demo: 'https://peabodycultura.com.ar/',
    vision: 'Migración de una propiedad web legacy tercerizada a stack interno moderno, con foco en performance, autonomía editorial y escalabilidad a largo plazo.',
    problem: 'La web operaba sobre WordPress tercerizado con deuda técnica acumulada: bugs críticos sin resolver, assets sin optimizar y dependencia total de un vendor externo para cualquier cambio de contenido.',
    solution: 'Lideré la migración completa a stack interno con rediseño de UI, optimización de assets y desarrollo de un CMS interno que le da autonomía total al equipo de gestión de contenido.',
    execution: 'Skill de front-end en Claude con las restricciones técnicas del stack, los criterios de UI y los patrones de componentes del ecosistema Peabody. Esto garantizó consistencia visual y técnica con el resto de las propiedades.',
    impact: ['Eliminación total de dependencia del vendor externo para la gestión de contenido.', 'Resolución de bugs críticos y mejora significativa de performance post-migración.', 'Autonomía editorial completa para el equipo desde el día uno.', 'Codebase alineado al stack interno, habilitando escalabilidad y mantenimiento futuro.'],
    features: ['Migración full stack: WordPress → React + Vite + TypeScript', 'CMS interno para gestión de contenido editorial', 'Pipeline de optimización de assets y conversión a WebP', 'Rediseño de UI alineado al design system de Peabody']
  },
  {
    id: 'peabody-web',
    title: 'Peabody.com.ar',
    summary: 'Internalización de la web principal de la marca, con foco en autonomía operativa, integración de herramientas de marketing y base técnica escalable.',
    category: 'Work',
    stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'Firebase', 'GitHub', 'Claude', 'Gemini/Codex', 'AI Skills'],
    images: Array.from({ length: 6 }, (_, i) => `/projects/peabodycomar/${i + 1}.webp`),
    demo: 'https://peabody.com.ar/',
    vision: 'Internalización de la web principal de la marca, con foco en autonomía operativa, integración de herramientas de marketing y construcción de una base técnica escalable.',
    problem: 'La web estaba tercerizada con bugs en formularios de contacto, banners sin optimizar y dependencia total de un vendor externo para gestionar el catálogo de productos.',
    solution: 'Tomamos ownership de la web, resolvimos los bugs críticos, optimizamos todos los banners e integramos eMBlue para automatización de mailing. Desarrollamos un CMS interno para autonomía total.',
    execution: 'Skill de front-end en Claude con el stack del ecosistema y criterios de optimización SEO/GEO. Las integraciones con eMBlue y el CMS fueron validadas con un Skill de QA antes del deploy.',
    impact: ['Autonomía total de gestión de contenido para el equipo interno.', 'Bugs en formularios de contacto resueltos, recuperando el flujo de captación de leads.', 'Integración con eMBlue habilitando flujos de comunicación de marketing automatizados.', 'Codebase internalizado y alineado a arquitectura escalable.'],
    features: ['CMS interno: gestión de productos, imágenes y banners', 'Integración con eMBlue para automatización de mailing', 'Resolución de bugs y optimización del flujo de formularios', 'Pipeline de optimización de banners y assets']
  },
  {
    id: 'masterchef',
    title: 'Masterchef.ar',
    summary: 'Producto digital end-to-end desarrollado en tiempo récord para acompañar el lanzamiento de una línea de productos bajo licencia MasterChef.',
    category: 'Work',
    stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'Firebase', 'GitHub', 'Claude', 'Gemini/Codex', 'AI Skills'],
    images: Array.from({ length: 6 }, (_, i) => `/projects/masterchef/${i + 1}.webp`),
    demo: 'https://masterchef.ar/',
    vision: 'Producto digital end-to-end desarrollado en tiempo récord para acompañar el lanzamiento de una línea de productos bajo licencia MasterChef. Del brief al deploy en una semana.',
    problem: 'El lanzamiento requería una presencia digital propia con fecha fija inamovible. Sin infraestructura previa, sin assets definitivos y con un equipo que necesitaba operar el contenido desde el día uno.',
    solution: 'Lideré el desarrollo end-to-end: arquitectura, diseño, desarrollo front-end y CMS interno, con foco en velocidad de ejecución sin sacrificar calidad técnica.',
    execution: 'Workflow 100% AI-assisted: Skill de arquitectura en Claude para definir la estructura, Skill de front-end para componentes, Gemini Pro para ejecución y Skill de QA para validación pre-deploy.',
    impact: ['Del brief al deploy en menos de una semana, cumpliendo un deadline fijo.', 'Equipo de contenido operativo desde el día uno con autonomía total de CMS.', 'Arquitectura escalable habilitando expansión de features a futuro.', 'Optimización SEO y GEO integrada desde el build inicial.'],
    features: ['Arquitectura y desarrollo end-to-end', 'CMS interno para gestión de contenido y productos', 'Optimización SEO/GEO desde el build inicial', 'Reutilización de componentes del design system de Peabody']
  },
  {
    id: 'cophi',
    title: 'Cophi — Loyalty App',
    summary: 'Plataforma de fidelización gamificada para una cadena de cafeterías, diseñada para convertir cada compra en una interacción con valor percibido.',
    category: 'Work',
    stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'Firebase', 'GitHub', 'Claude', 'Gemini/Codex', 'AI Skills'],
    images: Array.from({ length: 7 }, (_, i) => `/projects/cophi/${i + 1}.webp`),
    demo: [
      { label: 'Cophi Home', url: 'https://cophi.com.ar/home' },
      { label: 'Cophi Perfil', url: 'https://cophi.com.ar/perfil' }
    ],
    vision: 'Plataforma de fidelización gamificada para una cadena de cafeterías, diseñada para convertir cada compra en una interacción con valor percibido y construir retención a largo plazo.',
    problem: 'La marca no contaba con ningún mecanismo de retención digital. Sin data de comportamiento de usuario, sin programa de fidelización y sin un canal directo de comunicación con su base de clientes.',
    solution: 'Arquitecté y lideré el desarrollo end-to-end de la app: sistema de acumulación de tazas por compra, canje de puntos por productos o descuentos, y un perfil de usuario que evoluciona con el uso.',
    execution: 'Ownership total del producto: desde el discovery y la arquitectura hasta el front-end y la definición del modelo de datos. Skill de UX en Claude con la lógica de gamificación y Gemini Pro para la ejecución de componentes.',
    impact: ['Primer mecanismo de retención digital de la marca, habilitando la recolección de data de comportamiento.', 'Sistema de fidelización gamificado impulsando comportamiento de recompra.', 'Canal directo de comunicación establecido entre la marca y su base de clientes.', 'Arquitectura escalable habilitando expansión de features a futuro.'],
    features: ['Sistema de acumulación de tazas y canje de puntos', 'Perfil de usuario gamificado con mecánicas de progresión', 'Push notifications y ofertas personalizadas', 'Arquitectura de datos escalable en Supabase + Firebase']
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export const EnterpriseImpact = () => {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);
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
                Architecture & Corporate Impact
              </div>
              <h2 className="text-5xl md:text-8xl font-bold text-primary tracking-tighter leading-[0.9] mb-8 transition-colors duration-500">
                Mis <br /><span className="text-gradient">Proyectos.</span>
              </h2>
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-[var(--accent-primary)] opacity-50" />
                <span className="text-secondary font-mono text-sm tracking-widest uppercase transition-colors duration-500">Estrategia Digital en Peabody</span>
              </div>
            </div>
            <div className="max-w-sm">
              <p className="text-secondary text-lg font-light leading-relaxed transition-colors duration-500 border-l border-primary pl-8">
                No solo diseño herramientas; construyo puentes que resuelven problemas reales. Mi enfoque en Peabody consiste en escuchar a cada equipo para transformar sus desafíos en productos intuitivos, que devuelven el tiempo y la claridad a las personas.
              </p>
            </div>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((project) => (
              <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
            ))}
          </motion.div>
        </div>
      </section>
      <ProjectModal isOpen={selectedProject !== null} onClose={() => setSelectedProject(null)} data={selectedProject} />
    </>
  );
};
