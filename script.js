// Translation system
const translations = {
    en: {
        downloadBtn: '📄 Download PDF',
        downloadTxtBtn: '📝 Download TXT',
        toggleLabel: 'Summary / Details',
        subtitle: 'Software Engineer - Full Stack Developer',
        contact: 'Contact',
        education: 'Education',
        technicalSkills: 'Technical Skills',
        workExperience: 'Work Experience',
        generativeAI: 'Generative AI Experience',
        languages: 'Languages',
        profile: [
            'I am a back-end software engineer with solid experience building scalable web applications using Java, Spring Boot, Node.js, NET Framework, and PHP. I also have proven experience in developing RESTful APIs, designing robust relational database solutions, and developing and maintaining Drupal 11 sites (modules, themes with Twig and Sass, and configuration), in addition to having knowledge in React JS and Angular for front-end.',
            'I am passionate about studying and keeping up with modern technologies, as well as continuously strengthening my engineering skills to design efficient, maintainable, and scalable solutions. I work in an agentic way: I write rules, skills, and specs, direct implementation layer by layer, and review tests and quality before considering each change closed. I enjoy tackling complex problems from a technical perspective, applying good development practices and architectural thinking to build quality software.',
            'I hold a Bachelor\'s Degree in Software Engineering from Universidad Técnica Nacional (2026). I focus on implementing software engineering best practices, working with cloud deployments (AWS), and applying principles like SOLID and Clean Code to develop maintainable, enterprise-grade applications. Likewise, I collaborate effectively in agile environments and have strong problem-solving abilities.'
        ],
        aiDescription: [
            'For me, it is of the utmost importance to stay up to date with modern technologies, using generative AI tools to complement my learning process of new terms, complex technical concepts, and emerging technologies.',
            'On the other hand, I work in an agentic way: I integrate these tools into the software development lifecycle by directing them layer by layer: first the database, then the backend, and then the frontend, with clear rules for architecture, tests, and evidence before considering each change closed. I use them for technical research, code analysis, debugging support, documentation, and implementation within that order, which speeds up iteration without skipping verification.',
            'In addition, I always keep engineering judgment as the foundation of the process. AI proposes and executes within those rules, procedures, and specifications that I design through day-to-day experience, adapting to improvement, and I then review the result, the tests, and the quality of the software before moving it forward, in the same way in Cursor, Claude, and the rest of the tools.'
        ],
        educationItems: [
            { year: '2022 - 2026', title: 'Bachelor\'s Degree in Software Engineering', school: 'Universidad Técnica Nacional' },
            { year: '2011', title: 'English as a Second Language', school: 'Universidad Técnica Nacional' },
            { year: '2009', title: 'Electrotechnical Technician, Middle Technician', school: 'Colegio Técnico Profesional Jesús Ocaña Rojas' },
            { year: '2009', title: 'High School Bachelor\'s Degree', school: 'Colegio Técnico Profesional Jesús Ocaña Rojas' }
        ],
        jobItems: [
            {
                year: '2026 - Present',
                title: 'Freelance Drupal Full-Stack Developer',
                company: 'KEBOCA',
                descriptions: [
                    'I develop and maintain sites on Drupal 11 with PHP, Composer, Drush, and DDEV. I build custom modules and themes, with Twig and Sass, and the site configuration.',
                    'I direct Cursor and Claude agents with rules and skills for the stack. In PHP they follow Drupal standards: dependency injection, the Drupal API instead of native PHP, and YAML configuration before writing new code. In the theme they follow Twig and Sass. They reuse patterns that already exist.',
                    'I review each step: I approve the change, test it with Drush on DDEV, and review the PHP against the coding standards and the quality of the result before considering it closed.',
                    'I built a site from scratch on Drupal 11 with DDEV: a custom module, themes, and kiosk flows for visitor sign-in and sign-out, pre-registration, a staff panel, a visit log, and people management.',
                    'I provide maintenance and development on one university site (Drupal 11, Acquia, DDEV). The work includes accessibility, calendar and event import, payments, a program finder, users with CAS, media, and the site theme.',
                    'I provide maintenance and development on another university site (Drupal 10, DDEV). The work includes search, courses, events, Stripe payments, OpenID, and the academic content of the site.'
                ]
            },
            {
                year: '2023 - Present',
                title: 'Freelance Full-Stack Developer',
                company: 'Rodieja S.A.',
                descriptions: [
                    'Architected and implemented scalable back-end solutions using Spring Boot (Java) and React JS, developing RESTful APIs following MVC architecture and SOLID principles for high-performance enterprise applications.',
                    'Designed and optimized MariaDB database structures through normalization, advanced indexing, and stored procedures, improving the efficiency and reliability of critical data operations.',
                    'Deployed and maintained applications on AWS cloud infrastructure (EC2, RDS, and S3), integrating CI/CD pipelines with GitHub to streamline deployment and maintenance workflows.',
                    'Developed complex enterprise-grade modules, including video-on-demand platforms and automotive workshop management systems featuring advanced inventory, financial tracking, and commission calculation logic.',
                    'Collaborated directly with stakeholders to translate business requirements into scalable and maintainable technical solutions.',
                    'Created an AI harness for MariaDB, Spring Boot, JOOQ, and React in order to deliver results faster on each requested project, following software engineering best practices.'
                ]
            },
            {
                year: '2021 - 2024',
                title: 'Domain Expert',
                company: 'CONCENTRIX',
                descriptions: [
                    'Delivered specialized technical support and customer service for Google Domains, resolving domain configuration and connectivity issues for users and businesses.',
                    'Guided customers through DNS management and configuration processes, including A, CNAME, MX, SPF, and TXT records, ensuring secure and reliable setups.',
                    'Configured custom domain connections between servers and websites, enabling successful website deployments and domain integrations.',
                    'Enhanced customer experience by efficiently troubleshooting technical issues and supporting users during domain migration and configuration processes.'
                ]
            },
            {
                year: '2020 - 2021',
                title: 'Chat Agent and Technical Support',
                company: 'SYKES',
                descriptions: [
                    'Provided customer service and technical support for Verizon-Visible phone accounts.'
                ]
            },
            {
                year: '2019 - 2023',
                title: 'Business Clerk and Content Creator',
                company: 'Enigma H8 Studios',
                descriptions: [
                    'Developed website eh8s.com with HTML, CSS, and JavaScript, redirected through DNS to enigmah8studios.com. Music lesson tutor. Creator of advertising content. Trial reservation manager. Recording equalization and editing service assistant.'
                ]
            },
            {
                year: '2017 - 2019',
                title: 'CS Associate & CSNA Resolution Specialist',
                company: 'AMAZON',
                descriptions: [
                    'Supervised and supported new agents in making decisions to solve daily customer problems. Served as a customer service agent.'
                ]
            },
            {
                year: '2015 - 2017',
                title: 'Receptionist (Supervisor) and Tour Seller',
                company: 'Luem Entertainment Group S.A.',
                descriptions: [
                    'Managed bookings with new companies, organized and prepared the hostel. Sold tours.'
                ]
            },
            {
                year: '2012 - 2013',
                title: 'Airport Counter',
                company: 'Interairport Services - Costa Rica SJO Airport',
                descriptions: [
                    'Handled passenger check-in face-to-face, traffic, and dispatch.'
                ]
            },
            {
                year: '2010 - 2012',
                title: 'Customer Service & Technical Support',
                company: 'Dish Network',
                descriptions: [
                    'Provided customer service and technical support for Dish Network. Followed company resolution steps to solve problems with signal transmission from satellite to receiving antenna for television service.'
                ]
            }
        ],
        summaryJob: {
            year: '2010 – 2021',
            title: 'Technical Support, Customer Systems & Operations',
            company: 'SYKES · Amazon · Dish Network · Interairport · Luem Group · Enigma H8 Studios',
            descriptions: [
                'Delivered multi-channel technical support in high-volume environments, with structured troubleshooting following KBs, SLA prioritization, and English (C1) communication with international clients.',
                'Supported onboarding and mentoring of peers, keeping clear processes for consistent resolution.'
            ]
        },
        skillCategories: [
            {
                header: 'Databases',
                list: 'MariaDB, MySQL, PostgreSQL, MS SQL — experienced in database creation and maintenance, schema design, normalization, CRUD operations, stored procedures, triggers, indexing, and performance tuning.'
            },
            {
                header: 'Backend Development',
                list: 'Java (Spring Boot, Maven, JPA/JOOQ), C# (.NET, Dapper, EF Core), PHP (Drupal 10 and 11, Composer, Drush, dependency injection, Drupal API, YAML configuration), RESTful API design, MVC pattern, SOLID principles, Node.js (Express, Sequelize), CMS integration and development'
            },
            {
                header: 'Frontend Development',
                list: 'React JS, Angular, JavaScript (ES6+), HTML5, CSS3, Sass, Twig, Bootstrap, JSF-PrimeFaces, Vue.js'
            },
            {
                header: 'Cloud & DevOps',
                list: 'AWS (EC2, RDS, S3), cloud-based deployments, Git/GitHub, CI/CD pipelines, DDEV, testing methodologies, web security best practices'
            },
            {
                header: 'AI & Development Tools',
                list: 'Generative AI tools (I use the current models of ChatGPT, Gemini, Deepseek, Claude, Muse, Grok, Kimi, GitHub Copilot, Windsurf, Cursor, Antigravity) to direct development layer by layer, review code with evidence and tests, research, and solve problems while maintaining architectural judgment'
            }
        ],
        languageNames: ['English C1', 'German A2', 'Spanish Native']
    },
    es: {
        downloadBtn: '📄 Descargar PDF',
        downloadTxtBtn: '📝 Descargar TXT',
        toggleLabel: 'Resumen / Detalles',
        subtitle: 'Ingeniero del Software - Full Stack Developer',
        contact: 'Contacto',
        education: 'Educación',
        technicalSkills: 'Habilidades Técnicas',
        workExperience: 'Experiencia Laboral',
        generativeAI: 'Experiencia con IA Generativa',
        languages: 'Idiomas',
        profile: [
            'Soy un ingeniero de software back-end con sólida experiencia construyendo aplicaciones web escalables utilizando Java, Spring Boot, Node.js, tecnologías .NET y PHP. También tengo experiencia comprobada en el desarrollo de APIs RESTful, en el diseño de soluciones de bases de datos relacionales robustas y en el desarrollo y mantenimiento de sitios en Drupal 11 (módulos, temas con Twig y Sass, y configuración), además de contar con conocimientos en React JS y Angular para front-end.',
            'Me apasiona estudiar y mantenerme al día con las tecnologías modernas, así como fortalecer continuamente mis habilidades de ingeniería para diseñar soluciones eficientes, mantenibles y escalables. Trabajo de forma agéntica: escribo rules, skills y specs, dirijo la implementación por capas y reviso pruebas y calidad antes de dar por cerrado cada cambio. Disfruto abordar problemas complejos desde una perspectiva técnica, aplicando buenas prácticas de desarrollo y pensamiento arquitectónico para construir software de calidad.',
            'Cuento con el Bachillerato en Ingeniería de Software de la Universidad Técnica Nacional (2026). Me enfoco en implementar mejores prácticas de ingeniería de software, trabajando con despliegues en la nube (AWS) y aplicando principios como SOLID y Clean Code para desarrollar aplicaciones mantenibles de nivel empresarial. Asimismo, colaboro eficazmente en entornos ágiles y cuento con fuertes habilidades de resolución de problemas.'
        ],
        aiDescription: [
            'Para mí es de suma importancia mantenerme al día con las tecnologías modernas, aprovechando herramientas de IA generativa para complementar mi proceso de aprendizaje de nuevos términos, conceptos técnicos complejos y tecnologías emergentes.',
            'Por otro lado, trabajo de forma agéntica: integro estas herramientas en el ciclo de desarrollo de software dirigiéndolas por capas: primero la base de datos, luego el backend y después el frontend, con reglas claras de arquitectura, pruebas y evidencia antes de dar por cerrado cada cambio. Las utilizo para investigación técnica, análisis de código, soporte en depuración, documentación e implementación dentro de ese orden, lo que acelera la iteración sin saltarse la verificación.',
            'Además, mantengo siempre el criterio de ingeniería como base del proceso. La IA propone y ejecuta dentro de esas reglas, procedimientos y especificaciones que yo diseño durante la experiencia del día a día, adaptándome a la mejora, y posteriormente reviso el resultado, las pruebas y la calidad del software antes de avanzarlo, de la misma forma en Cursor, Claude y el resto de herramientas.'
        ],
        educationItems: [
            { year: '2022 - 2026', title: 'Bachillerato en Ingeniería de Software', school: 'Universidad Técnica Nacional' },
            { year: '2011', title: 'Inglés como Segundo Idioma', school: 'Universidad Técnica Nacional' },
            { year: '2009', title: 'Técnico Medio en Electrotecnia', school: 'Colegio Técnico Profesional Jesús Ocaña Rojas' },
            { year: '2009', title: 'Bachillerato de Educación Media', school: 'Colegio Técnico Profesional Jesús Ocaña Rojas' }
        ],
        jobItems: [
            {
                year: '2026 - Presente',
                title: 'Desarrollador Full-Stack Freelance de Drupal',
                company: 'KEBOCA',
                descriptions: [
                    'Desarrollo y mantengo sitios en Drupal 11 con PHP, Composer, Drush y DDEV. Construyo módulos y temas propios, con Twig y Sass, y la configuración del sitio.',
                    'Dirijo agentes de Cursor y Claude con rules y skills del stack. En PHP siguen los estándares de Drupal: inyección de dependencias, la API de Drupal en lugar de PHP nativo, y configuración en YAML antes de escribir código nuevo. En el tema siguen Twig y Sass. Reutilizan los patrones que ya existen.',
                    'Reviso cada paso: apruebo el cambio, lo pruebo con Drush en DDEV y reviso el PHP con los estándares de código y la calidad del resultado antes de darlo por cerrado.',
                    'Construí desde cero un sitio en Drupal 11 con DDEV: módulo propio, temas y flujos de kiosco para el registro y la salida de visitantes, pre-registro, panel de personal, bitácora de visitas y gestión de personas.',
                    'Doy mantenimiento y desarrollo en el sitio de una universidad (Drupal 11, Acquia, DDEV). El trabajo incluye accesibilidad, calendario e importación de eventos, pagos, buscador de programas, usuarios con CAS, medios y el tema del sitio.',
                    'Doy mantenimiento y desarrollo en el sitio de otra universidad (Drupal 10, DDEV). El trabajo incluye búsqueda, cursos, eventos, pagos con Stripe, OpenID y el contenido académico del sitio.'
                ]
            },
            {
                year: '2023 - Presente',
                title: 'Desarrollador Full-Stack Freelance',
                company: 'Rodieja S.A.',
                descriptions: [
                    'Arquitecté e implementé soluciones back-end escalables utilizando Spring Boot (Java) y React JS, desarrollando APIs RESTful bajo arquitectura MVC y principios SOLID para aplicaciones empresariales de alto rendimiento.',
                    'Diseñé y optimicé bases de datos MariaDB mediante normalización, indexación avanzada y procedimientos almacenados, mejorando la eficiencia y estabilidad de operaciones críticas de datos.',
                    'Desplegué y administré aplicaciones en infraestructura cloud de AWS (EC2, RDS y S3), integrando pipelines CI/CD con GitHub para automatizar procesos de despliegue y mantenimiento.',
                    'Desarrollé módulos empresariales complejos, incluyendo plataformas de video bajo demanda y sistemas de gestión para talleres automotrices con lógica avanzada de inventario, seguimiento financiero y cálculo de comisiones.',
                    'Colaboré directamente con stakeholders para transformar requerimientos de negocio en soluciones técnicas escalables y mantenibles.',
                    'Creé un AI harness para MariaDB, Spring Boot, JOOQ y React con el fin de entregar resultados más rápido en cada uno de los proyectos solicitados, siguiendo buenas prácticas de ingeniería.'
                ]
            },
            {
                year: '2021 - 2024',
                title: 'Experto de Dominios',
                company: 'CONCENTRIX',
                descriptions: [
                    'Brindé soporte técnico especializado y atención al cliente para servicios de Google Domains, resolviendo incidencias relacionadas con configuración y conectividad de dominios.',
                    'Asesoré a usuarios en la gestión y configuración de registros DNS, incluyendo A, CNAME, MX, SPF y TXT, garantizando configuraciones seguras y funcionales.',
                    'Configuré conexiones entre dominios, servidores y sitios web personalizados, facilitando implementaciones exitosas para clientes y negocios.',
                    'Mejoré la experiencia del cliente mediante resolución eficiente de problemas técnicos y acompañamiento en procesos de migración y configuración de dominios.'
                ]
            },
            {
                year: '2020 - 2021',
                title: 'Agente de Chat y Soporte Técnico',
                company: 'SYKES',
                descriptions: [
                    'Brindé servicio al cliente y soporte técnico para cuentas de teléfono Verizon-Visible.'
                ]
            },
            {
                year: '2019 - 2023',
                title: 'Auxiliar Administrativo y Creador de Contenido',
                company: 'Enigma H8 Studios',
                descriptions: [
                    'Desarrollé el sitio web eh8s.com con HTML, CSS y JavaScript, redirigido mediante DNS a enigmah8studios.com. Profesor de lecciones de música. Creador de contenido publicitario. Gestor de reservas de pruebas. Asistente de servicio de ecualización y edición de grabaciones.'
                ]
            },
            {
                year: '2017 - 2019',
                title: 'Asociado de CS & Especialista en Resolución CSNA',
                company: 'AMAZON',
                descriptions: [
                    'Supervisé y apoyé a nuevos agentes en la toma de decisiones para resolver problemas diarios de clientes. Serví como agente de servicio al cliente.'
                ]
            },
            {
                year: '2015 - 2017',
                title: 'Recepcionista (Supervisor) y Vendedor de Tours',
                company: 'Luem Entertainment Group S.A.',
                descriptions: [
                    'Gestioné reservas con nuevas empresas, organicé y preparé el albergue. Vendí tours.'
                ]
            },
            {
                year: '2012 - 2013',
                title: 'Mostrador de Aeropuerto',
                company: 'Interairport Services - Costa Rica SJO Airport',
                descriptions: [
                    'Manejé el check-in de pasajeros cara a cara, tráfico y despacho.'
                ]
            },
            {
                year: '2010 - 2012',
                title: 'Servicio al Cliente y Soporte Técnico',
                company: 'Dish Network',
                descriptions: [
                    'Brindé servicio al cliente y soporte técnico para Dish Network. Seguí los pasos de resolución de la empresa para resolver problemas con la transmisión de señal desde satélite a antena receptora para el servicio de televisión.'
                ]
            }
        ],
        summaryJob: {
            year: '2010 – 2021',
            title: 'Soporte Técnico, Sistemas y Operaciones del Cliente',
            company: 'SYKES · Amazon · Dish Network · Interairport · Luem Group · Enigma H8 Studios',
            descriptions: [
                'Brindé soporte técnico multicanal en entornos de alto volumen, con resolución estructurada siguiendo KBs, priorización por SLA y comunicación en inglés (C1) con clientes internacionales.',
                'Apoyé la inducción y la mentoría de compañeros, manteniendo procesos claros para una resolución consistente.'
            ]
        },
        skillCategories: [
            {
                header: 'Bases de Datos',
                list: 'MariaDB, MySQL, PostgreSQL, MS SQL — con experiencia en creación y mantenimiento de bases de datos, diseño de esquemas, normalización, operaciones CRUD, procedimientos almacenados, triggers, indexación y optimización de rendimiento.'
            },
            {
                header: 'Desarrollo Backend',
                list: 'Java (Spring Boot, Maven, JPA/JOOQ), C# (.NET, Dapper, EF Core), PHP (Drupal 10 y 11, Composer, Drush, inyección de dependencias, API de Drupal, configuración en YAML), diseño de APIs RESTful, patrón MVC, principios SOLID, Node.js (Express, Sequelize), integración y desarrollo de CMS'
            },
            {
                header: 'Desarrollo Frontend',
                list: 'React JS, Angular, JavaScript (ES6+), HTML5, CSS3, Sass, Twig, Bootstrap, JSF-PrimeFaces, Vue.js'
            },
            {
                header: 'Cloud & DevOps',
                list: 'AWS (EC2, RDS, S3), despliegues basados en la nube, Git/GitHub, pipelines CI/CD, DDEV, metodologías de prueba, mejores prácticas de seguridad web'
            },
            {
                header: 'IA & Herramientas de Desarrollo',
                list: 'Herramientas de IA generativa (Uso los modelos actuales de ChatGPT, Gemini, Deepseek, Claude, Muse, Grok, Kimi, GitHub Copilot, Windsurf, Cursor, Antigravity) para dirigir el desarrollo por capas, revisar código con evidencia y pruebas, investigar y resolver problemas manteniendo el criterio de arquitectura'
            }
        ],
        languageNames: ['Inglés C1', 'Alemán A2', 'Español Nativo']
    }
};

