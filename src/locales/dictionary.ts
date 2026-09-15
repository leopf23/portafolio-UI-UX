export type Locale = "en" | "es";

export const LOCALE_STORAGE_KEY = "portfolio-locale";

export type ServiceEntry = { title: string; description: [string, string] };
export type JobEntry = { period: string; role: string; company: string; description: string };
export type SkillTag = { label: string; active: boolean };
export type SkillBreakdownEntry = { name: string; description: [string, string]; tags: SkillTag[] };
export type ProjectEntry = { category: string; title: string; description: string; tags: string[]; link: string };

export type Dictionary = {
  nav: {
    about: string;
    services: string;
    experience: string;
    skills: string;
    projects: string;
    contact: string;
    cta: string;
    openMenu: string;
    closeMenu: string;
    langLabel: string;
    english: string;
    spanish: string;
  };
  hero: {
    badge: string;
    headingLine1: string;
    headingLine2: string;
    headingLine3: string;
    description: string;
    downloadCv: string;
    contactMe: string;
    statYearsLabel: string;
    statProjectsLabel1: string;
    statProjectsLabel2: string;
  };
  skillsTicker: {
    label: string;
    items: string[];
  };
  about: {
    kicker: string;
    heading1: string;
    headingAccent: string;
    headingTrail: string;
    name: string;
    role: string;
    location: string;
    p1: string;
    p2: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    specialtyLabel: string;
    locationValue: string;
    specialtyValue: string;
  };
  services: {
    kicker: string;
    headingAccent: string;
    headingTrail: string;
    learnMore: string;
    items: ServiceEntry[];
  };
  experience: {
    kicker: string;
    heading1: string;
    headingAccent: string;
    headingTrail: string;
    jobs: JobEntry[];
  };
  skillsExpertise: {
    kicker: string;
    headingAccent: string;
    headingTrail: string;
    intro: [string, string, string];
    topSkillsLabel: string;
    topSkillsSub: string;
    topSkills: string[];
    breakdown: SkillBreakdownEntry[];
  };
  projects: {
    kicker: string;
    headingAccent: string;
    headingTrail: string;
    viewAll: string;
    viewProject: string;
    items: ProjectEntry[];
  };
  contact: {
    kicker: string;
    heading1: string;
    headingAccent: string;
    headingTrail: string;
    intro: [string, string, string];
  };
  footer: {
    wordmarkLine2: string;
    rights: string;
  };
};

