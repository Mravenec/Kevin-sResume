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
            'I am a back-end software engineer with solid experience building scalable web applications using Java, Spring Boot, Node.js, and NET Framework. I also have proven experience in developing RESTful APIs and designing robust relational database solutions, in addition to having knowledge in React JS and Angular for front-end.',
            'I am passionate about studying and keeping up with modern technologies, as well as continuously strengthening my engineering skills to design efficient, maintainable, and scalable solutions. I enjoy tackling complex problems from a technical perspective, applying good development practices and architectural thinking to build quality software.',
            'Currently, I am completing the last quarter of my Bachelor\'s in Software Engineering at Universidad Técnica Nacional. I focus on implementing software engineering best practices, working with cloud deployments (AWS), and applying principles like SOLID and Clean Code to develop maintainable, enterprise-grade applications. Likewise, I collaborate effectively in agile environments and have strong problem-solving abilities.'
        ],
        aiDescription: [
            'I am passionate about studying and keeping up with modern technologies, leveraging generative AI tools to complement my learning process of new terms, complex technical concepts, and emerging technologies.',
            'I integrate these tools as productivity enhancers within the software development lifecycle, using them for technical research, code analysis, debugging support, documentation generation, and rapid prototyping, which facilitates solution exploration and accelerates iteration cycles.',
            'I always maintain a focus where engineering, architectural judgment, and good development practices remain as the foundation of the process, using AI as a strategic support to improve the efficiency and quality of software delivered in dynamic and fast-moving environments.'
        ],
        educationItems: [
            { year: '2025 - Present', title: 'Bachelor\'s Degree in Software Engineering', school: 'Universidad Técnica Nacional' },
            { year: '2022 - 2025', title: 'Diploma in Software Engineering (Graduated)', school: 'Universidad Técnica Nacional' },
            { year: '2011', title: 'English as a Second Language', school: 'Universidad Técnica Nacional' },
            { year: '2009', title: 'Electrotechnical Technician, Middle Technician', school: 'Colegio Técnico Profesional Jesús Ocaña Rojas' },
            { year: '2009', title: 'High School Bachelor\'s Degree', school: 'Colegio Técnico Profesional Jesús Ocaña Rojas' }
        ],
        jobItems: [
            {
                year: '2023 - Present',
                title: 'Freelance Back-End Developer',
                company: 'Rodieja S.A.',
                descriptions: [
                    'Architected and implemented scalable back-end solutions using Spring Boot (Java) and React JS, developing RESTful APIs following MVC architecture and SOLID principles for high-performance enterprise applications.',
                    'Designed and optimized MariaDB database structures through normalization, advanced indexing, and stored procedures, improving the efficiency and reliability of critical data operations.',
                    'Deployed and maintained applications on AWS cloud infrastructure (EC2, RDS, and S3), integrating CI/CD pipelines with GitHub to streamline deployment and maintenance workflows.',
                    'Developed complex enterprise-grade modules, including video-on-demand platforms and automotive workshop management systems featuring advanced inventory, financial tracking, and commission calculation logic.',
                    'Collaborated directly with stakeholders to translate business requirements into scalable and maintainable technical solutions.'
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
                'Delivered multi-channel technical support (chat, ticketing, voice) for telecom and SaaS-like services, applying structured troubleshooting using internal knowledge bases (KBs).',
                'Developed strong problem-solving and prioritization skills in high-volume, SLA-driven environments, aligning decisions with business impact and customer value.',
                'Collaborated in team-based environments, including stand-ups and workflow coordination, improving communication and task focus.',
                'Built product knowledge expertise, translating complex technical issues into clear solutions for end users.',
                'Strengthened professional English communication (C1) through daily interaction with international clients.',
                'Gained hands-on exposure to web fundamentals (HTML, CSS, JavaScript, DNS configuration and domain routing).',
                'Supported onboarding and mentoring of peers, contributing to team efficiency and decision-making processes.',
                'Applied process adherence and documentation-driven troubleshooting, ensuring consistency and quality in issue resolution.'
            ]
        },
        skillCategories: [
            {
                header: 'Databases',
                list: 'MariaDB, MySQL, PostgreSQL, MS SQL — experienced in database creation and maintenance, schema design, normalization, CRUD operations, stored procedures, triggers, indexing, and performance tuning.'
            },
            {
                header: 'Backend Development',
                list: 'Java (Spring Boot, Maven, JPA/JOOQ), C# (.NET, Dapper, EF Core), RESTful API design, MVC pattern, SOLID principles, Node.js (Express, Sequelize), CMS integration and development'
            },
            {
                header: 'Frontend Development',
                list: 'React JS, Angular, JavaScript (ES6+), HTML5, CSS3, Bootstrap, JSF-PrimeFaces, Vue.js'
            },
            {
                header: 'Cloud & DevOps',
                list: 'AWS (EC2, RDS, S3, cloud-based deployments, Git/GitHub, CI/CD pipelines, testing methodologies, web security best practices'
            },
            {
                header: 'AI & Development Tools',
                list: 'Generative AI tools (ChatGPT, Gemini, Deepseek, Claude, Grok, Kimi, GitHub Copilot, Windsurf, Cursor, Antigravity) for development support, code review, research, and problem-solving'
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
            'Soy un ingeniero de software back-end con sólida experiencia construyendo aplicaciones web escalables utilizando Java, Spring Boot, Node.js y tecnologías .NET. También tengo experiencia comprobada en el desarrollo de APIs RESTful y en el diseño de soluciones de bases de datos relacionales robustas, además de contar con conocimientos en React JS y Angular para front-end.',
            'Me apasiona estudiar y mantenerme al día con las tecnologías modernas, así como fortalecer continuamente mis habilidades de ingeniería para diseñar soluciones eficientes, mantenibles y escalables. Disfruto abordar problemas complejos desde una perspectiva técnica, aplicando buenas prácticas de desarrollo y pensamiento arquitectónico para construir software de calidad.',
            'Actualmente me encuentro cursando el último cuatrimestre de mi Bachillerato en Ingeniería de Software en la Universidad Técnica Nacional. Me enfoco en implementar mejores prácticas de ingeniería de software, trabajando con despliegues en la nube (AWS) y aplicando principios como SOLID y Clean Code para desarrollar aplicaciones mantenibles de nivel empresarial. Asimismo, colaboro eficazmente en entornos ágiles y cuento con fuertes habilidades de resolución de problemas.'
        ],
        aiDescription: [
            'Para mí es de suma importancia mantenerme al día con las tecnologías modernas, aprovechando herramientas de IA generativa para complementar mi proceso de aprendizaje de nuevos términos, conceptos técnicos complejos y tecnologías emergentes.',
            'Por otro lado, integro estas herramientas como potenciadores de productividad dentro del ciclo de vida del desarrollo de software, utilizándolas para investigación técnica, análisis de código, soporte en depuración, generación de documentación y prototipado rápido, lo que facilita la exploración de soluciones y acelera los ciclos de iteración.',
            'Además, mantengo siempre un enfoque donde la ingeniería, el criterio arquitectónico y las buenas prácticas de desarrollo permanecen como base del proceso, utilizando la IA como un apoyo estratégico para mejorar la eficiencia y la calidad del software entregado en entornos dinámicos y de rápido movimiento.'
        ],
        educationItems: [
            { year: '2025 - Presente', title: 'Bachillerato en Ingeniería de Software', school: 'Universidad Técnica Nacional' },
            { year: '2022 - 2025', title: 'Diplomado en Ingeniería de Software (Graduado)', school: 'Universidad Técnica Nacional' },
            { year: '2011', title: 'Inglés como Segundo Idioma', school: 'Universidad Técnica Nacional' },
            { year: '2009', title: 'Técnico Medio en Electrotecnia', school: 'Colegio Técnico Profesional Jesús Ocaña Rojas' },
            { year: '2009', title: 'Bachillerato de Educación Media', school: 'Colegio Técnico Profesional Jesús Ocaña Rojas' }
        ],
        jobItems: [
            {
                year: '2023 - Presente',
                title: 'Desarrollador Back-End Freelance',
                company: 'Rodieja S.A.',
                descriptions: [
                    'Arquitecté e implementé soluciones back-end escalables utilizando Spring Boot (Java) y React JS, desarrollando APIs RESTful bajo arquitectura MVC y principios SOLID para aplicaciones empresariales de alto rendimiento.',
                    'Diseñé y optimicé bases de datos MariaDB mediante normalización, indexación avanzada y procedimientos almacenados, mejorando la eficiencia y estabilidad de operaciones críticas de datos.',
                    'Desplegué y administré aplicaciones en infraestructura cloud de AWS (EC2, RDS y S3), integrando pipelines CI/CD con GitHub para automatizar procesos de despliegue y mantenimiento.',
                    'Desarrollé módulos empresariales complejos, incluyendo plataformas de video bajo demanda y sistemas de gestión para talleres automotrices con lógica avanzada de inventario, seguimiento financiero y cálculo de comisiones.',
                    'Colaboré directamente con stakeholders para transformar requerimientos de negocio en soluciones técnicas escalables y mantenibles.'
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
                'Brindé soporte técnico multicanal (chat, tickets, voz) para servicios de telecomunicaciones y tipo SaaS, aplicando resolución de problemas estructurada utilizando bases de conocimiento internas (KBs).',
                'Desarrollé sólidas habilidades de resolución de problemas y priorización en entornos de alto volumen impulsados por SLAs, alineando las decisiones con el impacto comercial y el valor para el cliente.',
                'Colaboré en entornos basados en equipos, incluyendo stand-ups y coordinación de flujo de trabajo, mejorando la comunicación y el enfoque en las tareas.',
                'Construí experiencia en conocimiento del producto, traduciendo problemas técnicos complejos en soluciones claras para los usuarios finales.',
                'Fortalecí la comunicación profesional en inglés (C1) a través de la interacción diaria con clientes internacionales.',
                'Obtuve exposición práctica a fundamentos web (HTML, CSS, JavaScript, configuración de DNS y enrutamiento de dominios).',
                'Apoyé el proceso de inducción y mentoría de compañeros, contribuyendo a la eficiencia del equipo y a los procesos de toma de decisiones.',
                'Apliqué adherencia a procesos y resolución de problemas impulsada por documentación, asegurando consistencia y calidad en la resolución de problemas.'
            ]
        },
        skillCategories: [
            {
                header: 'Bases de Datos',
                list: 'MariaDB, MySQL, PostgreSQL, MS SQL — con experiencia en creación y mantenimiento de bases de datos, diseño de esquemas, normalización, operaciones CRUD, procedimientos almacenados, triggers, indexación y optimización de rendimiento.'
            },
            {
                header: 'Desarrollo Backend',
                list: 'Java (Spring Boot, Maven, JPA/JOOQ), C# (.NET, Dapper, EF Core), diseño de APIs RESTful, patrón MVC, principios SOLID, Node.js (Express, Sequelize), integración y desarrollo de CMS'
            },
            {
                header: 'Desarrollo Frontend',
                list: 'React JS, Angular, JavaScript (ES6+), HTML5, CSS3, Bootstrap, JSF-PrimeFaces, Vue.js'
            },
            {
                header: 'Cloud & DevOps',
                list: 'AWS (EC2, RDS, S3, despliegues basados en la nube, Git/GitHub, pipelines CI/CD, metodologías de prueba, mejores prácticas de seguridad web'
            },
            {
                header: 'IA & Herramientas de Desarrollo',
                list: 'Herramientas de IA generativa (ChatGPT, Gemini, Deepseek, Claude, Grok, Kimi, GitHub Copilot, Windsurf, Cursor, Antigravity) para soporte de desarrollo, revisión de código, investigación y resolución de problemas'
            }
        ],
        languageNames: ['Inglés C1', 'Alemán A2', 'Español Nativo']
    }
};

// Current language state
let currentLanguage = 'en';

// Function to switch language
function switchLanguage(lang) {
    currentLanguage = lang;
    const t = translations[lang];
    
    // Update download buttons
    document.getElementById('downloadBtn').textContent = t.downloadBtn;
    document.getElementById('downloadTxtBtn').textContent = t.downloadTxtBtn;
    
    // Update subtitle
    document.querySelector('.subtitle').textContent = t.subtitle;
    
    // Update section headers
    document.querySelector('section.contact h2').textContent = t.contact;
    document.querySelector('section.education h2').textContent = t.education;
    document.querySelector('section.skills h2').textContent = t.technicalSkills;
    document.querySelector('section.experience h2').textContent = t.workExperience;
    document.querySelector('section.ai-experience h2').textContent = t.generativeAI;
    document.querySelector('section.languages h2').textContent = t.languages;
    
    // Update profile
    const profileParagraphs = document.querySelectorAll('.profile p');
    t.profile.forEach((text, index) => {
        if (profileParagraphs[index]) {
            profileParagraphs[index].textContent = text;
        }
    });
    
    // Update AI description
    const aiParagraphs = document.querySelectorAll('.ai-description');
    if (Array.isArray(t.aiDescription)) {
        t.aiDescription.forEach((text, index) => {
            if (aiParagraphs[index]) {
                aiParagraphs[index].textContent = text;
            }
        });
    } else {
        // Fallback for single paragraph
        if (aiParagraphs[0]) {
            aiParagraphs[0].textContent = t.aiDescription;
        }
    }
    
    // Update education items
    const educationItems = document.querySelectorAll('.education-item');
    t.educationItems.forEach((item, index) => {
        if (educationItems[index]) {
            educationItems[index].querySelector('.education-year').textContent = item.year;
            educationItems[index].querySelector('.education-title').textContent = item.title;
            educationItems[index].querySelector('.education-school').textContent = item.school;
        }
    });
    
    // Update job items
    const jobItems = document.querySelectorAll('.job-item');
    t.jobItems.forEach((job, jobIndex) => {
        if (jobItems[jobIndex]) {
            jobItems[jobIndex].querySelector('.job-year').textContent = job.year;
            jobItems[jobIndex].querySelector('.job-title').textContent = job.title;
            jobItems[jobIndex].querySelector('.job-company').textContent = job.company;
            const descriptions = jobItems[jobIndex].querySelectorAll('.job-description');
            job.descriptions.forEach((desc, descIndex) => {
                if (descriptions[descIndex]) {
                    descriptions[descIndex].textContent = desc;
                }
            });
        }
    });

    // Update summary job item
    const summaryItem = document.querySelector('.summary-item');
    if (summaryItem && t.summaryJob) {
        summaryItem.querySelector('.job-year').textContent = t.summaryJob.year;
        summaryItem.querySelector('.job-title').textContent = t.summaryJob.title;
        summaryItem.querySelector('.job-company').textContent = t.summaryJob.company;
        const summaryDescriptions = summaryItem.querySelectorAll('.job-description');
        t.summaryJob.descriptions.forEach((desc, index) => {
            if (summaryDescriptions[index]) {
                summaryDescriptions[index].textContent = desc;
            }
        });
    }
    
    // Update skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    t.skillCategories.forEach((category, index) => {
        if (skillCategories[index]) {
            skillCategories[index].querySelector('.skills-subheader').textContent = category.header;
            skillCategories[index].querySelector('.skills-list').textContent = category.list;
        }
    });
    
    // Update language names
    const languageBlocks = document.querySelectorAll('.language-block');
    t.languageNames.forEach((name, index) => {
        if (languageBlocks[index]) {
            languageBlocks[index].querySelector('.language-name').textContent = name;
        }
    });
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`lang-${lang}`).classList.add('active');
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