// Current language state
const resumeIdentity = {
    name: 'KEVIN CAMPOS GONZÁLEZ',
    phone: '(+506) 6150-9057',
    email: 'kcamposgo90@gmail.com',
    location: 'Santa Barbara, Heredia',
    github: 'https://github.com/mravenec/',
    gitlab: 'https://gitlab.com/kcamposgo90',
    linkedin: 'https://www.linkedin.com/in/kevincamposgonzalez/'
};
const languageLevels = [85, 40, 100];
const collapsedJobStart = 3;
let currentLanguage = 'en';

function resumeNode(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
}

function jobArticle(job, extraClass) {
    const article = resumeNode('article', extraClass ? `job-item ${extraClass}` : 'job-item');
    article.append(
        resumeNode('div', 'job-year', job.year),
        resumeNode('h3', 'job-title', job.title),
        resumeNode('p', 'job-company', job.company)
    );
    job.descriptions.forEach((desc, index) => {
        if (index > 0) article.append(resumeNode('div', 'job-description-spacer'));
        article.append(resumeNode('p', 'job-description', desc));
    });
    return article;
}

function bindExperienceToggle() {
const toggleBtn = document.getElementById('experience-toggle-header');
const experienceContainer = document.getElementById('experience-toggle-container');
    if (!toggleBtn || !experienceContainer) return;
    toggleBtn.addEventListener('click', () => {
        const isCompressed = experienceContainer.classList.toggle('compressed-mode');
        const icon = toggleBtn.querySelector('.toggle-icon');
        if (isCompressed) {
            icon.textContent = '▶';
            toggleBtn.classList.add('collapsed');
            document.getElementById('summary-job-group').style.display = 'block';
            document.getElementById('original-jobs-group').style.display = 'none';
        } else {
            icon.textContent = '▼';
            toggleBtn.classList.remove('collapsed');
            document.getElementById('summary-job-group').style.display = 'none';
            document.getElementById('original-jobs-group').style.display = 'block';
        }
    });
}

