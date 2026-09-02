export type CaseStudy = {
  id: string;
  title: string;
  summary: string;
  category: "Work" | "Personal";
  stack: string[];
  impact?: string[];
  problem?: string;
  solution?: string;
  execution?: string;
  vision?: string;
  features?: string[];
  images?: string[];
  demo?: string | { label: string; url: string }[];
  github?: string;
  privacyNotice?: string;
};

export const getEnterpriseProjects = (lang: string): CaseStudy[] => {
  if (lang === 'en') {
    return [
      {
        id: 'peabody-pim',
        title: 'PIM — Product Information Manager',
        summary: 'Strategic centralization of master data to eliminate operational silos in an organization with over 300 SKUs. A single source of truth connecting Marketing, Engineering, CX, and Service.',
        category: 'Work',
        stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'Firebase', 'GitHub', 'Claude', 'Gemini/Codex', 'AI Skills'],
        images: Array.from({ length: 6 }, (_, i) => `/projects/peabody-pim/${i + 1}.webp`),
        privacyNotice: 'Due to privacy and confidentiality policies of Goldmund SA, it is not possible to show direct access to the platform or sensitive internal production data.',
        vision: 'Strategic centralization of master data to eliminate operational silos in an organization with over 300 SKUs. A single source of truth connecting Marketing, Engineering, CX, and Service.',
        problem: 'Data fragmentation between departments generated critical inefficiencies: duplicated assets, outdated versions, and manual request flows that directly impacted time-to-market. Previous adoption attempts failed due to a lack of internal product-market fit.',
        solution: 'I conducted a discovery process with each area, mapping real pain points and prioritizing features by operational impact. I iterated MVPs per department, validating incremental adoption before scaling.',
        execution: 'I designed an architecture Skill in Claude with the data model for 300+ SKUs and the pain points identified in each area. This allowed for consistent MVP iterations across sessions, reducing rework and validating product decisions with technical criteria before each departmental presentation.',
        impact: ['Total elimination of data silos: technical sheets, assets, manuals, and CX data unified.', 'Manual requests between areas reduced to zero.', 'Sustained cross-departmental adoption: each area found its own use case.', 'A project that had failed in two previous iterations was finally adopted by reorienting the focus.'],
        features: ['Normalized data model (300+ SKUs)', 'Centralized asset repository with automatic WebP conversion', 'Role-based access control: Marketing, Engineering, CX, Service', 'Data core that feeds ecommerce, catalogs, and customer service systems']
      },
      {
        id: 'peabody-mi-peabody',
        title: 'My Peabody',
        summary: 'Transformation of the after-sales flow from a reactive and manual process to a user-centric self-management platform.',
        category: 'Work',
        stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'Firebase', 'GitHub', 'Claude', 'Gemini/Codex', 'AI Skills'],
        images: Array.from({ length: 5 }, (_, i) => `/projects/peabody-cx/${i + 1}.webp`),
        demo: 'https://mi.peabody.com.ar/',
        vision: 'Transformation of the after-sales flow from a reactive and manual process to a user-centric self-management platform. A product that turns the highest friction touchpoint into a brand differentiator.',
        problem: 'The after-sales flow had a critical friction rate: extensive forms, dependence on CX for every management, and manual coordination with workshops.',
        solution: 'I architected a self-management platform that leverages the PIM data model as a product backend. I conducted a joint discovery with Ecommerce, CX, and Marketing to define the MVP scope.',
        execution: 'I developed a UX Skill in Claude with all user flows, design criteria, and PIM logic as the base context. Main paths were validated with a QA Skill before handoff.',
        impact: ['Significant reduction in CX inquiries and service coordination calls.', 'Warranty management and technical service requests without human intervention.', 'After-sales experience transformed from the highest friction point to a brand differentiator.', 'Data consistency guaranteed by integration with PIM as the source of truth.'],
        features: ['User product registration with custom naming', 'Warranty management integrated into the product ecosystem', 'Access to technical documentation and recipe books per product', 'Service pre-orders with workshop geolocation']
      },
      {
        id: 'peabody-cultura',
        title: 'Peabody Cultura',
        summary: 'Migration of a legacy outsourced web property to a modern internal stack, focusing on performance, editorial autonomy, and scalability.',
        category: 'Work',
        stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'Firebase', 'GitHub', 'Claude', 'Gemini/Codex', 'AI Skills'],
        images: Array.from({ length: 6 }, (_, i) => `/projects/peabodycultura/${i + 1}.webp`),
        demo: 'https://peabodycultura.com.ar/',
        vision: 'Migration of a legacy outsourced web property to a modern internal stack, focusing on performance, editorial autonomy, and long-term scalability.',
        problem: 'The web operated on outsourced WordPress with accumulated technical debt: critical unresolved bugs, unoptimized assets, and total dependence on an external vendor for any content changes.',
        solution: 'I led the complete migration to an internal stack with UI redesign, asset optimization, and development of an internal CMS that gives total autonomy to the content management team.',
        execution: 'Front-end Skill in Claude with technical stack restrictions, UI criteria, and component patterns of the Peabody ecosystem. This guaranteed visual and technical consistency with other properties.',
        impact: ['Total elimination of dependence on the external vendor for content management.', 'Resolution of critical bugs and significant performance improvement post-migration.', 'Full editorial autonomy for the team from day one.', 'Codebase aligned to internal stack, enabling scalability and future maintenance.'],
        features: ['Full stack migration: WordPress → React + Vite + TypeScript', 'Internal CMS for editorial content management', 'Asset optimization pipeline and WebP conversion', 'UI redesign aligned with Peabody design system']
      },
      {
        id: 'peabody-web',
        title: 'Peabody.com.ar',
        summary: 'Internalization of the brand\'s main website, focusing on operational autonomy, integration of marketing tools, and a scalable technical base.',
        category: 'Work',
        stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'Firebase', 'GitHub', 'Claude', 'Gemini/Codex', 'AI Skills'],
        images: Array.from({ length: 6 }, (_, i) => `/projects/peabodycomar/${i + 1}.webp`),
        demo: 'https://peabody.com.ar/',
        vision: 'Internalization of the brand\'s main website, focusing on operational autonomy, integration of marketing tools, and building a scalable technical base.',
        problem: 'The web was outsourced with bugs in contact forms, unoptimized banners, and total dependence on an external vendor to manage the product catalog.',
        solution: 'We took ownership of the web, resolved critical bugs, optimized all banners, and integrated eMBlue for mailing automation. We developed an internal CMS for total autonomy.',
        execution: 'Front-end Skill in Claude with ecosystem stack and SEO/GEO optimization criteria. eMBlue and CMS integrations were validated with a QA Skill before deployment.',
        impact: ['Total content management autonomy for the internal team.', 'Contact form bugs resolved, recovering the lead generation flow.', 'Integration with eMBlue enabling automated marketing communication flows.', 'Internalized codebase aligned with scalable architecture.'],
        features: ['Internal CMS: management of products, images, and banners', 'Integration with eMBlue for mailing automation', 'Bug resolution and optimization of form flows', 'Banner and asset optimization pipeline']
      },
      {
        id: 'masterchef',
        title: 'Masterchef.ar',
        summary: 'End-to-end digital product developed in record time to accompany the launch of a product line under the MasterChef license.',
        category: 'Work',
        stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'Firebase', 'GitHub', 'Claude', 'Gemini/Codex', 'AI Skills'],
        images: Array.from({ length: 6 }, (_, i) => `/projects/masterchef/${i + 1}.webp`),
        demo: 'https://masterchef.ar/',
        vision: 'End-to-end digital product developed in record time to accompany the launch of a product line under the MasterChef license. From brief to deployment in one week.',
        problem: 'The launch required its own digital presence with an immovable fixed date. No prior infrastructure, no final assets, and with a team that needed to operate the content from day one.',
        solution: 'I led the end-to-end development: architecture, design, front-end development, and internal CMS, focusing on execution speed without sacrificing technical quality.',
        execution: '100% AI-assisted workflow: Architecture Skill in Claude to define the structure, Front-end Skill for components, Gemini Pro for execution, and QA Skill for pre-deploy validation.',
        impact: ['From brief to deployment in less than a week, meeting a fixed deadline.', 'Content team operational from day one with total CMS autonomy.', 'Scalable architecture enabling future feature expansion.', 'SEO and GEO optimization integrated from the initial build.'],
        features: ['End-to-end architecture and development', 'Internal CMS for content and product management', 'SEO/GEO optimization from the initial build', 'Reuse of components from the Peabody design system']
      },
      {
        id: 'cophi',
        title: 'Cophi — Loyalty App',
        summary: 'Gamified loyalty platform for a coffee shop chain, designed to turn every purchase into an interaction with perceived value.',
        category: 'Work',
        stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'Firebase', 'GitHub', 'Claude', 'Gemini/Codex', 'AI Skills'],
        images: Array.from({ length: 7 }, (_, i) => `/projects/cophi/${i + 1}.webp`),
        demo: [
          { label: 'Cophi Home', url: 'https://cophi.com.ar/home' },
          { label: 'Cophi Profile', url: 'https://cophi.com.ar/perfil' }
        ],
        vision: 'Gamified loyalty platform for a coffee shop chain, designed to turn every purchase into an interaction with perceived value and build long-term retention.',
        problem: 'The brand had no digital retention mechanism. No user behavior data, no loyalty program, and no direct communication channel with its customer base.',
        solution: 'I architected and led the end-to-end development of the app: a system for accumulating cups per purchase, point redemption for products or discounts, and a user profile that evolves with use.',
        execution: 'Total product ownership: from discovery and architecture to front-end and data model definition. UX Skill in Claude with gamification logic and Gemini Pro for component execution.',
        impact: ['Brand\'s first digital retention mechanism, enabling behavior data collection.', 'Gamified loyalty system driving repurchase behavior.', 'Direct communication channel established between the brand and its customer base.', 'Scalable architecture enabling future feature expansion.'],
        features: ['Cup accumulation and point redemption system', 'Gamified user profile with progression mechanics', 'Push notifications and personalized offers', 'Scalable data architecture in Supabase + Firebase']
      }
    ];
  }

  // Default Spanish
  return [
    {
      id: 'peabody-pim',
      title: 'PIM — Product Information Manager',
      summary: 'Centralización estratégica de datos maestros para eliminar silos operativos en una organización de más de 300 SKUs. Una única source of truth que conecta Marketing, Ingeniería, CX y Service.',
      category: 'Work',
      stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'Firebase', 'GitHub', 'Claude', 'Gemini/Codex', 'AI Skills'],
      images: Array.from({ length: 6 }, (_, i) => `/projects/peabody-pim/${i + 1}.webp`),
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
      images: Array.from({ length: 5 }, (_, i) => `/projects/peabody-cx/${i + 1}.webp`),
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
};