document.getElementById('lang-en').addEventListener('click', () => switchLanguage('en'));
document.getElementById('lang-es').addEventListener('click', () => switchLanguage('es'));

// Toggle Summary Logic
const toggleBtn = document.getElementById('experience-toggle-header');
const experienceContainer = document.getElementById('experience-toggle-container');

if (toggleBtn && experienceContainer) {
    toggleBtn.addEventListener('click', () => {
        const isCompressed = experienceContainer.classList.toggle('compressed-mode');
        const icon = toggleBtn.querySelector('.toggle-icon');
        
        // Update Icon and Toggle Visibility
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

// Función para descargar el PDF
document.getElementById('downloadBtn').addEventListener('click', function() {
    const element = document.querySelector('.content-wrapper'); // Captura solo el contenido principal para evitar márgenes extra
    const langSuffix = currentLanguage === 'es' ? '_ES' : '_EN';
    const opt = {
        margin: 0,
        filename: `Kevin_Campos_Resume_${langSuffix}_${new Date().getFullYear()}.pdf`,
        image: { type: 'jpeg', quality: 1.0 },
        html2canvas: {
            scale: 2, // Alta resolución para precisión
            useCORS: true,
            allowTaint: true,
            letterRendering: true, // Fix for character overlapping in some browsers/PDF engines
            backgroundColor: '#ffffff', // Fondo blanco para consistencia
            logging: false,
            width: element.offsetWidth, // Ancho exacto del contenido
            height: element.offsetHeight, // Alto exacto del contenido
            scrollX: 0,
            scrollY: 0
        },
        jsPDF: {
            unit: 'px',
            format: [element.offsetWidth, element.offsetHeight], // Tamaño personalizado basado en el contenido
            orientation: 'portrait',
            compress: true,
            putOnlyUsedFonts: true
        },
        pagebreak: { mode: 'avoid-all' }
    };
    
    // Inyectar estilos temporales para forzar colores exactos en el PDF (Evita líneas negras y pérdida de contraste)
    const pdfStyles = document.createElement('style');
    pdfStyles.id = 'pdf-styles-override';
    pdfStyles.innerHTML = `
        .header { background-color: transparent !important; }
        .header h1 { 
            background: #2563eb !important; 
            color: white !important;
            padding: 4px 6px !important;
            border-radius: 4px !important;
            display: block !important;
        }
        .header .subtitle { 
            color: #2563eb !important; 
            background: transparent !important;
            margin-top: 5px !important;
        }
        .job-item, .education-item { border-left: 2px solid #2563eb !important; }
        .summary-item { border-left: 2px solid #2563eb !important; }
        .profile { border-left: 2px solid #f59e0b !important; }
        h2 { color: #2563eb !important; }
        .contact h2, .education h2, .skills h2, .experience h2, .ai-experience h2, .languages h2 { 
            background-color: #2563eb !important; 
            color: white !important;
            -webkit-print-color-adjust: exact;
        }
        .profile { background: linear-gradient(135deg, #f0f9ff, #fefce8) !important; }
    `;
    document.head.appendChild(pdfStyles);
    
    const toggleBtn = document.getElementById('experience-toggle-header');
    if (toggleBtn) toggleBtn.classList.add('no-export');

    html2pdf().set(opt).from(element).save().then(() => {
        if (toggleBtn) toggleBtn.classList.remove('no-export');
        document.head.removeChild(pdfStyles);
    });
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