function switchLanguage(lang) {
    currentLanguage = lang;
    const t = translations[lang];
    const root = document.querySelector('.content-wrapper');

    const header = resumeNode('header', 'header');
    header.append(resumeNode('h1', '', resumeIdentity.name), resumeNode('p', 'subtitle', t.subtitle));

    const profile = resumeNode('section', 'profile');
    t.profile.forEach(text => profile.append(resumeNode('p', '', text)));

    const contact = resumeNode('section', 'contact');
    contact.append(resumeNode('h2', '', t.contact));
    [
        { icon: '📞', value: resumeIdentity.phone },
        { icon: '✉️', value: resumeIdentity.email, href: `mailto:${resumeIdentity.email}` },
        { icon: '📍', value: resumeIdentity.location },
        {
            iconSvg: '<svg fill="#24292f" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
            value: 'github.com/mravenec',
            href: resumeIdentity.github
        },
        {
            iconSvg: '<svg fill="#FC6D26" viewBox="0 0 24 24" aria-hidden="true"><path d="m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z"/></svg>',
            value: 'gitlab.com/kcamposgo90',
            href: resumeIdentity.gitlab
        },
        {
            iconSvg: '<svg fill="#0A66C2" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
            value: 'linkedin.com/in/kevincamposgonzalez',
            href: resumeIdentity.linkedin
        }
    ].forEach(({ icon, iconSvg, value, href }) => {
        const item = resumeNode('div', 'contact-item');
        if (icon || iconSvg) {
            const mark = resumeNode('span', 'icon');
            if (iconSvg) mark.innerHTML = iconSvg;
            else mark.textContent = icon;
            item.append(mark);
            item.append(document.createTextNode(' '));
        }
        if (href) {
            const link = resumeNode('a', '', value);
            link.href = href;
            if (!href.startsWith('mailto:')) {
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
            }
            item.append(link);
        } else {
            item.append(document.createTextNode(value));
        }
        contact.append(item);
    });

    const education = resumeNode('section', 'education');
    education.append(resumeNode('h2', '', t.education));
    t.educationItems.forEach(item => {
        const article = resumeNode('article', 'education-item');
        article.append(
            resumeNode('div', 'education-year', item.year),
            resumeNode('h3', 'education-title', item.title),
            resumeNode('p', 'education-school', item.school)
        );
        education.append(article);
    });

    const skills = resumeNode('section', 'skills');
    skills.append(resumeNode('h2', '', t.technicalSkills));
    const skillsSection = resumeNode('div', 'skills-section');
    t.skillCategories.forEach(category => {
        const block = resumeNode('div', 'skill-category');
        block.append(
            resumeNode('h3', 'skills-subheader', category.header),
            resumeNode('p', 'skills-list', category.list)
        );
        skillsSection.append(block);
    });
    skills.append(skillsSection);

    const left = resumeNode('aside', 'left-column');
    left.append(contact, education, skills);

    const experience = resumeNode('section', 'experience');
    experience.append(resumeNode('h2', '', t.workExperience));
    t.jobItems.slice(0, collapsedJobStart).forEach(job => experience.append(jobArticle(job)));

    const toggle = resumeNode('div', 'compressed-mode');
    toggle.id = 'experience-toggle-container';
    const toggleBtn = resumeNode('button', 'toggle-btn collapsed');
    toggleBtn.id = 'experience-toggle-header';
    toggleBtn.type = 'button';
    toggleBtn.append(resumeNode('span', 'toggle-icon', '▶'));
    const original = resumeNode('div', '');
    original.id = 'original-jobs-group';
    original.style.display = 'none';
    t.jobItems.slice(collapsedJobStart).forEach(job => original.append(jobArticle(job)));
    const summaryGroup = resumeNode('div', '');
    summaryGroup.id = 'summary-job-group';
    summaryGroup.append(jobArticle(t.summaryJob, 'summary-item'));
    toggle.append(toggleBtn, original, summaryGroup);
    experience.append(toggle);

    const right = resumeNode('section', 'right-column');
    right.append(experience);

    const mainContent = resumeNode('div', 'main-content');
    mainContent.append(left, right);

    const ai = resumeNode('section', 'ai-experience');
    ai.append(resumeNode('h2', '', t.generativeAI));
    t.aiDescription.forEach(text => ai.append(resumeNode('p', 'ai-description', text)));

    const languages = resumeNode('section', 'languages');
    languages.append(resumeNode('h2', '', t.languages));
    const row = resumeNode('div', 'languages-horizontal');
    t.languageNames.forEach((name, index) => {
        const block = resumeNode('div', 'language-block');
        const track = resumeNode('div', 'language-bar-container');
        const bar = resumeNode('div', 'language-bar');
        bar.style.width = `${languageLevels[index] || 0}%`;
        track.append(bar);
        block.append(track, resumeNode('div', 'language-name', name));
        row.append(block);
    });
    languages.append(row);

    root.replaceChildren(
        header,
        profile,
        resumeNode('div', 'separator'),
        mainContent,
        ai,
        languages,
        resumeNode('div', 'separator')
    );

    document.getElementById('downloadBtn').textContent = t.downloadBtn;
    document.getElementById('downloadTxtBtn').textContent = t.downloadTxtBtn;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`lang-${lang}`).classList.add('active');
    document.documentElement.lang = lang;
    bindExperienceToggle();
}