export const getVaultProjects = (lang: string): CaseStudy[] => {
  if (lang === 'en') {
    return [
      {
        id: 'subo-redesign',
        title: 'Cuando SUBO — Redesign',
        summary: 'UX redesign proposal to solve the main pain points of Buenos Aires\' most used public transport app, prioritizing speed of access and usability in real mobility contexts.',
        category: 'Personal',
        stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'Firebase', 'GitHub', 'Claude', 'Gemini/Codex', 'AI Skills'],
        images: Array.from({ length: 8 }, (_, i) => `/projects/subo-redesign/${i + 1}.webp`),
        demo: 'https://cuando-subo-redesign.vercel.app/',
        github: '#',
        vision: 'UX redesign proposal to solve the main pain points of Buenos Aires\' most used public transport app, prioritizing speed of access and usability in real mobility contexts.',
        problem: 'The app\'s information architecture does not respond to the user\'s critical use cases while moving: balance inquiry, charging, and route tracking. The interface is not optimized for outdoor use or for high-frequency, low-error-tolerance interactions.',
        solution: 'I conducted a UX research process based on my experience as a frequent user, mapped critical flows, and redesigned the information architecture around the three most frequent actions. High-contrast interface for outdoor use, charging flow reduced to three steps, and contextual notification system.',
        execution: 'Research Skill in Claude to structure pain point analysis and generate initial redesign hypotheses. UI proposals were iterated directly in code with a Front-end Skill before entering Figma for final refinement.',
        impact: ['Charging flow reduced from 7+ steps to 3.', 'High-contrast interface optimized for outdoor readability.', 'Contextual notification system that reduces unnecessary interruptions.'],
        features: ['UX research and pain point mapping', 'Information architecture redesign', 'High-contrast UI system for outdoor use', 'Contextual and non-invasive notification design']
      },
      {
        id: 'awaken-project',
        title: 'Awaken — Habit Gamification',
        summary: 'Habit gamification platform built on behavioral design principles and the 66-day model. Developed to solve the main problem of habit trackers: the absence of immediate psychological reward.',
        category: 'Personal',
        stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'Supabase', 'GitHub', 'Claude', 'Gemini/Codex', 'AI Skills'],
        images: Array.from({ length: 9 }, (_, i) => `/projects/awaken-project/${i + 1}.webp`),
        demo: 'https://awaken-project.vercel.app/',
        github: '#',
        vision: 'Habit gamification platform built on behavioral design principles and the 66-day model. Developed to solve the main problem of habit trackers: the absence of immediate psychological reward.',
        problem: 'Existing habit trackers have critical drop-out rates because they do not generate sustained engagement. The absence of positive feedback loops and immediate rewards makes the user lose motivation before the habit is consolidated.',
        solution: 'I designed and implemented a gamification system with RPG mechanics: accumulable experience, levels, streaks, and an avatar that evolves with the user\'s real progress. Each completed habit generates immediate feedback and visible progression.',
        execution: 'End-to-end project with total ownership: data architecture in Supabase, front-end development, and gamification logic. Architecture Skill in Claude with the scientific foundations of the habit model and progression logic. Gemini Pro and Codex for component execution.',
        impact: ['Immediate visual reward system driving daily habit completion.', 'RPG progression mechanics sustaining long-term engagement.', 'Scalable data architecture supporting multiple habit tracking.'],
        features: ['RPG-based progression system: XP, levels, streaks', 'Avatar that evolves with the user\'s real progress', '66-day habit consolidation model', 'Scalable data architecture in Supabase + PostgreSQL']
      },
      {
        id: 'cumbre-portfolio',
        title: 'Cumbre — Agency Portfolio',
        summary: 'High-performance landing page for a creative agency, developed as a technical alternative to WordPress with a focus on load speed, fluid animations, and optimized SEO.',
        category: 'Personal',
        stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'GitHub', 'Claude', 'Gemini/Codex', 'AI Skills'],
        images: Array.from({ length: 4 }, (_, i) => `/projects/cumbre-portfolio/${i + 1}.webp`),
        demo: 'https://cumbreportfolio.vercel.app/',
        github: '#',
        vision: 'High-performance landing page for a creative agency, developed as a technical alternative to WordPress with a focus on load speed, fluid animations, and optimized SEO.',
        problem: 'The original brief required WordPress, a platform that generates unnecessary technical overhead for a visually intensive site. A creative agency\'s first impression cannot be compromised by load time.',
        solution: 'I proposed and developed an ultra-lightweight SPA with React and Vite, using GSAP for scroll animations that do not penalize initial load. The result was a site with 100/100 Performance in Lighthouse.',
        execution: 'Front-end Skill in Claude with the project\'s visual criteria and stack restrictions. Codex for component execution. First project where I validated in production the AI-assisted workflow that I later scaled to Peabody projects.',
        impact: ['Lighthouse Performance score: 100/100.', 'GSAP animations with no impact on initial load time.', 'First production validation of the AI-assisted workflow.'],
        features: ['Ultra-lightweight SPA: React + Vite', 'Scroll animations with GSAP', 'SEO optimization from initial build', 'AI-assisted workflow: Claude Skill + Codex']
      }
    ];
  }

  // Default Spanish
  return [
    {
      id: 'subo-redesign',
      title: 'Cuando SUBO — Redesign',
      summary: 'Propuesta de rediseño UX para resolver los principales pain points de la app de transporte público más usada de Buenos Aires, priorizando velocidad de acceso y usabilidad en contextos de movilidad real.',
      category: 'Personal',
      stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'Firebase', 'GitHub', 'Claude', 'Gemini/Codex', 'AI Skills'],
      images: Array.from({ length: 8 }, (_, i) => `/projects/subo-redesign/${i + 1}.webp`),
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
      images: Array.from({ length: 9 }, (_, i) => `/projects/awaken-project/${i + 1}.webp`),
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
      images: Array.from({ length: 4 }, (_, i) => `/projects/cumbre-portfolio/${i + 1}.webp`),
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
};