export const dictionary: Record<Locale, Dictionary> = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      cta: "go to portfolio",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      langLabel: "Change language",
      english: "English",
      spanish: "Español",
    },
    hero: {
      badge: "Available for new opportunities",
      headingLine1: "UI/UX Designer",
      headingLine2: "Creating Digital",
      headingLine3: "Experiences",
      description:
        "I'm passionate about creating intuitive, user-centered designs that solve real problems. With +7 years of experience, I specialize in transforming complex ideas into beautiful, functional digital products.",
      downloadCv: "Download cv",
      contactMe: "Contact me",
      statYearsLabel: "years of designing",
      statProjectsLabel1: "PROJECTS",
      statProjectsLabel2: "DELIVERED",
    },
    skillsTicker: {
      label: "My Skills",
      items: ["Vector 2D", "UX Designer", "UI Designer", "Graphic Designer", "Ilustrator", "Frond End", "Video Edit"],
    },
    about: {
      kicker: "01 · ABOUT",
      heading1: "I make software feel",
      headingAccent: "considered",
      headingTrail: "— not decorated.",
      name: "Leonardo Perez Figueroa",
      role: "Senior Designer · Engineer",
      location: "Rep.Dom, Sto Dgo",
      p1: "I'm Leonardo, a passionate UI/UX designer with over 7 years of experience creating digital products that users love. My approach combines user research, strategic thinking, and beautiful design to deliver solutions that not only look great but also drive business results.",
      p2: "When I'm not designing, you can find me exploring new design trends, contributing to open-source projects, or sharing knowledge through design communities and workshops.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Location",
      specialtyLabel: "specialty",
      locationValue: "República Dominicana, SD",
      specialtyValue: "UI/UX Designer + Frond-end Dev",
    },
    services: {
      kicker: "02 · SERVICES",
      headingAccent: "Skills",
      headingTrail: "& Expertise",
      learnMore: "Learn more",
      items: [
        {
          title: "UI / UX Design",
          description: [
            "End-to-end product design — from messy",
            "whiteboard to polished, shippable interface.",
          ],
        },
        {
          title: "Frontend Development",
          description: [
            "Production React, TypeScript and Tailwind. The",
            "design you signed off on, in the browser.",
          ],
        },
        {
          title: "Web Design",
          description: [
            "Marketing sites that earn attention. Editorial",
            "layouts, sharp typography, no template energy.",
          ],
        },
        {
          title: "Design Systems",
          description: [
            "Token-driven libraries in Figma + code that",
            "scale across teams without entropy.",
          ],
        },
        {
          title: "Brand Identity",
          description: [
            "Marks, type systems and visual languages that",
            "hold up across screens, print and motion.",
          ],
        },
        {
          title: "Product Strategy",
          description: [
            "Discovery sprints, audits, north-star definition.",
            "Decide what to build before building.",
          ],
        },
      ],
    },
    experience: {
      kicker: "03 · EXPERIENCE",
      heading1: "A decade of",
      headingAccent: "company",
      headingTrail: "I'm proud of.",
      jobs: [
        {
          period: "2019-2026",
          role: "Senior UI/UX Designer",
          company: "| UNPHU",
          description:
            "Led the design and development of institutional web systems, ensuring alignment with the university’s brand identity and user needs. Collaborated with academic and administrative departments to deliver intuitive digital experiences for students, faculty, and staff.",
        },
        {
          period: "2018 — 2019",
          role: "Front-End Developer & UI/UX Designer",
          company: "| Prixet Technology",
          description:
            "Responsible for designing and developing web interfaces for hotspot platforms and WiFi-based advertising systems. Contributed across the full process, from prototyping in Adobe XD to front-end implementation with HTML, CSS, and JavaScript.",
        },
        {
          period: "2014 — 2016",
          role: "Junior Designer",
          company: "| Dream Team Social media",
          description:
            "Held a versatile role within the multimedia team, combining graphic design with web development to support corporate and advertising projects. Created visual assets for digital and print media, and developed responsive websites optimized for multiple devices.",
        },
      ],
    },
    skillsExpertise: {
      kicker: "04 · SKILLS & EXPERTISE",
      headingAccent: "Decisions",
      headingTrail: "define the work",
      intro: [
        "A working stack refined over five years of shipping product —",
        "from research and wireframes to typed React in production.",
        "Listed by how often I reach for them, not by self-graded score.",
      ],
      topSkillsLabel: "TOP SKILLS",
      topSkillsSub: "most reached for",
      topSkills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma", "Prototyping"],
      breakdown: [
        {
          name: "UI/UX Design",
          description: ["From research and wireframes", "to polished prototypes."],
          tags: [
            { label: "Figma", active: true },
            { label: "Prototyping", active: false },
            { label: "Wireframes", active: false },
            { label: "UX Research", active: false },
          ],
        },
        {
          name: "Frontend",
          description: ["Production-grade interfaces,", "typed end-to-end."],
          tags: [
            { label: "React", active: true },
            { label: "Next.js", active: true },
            { label: "TypeScript", active: false },
            { label: "Tailwind CSS", active: false },
          ],
        },
        {
          name: "Others",
          description: ["Glue work — CMS, integrations,", "the unglamorous bits."],
          tags: [
            { label: "WordPress", active: false },
            { label: "Elementor", active: false },
            { label: "REST APIs", active: false },
            { label: "Git", active: false },
          ],
        },
      ],
    },
    projects: {
      kicker: "05 · SELECTED WORK",
      headingAccent: "Featured",
      headingTrail: "Projects",
      viewAll: "View all",
      viewProject: "View project",
      items: [
        {
          category: "PHARMA · MOBILE",
          title: "Design Pharmacy",
          description: "Mobile UX/UI app design for fast, intuitive pharmacy orders.",
          tags: ["UX/UI Design", "React Native"],
          link: "https://www.behance.net/gallery/218593341/Design-Pharmacy-UXUI",
        },
        {
          category: "BILLING · MOBILE",
          title: "Palma",
          description: "Mobile UX/UI app design for fast micro-business invoicing.",
          tags: ["UX/UI Design", "Figma"],
          link: "https://www.behance.net/gallery/255776793/APP-Pamla-(Diseno-UIUX)",
        },
        {
          category: "E-COMMERCE · WEB",
          title: "MarketShopes",
          description: "Responsive e-commerce UI/UX and front-end for sales management.",
          tags: ["React", "Tailwind CSS"],
          link: "https://www.behance.net/gallery/218592993/UIUX-E-commerce",
        },
      ],
    },
    contact: {
      kicker: "06 · CONTACT",
      heading1: "Let's build something",
      headingAccent: "amazing",
      headingTrail: "together.",
      intro: [
        "I take on a handful of engagements each quarter. If you",
        "have a product worth caring about, I'd love to hear",
        "about it.",
      ],
    },
    footer: {
      wordmarkLine2: "DESIGNS",
      rights: "© 2026 Leonardo Perez F. All rights reserved.",
    },
  },
  es: {
    nav: {
      about: "Sobre mí",
      services: "Servicios",
      experience: "Experiencia",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
      cta: "ir al portafolio",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      langLabel: "Cambiar idioma",
      english: "English",
      spanish: "Español",
    },
    hero: {
      badge: "Disponible para nuevas oportunidades",
      headingLine1: "Diseñador UI/UX",
      headingLine2: "Creando Experiencias",
      headingLine3: "Digitales",
      description:
        "Me apasiona crear diseños intuitivos, centrados en el usuario, que resuelven problemas reales. Con +7 años de experiencia, me especializo en transformar ideas complejas en productos digitales hermosos y funcionales.",
      downloadCv: "Descargar CV",
      contactMe: "Contáctame",
      statYearsLabel: "años diseñando",
      statProjectsLabel1: "PROYECTOS",
      statProjectsLabel2: "ENTREGADOS",
    },
    skillsTicker: {
      label: "Mis Habilidades",
      items: ["Vector 2D", "Diseñador UX", "Diseñador UI", "Diseñador Gráfico", "Ilustrador", "Frontend", "Edición de Video"],
    },
    about: {
      kicker: "01 · SOBRE MÍ",
      heading1: "Hago que el software se sienta",
      headingAccent: "cuidado",
      headingTrail: "— no decorado.",
      name: "Leonardo Perez Figueroa",
      role: "Diseñador Senior · Ingeniero",
      location: "Rep.Dom, Sto Dgo",
      p1: "Soy Leonardo, un diseñador UI/UX apasionado con más de 7 años de experiencia creando productos digitales que la gente ama usar. Mi enfoque combina investigación de usuarios, pensamiento estratégico y diseño cuidado para entregar soluciones que no solo se ven bien, sino que también generan resultados de negocio.",
      p2: "Cuando no estoy diseñando, me puedes encontrar explorando nuevas tendencias de diseño, contribuyendo a proyectos de código abierto o compartiendo conocimiento en comunidades y talleres de diseño.",
      emailLabel: "Correo",
      phoneLabel: "Teléfono",
      locationLabel: "Ubicación",
      specialtyLabel: "especialidad",
      locationValue: "República Dominicana, SD",
      specialtyValue: "Diseñador UI/UX + Desarrollador Frontend",
    },
    services: {
      kicker: "02 · SERVICIOS",
      headingAccent: "Habilidades",
      headingTrail: "y Experiencia",
      learnMore: "Ver más",
      items: [
        {
          title: "Diseño UI / UX",
          description: [
            "Diseño de producto de principio a fin — desde la",
            "pizarra desordenada hasta una interfaz pulida y lista.",
          ],
        },
        {
          title: "Desarrollo Frontend",
          description: [
            "React, TypeScript y Tailwind listos para producción.",
            "El diseño que aprobaste, ahora en el navegador.",
          ],
        },
        {
          title: "Diseño Web",
          description: [
            "Sitios que captan la atención. Maquetación editorial,",
            "tipografía precisa, cero energía de plantilla.",
          ],
        },
        {
          title: "Sistemas de Diseño",
          description: [
            "Librerías basadas en tokens en Figma + código",
            "que escalan entre equipos sin caos.",
          ],
        },
        {
          title: "Identidad de Marca",
          description: [
            "Marcas, sistemas tipográficos y lenguajes visuales",
            "que se sostienen en pantallas, impresos y motion.",
          ],
        },
        {
          title: "Estrategia de Producto",
          description: [
            "Sprints de descubrimiento, auditorías, definición de norte.",
            "Decide qué construir antes de construir.",
          ],
        },
      ],
    },
    experience: {
      kicker: "03 · EXPERIENCIA",
      heading1: "Una década de",
      headingAccent: "trayectoria",
      headingTrail: "de la que estoy orgulloso.",
      jobs: [
        {
          period: "2019-2026",
          role: "Diseñador UI/UX Senior",
          company: "| UNPHU",
          description:
            "Lideré el diseño y desarrollo de sistemas web institucionales, asegurando alineación con la identidad de marca de la universidad y las necesidades de los usuarios. Colaboré con departamentos académicos y administrativos para entregar experiencias digitales intuitivas a estudiantes, profesores y personal.",
        },
        {
          period: "2018 — 2019",
          role: "Desarrollador Front-End y Diseñador UI/UX",
          company: "| Prixet Technology",
          description:
            "Responsable de diseñar y desarrollar interfaces web para plataformas de hotspot y sistemas de publicidad por WiFi. Participé en todo el proceso, desde el prototipado en Adobe XD hasta la implementación front-end con HTML, CSS y JavaScript.",
        },
        {
          period: "2014 — 2016",
          role: "Diseñador Junior",
          company: "| Dream Team Social media",
          description:
            "Ocupé un rol versátil dentro del equipo multimedia, combinando diseño gráfico con desarrollo web para apoyar proyectos corporativos y publicitarios. Creé piezas visuales para medios digitales e impresos, y desarrollé sitios web responsivos optimizados para múltiples dispositivos.",
        },
      ],
    },
    skillsExpertise: {
      kicker: "04 · HABILIDADES Y EXPERIENCIA",
      headingAccent: "Las decisiones",
      headingTrail: "definen el trabajo",
      intro: [
        "Un stack refinado durante cinco años entregando producto —",
        "desde investigación y wireframes hasta React tipado en producción.",
        "Listado por qué tan seguido lo uso, no por una autoevaluación.",
      ],
      topSkillsLabel: "PRINCIPALES HABILIDADES",
      topSkillsSub: "las más usadas",
      topSkills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma", "Prototipado"],
      breakdown: [
        {
          name: "Diseño UI/UX",
          description: ["Desde investigación y wireframes", "hasta prototipos pulidos."],
          tags: [
            { label: "Figma", active: true },
            { label: "Prototipado", active: false },
            { label: "Wireframes", active: false },
            { label: "Investigación UX", active: false },
          ],
        },
        {
          name: "Frontend",
          description: ["Interfaces de nivel producción,", "tipadas de principio a fin."],
          tags: [
            { label: "React", active: true },
            { label: "Next.js", active: true },
            { label: "TypeScript", active: false },
            { label: "Tailwind CSS", active: false },
          ],
        },
        {
          name: "Otros",
          description: ["Trabajo de conexión — CMS, integraciones,", "los detalles poco glamorosos."],
          tags: [
            { label: "WordPress", active: false },
            { label: "Elementor", active: false },
            { label: "APIs REST", active: false },
            { label: "Git", active: false },
          ],
        },
      ],
    },
    projects: {
      kicker: "05 · TRABAJO SELECCIONADO",
      headingAccent: "Selección",
      headingTrail: "de Proyectos",
      viewAll: "Ver todos",
      viewProject: "Ver proyecto",
      items: [
        {
          category: "FARMACIA · MÓVIL",
          title: "Design Pharmacy",
          description: "Diseño UX/UI de una app móvil intuitiva para pedidos rápidos en el sector farmacéutico.",
          tags: ["Diseño UX/UI", "React Native"],
          link: "https://www.behance.net/gallery/218593341/Design-Pharmacy-UXUI",
        },
        {
          category: "FACTURACIÓN · MÓVIL",
          title: "Palma",
          description: "Diseño UX/UI de una app móvil para facturación rápida en microempresas.",
          tags: ["Diseño UX/UI", "Figma"],
          link: "https://www.behance.net/gallery/255776793/APP-Pamla-(Diseno-UIUX)",
        },
        {
          category: "E-COMMERCE · WEB",
          title: "MarketShopes",
          description: "E-commerce responsivo con UI/UX y front-end para gestión de ventas.",
          tags: ["React", "Tailwind CSS"],
          link: "https://www.behance.net/gallery/218592993/UIUX-E-commerce",
        },
      ],
    },
    contact: {
      kicker: "06 · CONTACTO",
      heading1: "Construyamos algo",
      headingAccent: "increíble",
      headingTrail: "juntos.",
      intro: [
        "Tomo solo un puñado de proyectos cada trimestre. Si tienes",
        "un producto que valga la pena, me encantaría",
        "saber de él.",
      ],
    },
    footer: {
      wordmarkLine2: "DISEÑOS",
      rights: "© 2026 Leonardo Perez F. Todos los derechos reservados.",
    },
  },
};