document.getElementById('lang-en').addEventListener('click', () => switchLanguage('en'));
document.getElementById('lang-es').addEventListener('click', () => switchLanguage('es'));
switchLanguage('en');

function atsPlain(value) {
    return String(value)
        .replace(/[\u2018\u2019]/g, "'")
        .replace(/[\u201C\u201D]/g, '"')
        .replace(/[\u2013\u2014]/g, '-')
        .replace(/\u00A0/g, ' ')
        .replace(/[^\x0A\x0D\x20-\xFF]/g, '')
        .replace(/[ \t]+/g, ' ')
        .trim();
}

function svgIconDataUrl(svg) {
    const px = 128;
    const canvas = document.createElement('canvas');
    canvas.width = px;
    canvas.height = px;
    const ctx = canvas.getContext('2d');
    const box = svg.viewBox.baseVal;
    const w = box && box.width ? box.width : 24;
    const h = box && box.height ? box.height : 24;
    ctx.scale(px / w, px / h);
    const fallback = svg.getAttribute('fill') || '#24292f';
    svg.querySelectorAll('path').forEach(path => {
        const d = path.getAttribute('d');
        if (!d) return;
        ctx.fillStyle = path.getAttribute('fill') || fallback;
        ctx.fill(new Path2D(d));
    });
    return canvas.toDataURL('image/png');
}

function emojiDataUrl(char) {
    const px = 64;
    const canvas = document.createElement('canvas');
    canvas.width = px;
    canvas.height = px;
    const ctx = canvas.getContext('2d');
    ctx.font = '52px "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(char, px / 2, px / 2);
    return canvas.toDataURL('image/png');
}

function cssRgb(color) {
    const match = String(color).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
    if (!match || match[4] === '0') return null;
    return [Number(match[1]), Number(match[2]), Number(match[3])];
}

function cssGradient(image) {
    const stops = [...String(image).matchAll(/rgba?\((\d+),\s*(\d+),\s*(\d+)/g)]
        .map(match => [Number(match[1]), Number(match[2]), Number(match[3])]);
    return stops.length >= 2 ? [stops[0], stops[stops.length - 1]] : null;
}

function collectAtsLines(root) {
    const lines = [];
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
        const parent = node.parentElement;
        if (!parent || parent.closest('.toggle-btn, #experience-toggle-header')) continue;
        const raw = node.textContent;
        if (!raw || !raw.trim()) continue;
        const style = getComputedStyle(parent);
        if (style.display === 'none' || style.visibility === 'hidden') continue;
        const range = document.createRange();
        let lineText = '';
        let lineTop = null;
        let lineLeft = 0;
        let lineRight = 0;
        let lineHeight = 0;
        const flush = () => {
            let text = atsPlain(lineText);
            if (style.textTransform === 'uppercase') text = text.toUpperCase();
            else if (style.textTransform === 'lowercase') text = text.toLowerCase();
            if (!text || lineTop === null) return;
            lines.push({
                text,
                x: lineLeft,
                y: lineTop,
                w: Math.max(lineRight - lineLeft, 1),
                h: lineHeight,
                fontSize: parseFloat(style.fontSize) || 9.5,
                fontWeight: style.fontWeight,
                fontStyle: style.fontStyle,
                color: cssRgb(style.color) || [30, 41, 59]
            });
        };
        for (let i = 0; i < raw.length; i++) {
            range.setStart(node, i);
            range.setEnd(node, i + 1);
            const rect = range.getBoundingClientRect();
            if (rect.width === 0 && rect.height === 0) continue;
            if (lineTop !== null && Math.abs(rect.top - lineTop) > 1) {
                flush();
                lineText = '';
                lineTop = null;
            }
            if (lineTop === null) {
                lineTop = rect.top;
                lineLeft = rect.left;
                lineRight = rect.right;
                lineHeight = rect.height;
            } else {
                lineLeft = Math.min(lineLeft, rect.left);
                lineRight = Math.max(lineRight, rect.right);
                lineHeight = Math.max(lineHeight, rect.height);
            }
            lineText += raw[i];
        }
        flush();
    }
    return lines;
}

function paintAtsResume(doc, root, place) {
    const scaleX = place.scaleX;
    const scaleY = place.scaleY;
    const origin = root.getBoundingClientRect();
    const mapX = (left) => place.offsetX + (left - origin.left) * scaleX;
    const mapY = (top) => place.offsetY + (top - origin.top) * scaleY;
    const boxes = [];
    root.querySelectorAll('*').forEach(el => {
        if (el.closest('.toggle-btn, #experience-toggle-header')) return;
        const style = getComputedStyle(el);
        if (style.display === 'none' || style.visibility === 'hidden') return;
        const rect = el.getBoundingClientRect();
        if (rect.width < 1 || rect.height < 1) return;
        let fill = null;
        let gradient = null;
        if (style.backgroundImage && style.backgroundImage !== 'none') {
            if (el.matches('h1, h2')) fill = [37, 99, 235];
            else if (el.matches('.profile')) fill = [240, 249, 255];
            else gradient = cssGradient(style.backgroundImage);
        } else {
            fill = cssRgb(style.backgroundColor);
        }
        const box = {
            x: mapX(rect.left),
            y: mapY(rect.top),
            w: rect.width * scaleX,
            h: rect.height * scaleY
        };
        if (gradient) {
            boxes.push({ kind: 'gradient', ...box, stops: gradient });
        } else if (fill) {
            boxes.push({ kind: 'fill', ...box, fill });
        }
        const border = parseFloat(style.borderLeftWidth);
        const borderColor = cssRgb(style.borderLeftColor);
        if (border >= 1 && borderColor && el.matches('.job-item, .education-item, .profile')) {
            boxes.push({
                kind: 'fill',
                x: mapX(rect.left),
                y: mapY(rect.top),
                w: Math.max(border, 2) * scaleX,
                h: rect.height * scaleY,
                fill: borderColor
            });
        }
    });
    boxes.forEach(box => {
        if (box.kind === 'gradient') {
            const [start, end] = box.stops;
            const steps = Math.max(12, Math.round(box.w));
            for (let i = 0; i < steps; i++) {
                const t = steps === 1 ? 0 : i / (steps - 1);
                doc.setFillColor(
                    Math.round(start[0] + (end[0] - start[0]) * t),
                    Math.round(start[1] + (end[1] - start[1]) * t),
                    Math.round(start[2] + (end[2] - start[2]) * t)
                );
                doc.rect(box.x + (box.w * i) / steps, box.y, box.w / steps + 0.15, box.h, 'F');
            }
            return;
        }
        doc.setFillColor(box.fill[0], box.fill[1], box.fill[2]);
        doc.rect(box.x, box.y, box.w, box.h, 'F');
    });

    collectAtsLines(root).forEach(line => {
        const weight = parseInt(line.fontWeight, 10);
        const styleName = line.fontStyle === 'italic'
            ? (weight >= 600 ? 'bolditalic' : 'italic')
            : (weight >= 600 ? 'bold' : 'normal');
        doc.setFont('helvetica', styleName);
        doc.setTextColor(line.color[0], line.color[1], line.color[2]);
        let size = line.fontSize * scaleY;
        doc.setFontSize(size);
        const textWidth = doc.getTextWidth(line.text);
        const maxWidth = Math.max(line.w * scaleX, 1);
        if (textWidth > maxWidth) {
            size *= maxWidth / textWidth;
            doc.setFontSize(size);
        }
        const x = mapX(line.x);
        const y = mapY(line.y) + line.h * 0.8 * scaleY;
        doc.text(line.text, x, y);
    });

    root.querySelectorAll('.icon').forEach(el => {
        const style = getComputedStyle(el);
        if (style.display === 'none' || style.visibility === 'hidden') return;
        const svg = el.querySelector('svg');
        const text = el.textContent.trim();
        if (!svg && !text) return;
        const rect = el.getBoundingClientRect();
        if (rect.width < 1 || rect.height < 1) return;
        doc.addImage(
            svg ? svgIconDataUrl(svg) : emojiDataUrl(text),
            'PNG',
            mapX(rect.left),
            mapY(rect.top),
            rect.width * scaleX,
            rect.height * scaleY
        );
    });

    root.querySelectorAll('a[href]').forEach(el => {
        const href = el.href;
        if (!href) return;
        const rect = el.getBoundingClientRect();
        if (rect.width < 1 || rect.height < 1) return;
        doc.link(mapX(rect.left), mapY(rect.top), rect.width * scaleX, rect.height * scaleY, { url: href });
    });
}

function buildAtsResumePdf() {
    const { jsPDF } = window.jspdf;
    const root = document.querySelector('.content-wrapper');
    const rect = root.getBoundingClientRect();
    const pageW = 612;
    const pageH = 792;
    const natural = 72 / 96;
    const fit = Math.min(pageW / (rect.width * natural), pageH / (rect.height * natural));
    const scale = natural * fit;
    const drawnW = rect.width * scale;
    const drawnH = rect.height * scale;
    const doc = new jsPDF({
        unit: 'pt',
        format: 'letter',
        compress: true
    });
    doc.setProperties({
        title: 'Kevin Campos Gonzalez - Resume',
        author: 'Kevin Campos Gonzalez'
    });
    paintAtsResume(doc, root, {
        scaleX: scale,
        scaleY: scale,
        offsetX: (pageW - drawnW) / 2,
        offsetY: (pageH - drawnH) / 2
    });
    return doc;
}

document.getElementById('downloadBtn').addEventListener('click', function() {
    const langSuffix = currentLanguage === 'es' ? '_ES' : '_EN';
    buildAtsResumePdf().save(`Kevin_Campos_Resume_${langSuffix}_${new Date().getFullYear()}.pdf`);
});

// Función para descargar el TXT
document.getElementById('downloadTxtBtn').addEventListener('click', function() {
    // Extraer información del curriculum
    const name = document.querySelector('h1').textContent;
    const subtitle = document.querySelector('.subtitle').textContent;
    const langSuffix = currentLanguage === 'es' ? '_ES' : '_EN';
    
    // Extraer perfil
    const profileParagraphs = document.querySelectorAll('.profile p');
    let profile = '';
    profileParagraphs.forEach(p => {
        profile += p.textContent.trim() + '\n\n';
    });
    
    // Extraer contacto
    const contactItems = document.querySelectorAll('.contact-item');
    let contactSection = currentLanguage === 'es' ? 'INFORMACIÓN DE CONTACTO\n' : 'CONTACT INFORMATION\n';
    let contact = contactSection;
    contact += '='.repeat(contactSection.length - 1) + '\n';
    contactItems.forEach(item => {
        const text = item.textContent.trim();
        // Eliminar emojis y limpiar texto
        const cleanText = text.replace(/[^\w\s@.-]/g, '').trim();
        if (cleanText) {
            contact += cleanText + '\n';
        }
    });
    
    // Extraer educación
    const educationItems = document.querySelectorAll('.education-item');
    let educationSection = currentLanguage === 'es' ? '\nEDUCACIÓN\n' : '\nEDUCATION\n';
    let education = educationSection;
    education += '='.repeat(educationSection.length - 2) + '\n';
    educationItems.forEach(item => {
        const year = item.querySelector('.education-year').textContent.trim();
        const title = item.querySelector('.education-title').textContent.trim();
        const school = item.querySelector('.education-school').textContent.trim();
        education += `${year} - ${title}\n`;
        education += `  ${school}\n\n`;
    });
    
    // Extraer experiencia laboral
    const jobItems = document.querySelectorAll('.job-item');
    let experienceSection = currentLanguage === 'es' ? '\nEXPERIENCIA LABORAL\n' : '\nWORK EXPERIENCE\n';
    let experience = experienceSection;
    experience += '='.repeat(experienceSection.length - 2) + '\n';
    
    const experienceToggleContainer = document.getElementById('experience-toggle-container');
    const isCompressed = experienceToggleContainer ? experienceToggleContainer.classList.contains('compressed-mode') : false;
    
    jobItems.forEach(item => {
        const isInOriginalGroup = item.closest('#original-jobs-group');
        const isSummaryItem = item.classList.contains('summary-item');
        
        if (isCompressed) {
            // If compressed: skip individual old jobs, keep recent jobs and the summary
            if (isInOriginalGroup) return;
        } else {
            // If NOT compressed: skip summary item, keep everything else
            if (isSummaryItem) return;
        }
        
        const year = item.querySelector('.job-year').textContent.trim();
        const title = item.querySelector('.job-title').textContent.trim();
        const company = item.querySelector('.job-company').textContent.trim();
        const descriptions = item.querySelectorAll('.job-description');
        
        experience += `${year} - ${title}\n`;
        experience += `  ${company}\n`;
        descriptions.forEach(desc => {
            experience += `  • ${desc.textContent.trim()}\n`;
            // Agregar línea extra si hay un spacer después (Mejora visual en TXT)
            const nextElement = desc.nextElementSibling;
            if (nextElement && nextElement.classList.contains('job-description-spacer')) {
                experience += '\n';
            }
        });
        experience += '\n';
    });
    
    // Extraer habilidades técnicas
    const skillCategories = document.querySelectorAll('.skill-category');
    let skillsSection = currentLanguage === 'es' ? '\nHABILIDADES TÉCNICAS\n' : '\nTECHNICAL SKILLS\n';
    let skills = skillsSection;
    skills += '='.repeat(skillsSection.length - 2) + '\n';
    skillCategories.forEach(category => {
        const header = category.querySelector('.skills-subheader').textContent.trim();
        const list = category.querySelector('.skills-list').textContent.trim();
        skills += `${header}:\n`;
        skills += `  ${list}\n\n`;
    });
    
    // Extraer experiencia en IA
    const aiParagraphs = document.querySelectorAll('.ai-description');
    let aiExperienceText = '';
    aiParagraphs.forEach(p => {
        aiExperienceText += p.textContent.trim() + '\n\n';
    });
    let aiSection = currentLanguage === 'es' ? '\nEXPERIENCIA CON IA GENERATIVA\n' : '\nGENERATIVE AI EXPERIENCE\n';
    let aiExperience = aiSection;
    aiExperience += '='.repeat(aiSection.length - 2) + '\n';
    aiExperience += aiExperienceText;
    
    // Extraer idiomas
    const languageBlocks = document.querySelectorAll('.language-block');
    let languagesSection = currentLanguage === 'es' ? '\nIDIOMAS\n' : '\nLANGUAGES\n';
    let languages = languagesSection;
    languages += '='.repeat(languagesSection.length - 2) + '\n';
    languageBlocks.forEach(block => {
        const name = block.querySelector('.language-name').textContent.trim();
        languages += `${name}\n`;
    });
    
    // Combinar todo el contenido
    let txtContent = `${name}\n${subtitle}\n`;
    txtContent += '='.repeat(name.length + subtitle.length + 1) + '\n\n';
    txtContent += profile;
    txtContent += contact;
    txtContent += education;
    txtContent += experience;
    txtContent += skills;
    txtContent += aiExperience;
    txtContent += languages;
    
    // Crear y descargar el archivo
    const blob = new Blob([txtContent], { type: 'text/plain;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Kevin_Campos_Resume_${langSuffix}_${new Date().getFullYear()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
});