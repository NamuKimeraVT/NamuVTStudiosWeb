"use strict";

/* Bilingual content dictionary. English is the source language; Spanish is applied at runtime. */
(function () {
    const spanish = {
        "Home": "Inicio",
        "Ecosystem": "Ecosistema",
        "Documentation": "Documentación",
        "Employees": "Empleados",
        "FAQ": "Preguntas frecuentes",
        "Store": "Tienda",
        "Video Games": "Videojuegos",
        "Contact": "Contacto",
        "Main navigation": "Navegación principal",
        "Open menu": "Abrir menú",
        "Close menu": "Cerrar menú",
        "Switch language to Spanish": "Cambiar el idioma a español",
        "Switch language to English": "Cambiar el idioma a inglés",
        "Contact | NamuVT Studios": "Contacto | NamuVT Studios",
        "NVTS Documentation | NamuVT Studios": "Documentación NVTS | NamuVT Studios",
        "Employees | NamuVT Studios": "Empleados | NamuVT Studios",
        "Frequently Asked Questions | NamuVT Studios": "Preguntas frecuentes | NamuVT Studios",
        "NVTS Ecosystem | NamuVT Studios": "Ecosistema NVTS | NamuVT Studios",
        "Store | NamuVT Studios": "Tienda | NamuVT Studios",
        "Video Games | NamuVT Studios": "Videojuegos | NamuVT Studios",
        "Home | NamuVT Studios": "Inicio | NamuVT Studios",

        "CONTACT": "CONTACTO",
        "How can we": "¿Cómo podemos",
        "help you?": "ayudarte?",
        "Ask us a question, get in touch about joining the team, or let us know if your store order has not arrived.": "Hacenos una pregunta, contactanos para sumarte al equipo o contanos si tu pedido de la tienda todavía no llegó.",
        "CONTACT CHANNELS": "CANALES DE CONTACTO",
        "We are here to": "Estamos aquí para",
        "listen.": "escucharte.",
        "Choose a reason for your message and tell us what you need. Your inquiry will be sent to the NamuVT Studios team.": "Elegí el motivo de tu mensaje y contanos qué necesitás. Tu consulta será enviada al equipo de NamuVT Studios.",
        "Email": "Correo electrónico",
        "Social media": "Redes sociales",
        "You can also find us on our official channels.": "También podés encontrarnos en nuestros canales oficiales.",
        "Name": "Nombre",
        "Email address": "Dirección de correo electrónico",
        "Why are you contacting us?": "¿Por qué motivo nos contactás?",
        "I have a question or inquiry": "Tengo una pregunta o consulta",
        "I would like to work at NamuVT Studios": "Me gustaría trabajar en NamuVT Studios",
        "I have an issue with a store order": "Tengo un problema con un pedido de la tienda",
        "Portfolio, resume, or professional profile (optional)": "Portfolio, currículum o perfil profesional (opcional)",
        "Order number (optional)": "Número de pedido (opcional)",
        "Message": "Mensaje",
        "Send message": "Enviar mensaje",
        "Your message will be sent directly to the NamuVT Studios team.": "Tu mensaje se enviará directamente al equipo de NamuVT Studios.",
        "Your name": "Tu nombre",
        "Contact NamuVT Studios with questions, job inquiries, or store order support.": "Contactá a NamuVT Studios para consultas, oportunidades laborales o ayuda con pedidos de la tienda.",
        "Versioned documentation for the 25 applications in the NamuVT Studios NVTS ecosystem.": "Documentación por versiones de las 25 aplicaciones del ecosistema NVTS de NamuVT Studios.",
        "Video games and interactive projects developed by NamuVT Studios.": "Videojuegos y proyectos interactivos desarrollados por NamuVT Studios.",
        "The official NamuVT Studios store. Products and items from our projects are coming soon.": "La tienda oficial de NamuVT Studios. Próximamente habrá productos y artículos de nuestros proyectos.",
        "Explore the 25 applications in the NamuVT Studios ecosystem.": "Explorá las 25 aplicaciones del ecosistema de NamuVT Studios.",
        "NamuVT Studios is an independent Argentine studio developing video games and creative tools.": "NamuVT Studios es un estudio argentino independiente que desarrolla videojuegos y herramientas creativas.",
        "Meet the multidisciplinary team behind NamuVT Studios.": "Conocé al equipo multidisciplinario detrás de NamuVT Studios.",
        "Frequently asked questions about NamuVT Studios, its software, and the technologies used across the NVTS ecosystem.": "Preguntas frecuentes sobre NamuVT Studios, su software y las tecnologías utilizadas en el ecosistema NVTS.",
        "Method not allowed.": "Método no permitido.",
        "Request not allowed.": "Solicitud no permitida.",
        "The form contains invalid data.": "El formulario contiene datos no válidos.",
        "Message received.": "Mensaje recibido.",
        "We recently received a submission. Please wait a few seconds before trying again.": "Recibimos un envío recientemente. Esperá unos segundos antes de volver a intentarlo.",
        "The email service is not configured. Check GMAIL_USER and GMAIL_APP_PASSWORD in your Vercel environment variables, then redeploy.": "El servicio de correo no está configurado. Revisá las variables de entorno GMAIL_USER y GMAIL_APP_PASSWORD en Vercel y volvé a implementar el sitio.",
        "Your message was sent successfully. Thank you for contacting NamuVT Studios.": "Tu mensaje se envió correctamente. Gracias por contactar a NamuVT Studios.",
        "We could not send your message right now. Please try again later.": "No pudimos enviar tu mensaje en este momento. Volvé a intentarlo más tarde.",
        "Your message could not be sent.": "No se pudo enviar tu mensaje.",
        "Your message could not be sent. Please try again.": "No se pudo enviar tu mensaje. Volvé a intentarlo.",
        "Sending your message…": "Enviando tu mensaje…",
        "Sending…": "Enviando…",
        "Please enter your name, email address, and message.": "Ingresá tu nombre, dirección de correo electrónico y mensaje.",
        "Please select one of the available contact reasons.": "Seleccioná uno de los motivos de contacto disponibles.",
        "Please enter a valid email address.": "Ingresá una dirección de correo electrónico válida.",
        "The message must contain at least 10 characters.": "El mensaje debe contener al menos 10 caracteres.",
        "The portfolio link is only available for job inquiries.": "El enlace al portfolio solo está disponible para consultas laborales.",
        "The order number is only available for store inquiries.": "El número de pedido solo está disponible para consultas sobre la tienda.",
        "The portfolio or resume link must be a valid URL.": "El enlace al portfolio o currículum debe ser una URL válida.",
        "We could not validate your submission. Refresh the page and try again.": "No pudimos validar tu envío. Actualizá la página e intentá nuevamente.",
        "For example: NVTS-10025": "Por ejemplo: NVTS-10025",
        "Tell us how we can help...": "Contanos cómo podemos ayudarte...",

        "KNOWLEDGE BASE · VERSIONED MANUALS": "CENTRO DE CONOCIMIENTO · MANUALES POR VERSIÓN",
        "Documentation.": "Documentación.",
        "Find guides and reference material for each application in the NVTS ecosystem. Documentation is organized by application and release version, so previous manuals remain accessible as software evolves.": "Encontrá guías y material de referencia para cada aplicación del ecosistema NVTS. La documentación está organizada por aplicación y versión, para que los manuales anteriores sigan disponibles a medida que el software evoluciona.",
        "25 APPLICATIONS · ONE DOCUMENTATION HUB": "25 APLICACIONES · UN SOLO CENTRO DE DOCUMENTACIÓN",
        "Browse by application and version": "Explorá por aplicación y versión",
        "Each application has an independent documentation area. When a new version is released, it will be added as a separate entry—for example, PhotoMania 1.0 and PhotoMania 1.5—without replacing the earlier version's documentation.": "Cada aplicación tiene un espacio de documentación independiente. Cuando se publique una nueva versión, se agregará como una entrada separada —por ejemplo, PhotoMania 1.0 y PhotoMania 1.5— sin reemplazar la documentación de la versión anterior.",
        "APPLICATION DOCUMENTATION": "DOCUMENTACIÓN DE LA APLICACIÓN",
        "Photo editing, raster illustration, and digital compositing.": "Edición fotográfica, ilustración rasterizada y composición digital.",
        "Version 1.0 documented": "Versión 1.0 documentada",
        "Version 1.0": "Versión 1.0",
        "Initial public documentation for NVTS-PhotoMania 1.0. This version page records the application scope and the main workflows covered by the first release.": "Documentación pública inicial de NVTS-PhotoMania 1.0. Esta página registra el alcance de la aplicación y los principales flujos de trabajo cubiertos por la primera versión.",
        "Getting started": "Primeros pasos",
        "Understand the purpose of PhotoMania, the supported image-editing workflow, and the basic steps for starting or opening an image document.": "Conocé el propósito de PhotoMania, el flujo de edición de imágenes y los pasos básicos para crear o abrir un documento de imagen.",
        "Workspace and canvas": "Espacio de trabajo y lienzo",
        "Learn the role of the editing workspace, the document canvas, navigation, zoom, and the visual work area.": "Conocé las funciones del espacio de edición, el lienzo del documento, la navegación, el zoom y el área visual de trabajo.",
        "Painting, selections, and retouching": "Pintura, selecciones y retoque",
        "Reference the core image-creation and editing categories: painting tools, selections, and pixel-level retouching.": "Consultá las categorías principales de creación y edición de imágenes: herramientas de pintura, selecciones y retoque a nivel de píxel.",
        "Layers and masks": "Capas y máscaras",
        "Understand layer-based editing and the non-destructive concepts used to isolate and control image changes.": "Comprendé la edición por capas y los conceptos no destructivos que permiten aislar y controlar los cambios de una imagen.",
        "Adjustments, filters, and styles": "Ajustes, filtros y estilos",
        "Explore the purpose of image adjustments, filters, and non-destructive visual styling in the editing workflow.": "Explorá el uso de ajustes de imagen, filtros y estilos visuales no destructivos dentro del flujo de edición.",
        "Guides, symmetry, and print preparation": "Guías, simetría y preparación para impresión",
        "Review the guide and symmetry workflows, along with resources for preparing comic pages and images for print.": "Revisá los flujos de trabajo de guías y simetría, junto con los recursos para preparar páginas de cómic e imágenes para impresión.",
        "Import and export": "Importación y exportación",
        "Use the file workflow to bring image assets into a document and prepare the finished image for output.": "Usá las operaciones de archivo para incorporar recursos gráficos a un documento y preparar la imagen terminada para su salida.",
        "This is the version 1.0 public documentation outline. Detailed command-by-command instructions and format-specific behavior should be expanded against the final 1.0 application build.": "Este es el esquema de la documentación pública de la versión 1.0. Las instrucciones detalladas de cada comando y el comportamiento específico de los formatos deberán ampliarse tomando como referencia la compilación final de la aplicación 1.0.",
        "When a later release is published, it will receive a separate version section (for example, 1.5). The 1.0 documentation will remain available and unchanged.": "Cuando se publique una versión posterior, tendrá una sección independiente (por ejemplo, 1.5). La documentación de la versión 1.0 seguirá disponible y sin modificaciones.",
        "Audio production, recording, editing, mixing, and mastering.": "Producción de audio, grabación, edición, mezcla y masterización.",
        "Nonlinear video editing and audiovisual post-production.": "Edición de video no lineal y posproducción audiovisual.",
        "Media encoding, conversion, and batch export workflows.": "Codificación multimedia, conversión y flujos de exportación por lotes.",
        "Digital compositing, motion graphics, and visual effects.": "Composición digital, gráficos en movimiento y efectos visuales.",
        "Vector illustration and scalable graphic design.": "Ilustración vectorial y diseño gráfico escalable.",
        "Document creation, editing, formatting, and publishing.": "Creación, edición, formato y publicación de documentos.",
        "Spreadsheets, formulas, data analysis, and visualization.": "Hojas de cálculo, fórmulas, análisis de datos y visualización.",
        "Slide presentations, visual storytelling, and exports.": "Presentaciones de diapositivas, narrativa visual y exportaciones.",
        "Pixel art, sprites, tilesets, and 2D animation.": "Pixel art, sprites, tilesets y animación 2D.",
        "Editorial design and multi-page publishing.": "Diseño editorial y publicaciones multipágina.",
        "3D modeling, sculpting, animation, materials, and rendering.": "Modelado 3D, escultura, animación, materiales y renderizado.",
        "Interface design, design systems, and interactive prototypes.": "Diseño de interfaces, sistemas de diseño y prototipos interactivos.",
        "2D, 3D, and hybrid video game development.": "Desarrollo de videojuegos 2D, 3D e híbridos.",
        "Interactive 2D and 3D simulation systems.": "Sistemas interactivos de simulación 2D y 3D.",
        "2D animation and audiovisual production.": "Animación 2D y producción audiovisual.",
        "Computer-aided design and technical documentation.": "Diseño asistido por computadora y documentación técnica.",
        "Project, team, task, and studio workflow management.": "Gestión de proyectos, equipos, tareas y flujos de trabajo del estudio.",
        "PDF viewing, creation, editing, and document organization.": "Visualización, creación, edición y organización de documentos PDF.",
        "Photo library management and non-destructive RAW development.": "Gestión de bibliotecas fotográficas y revelado RAW no destructivo.",
        "Code editing and software development workflows.": "Edición de código y flujos de desarrollo de software.",
        "Civil engineering design and infrastructure documentation.": "Diseño de ingeniería civil y documentación de infraestructura.",
        "Building information modeling and project coordination.": "Modelado de información de construcción y coordinación de proyectos.",
        "Prototyping and engineering tools.": "Herramientas de prototipado e ingeniería.",
        "Industrial design, automotive, and mechanical engineering.": "Diseño industrial, automotriz e ingeniería mecánica.",
        "Functional prototyping and engineering workflow validation.": "Prototipado funcional y validación de flujos de trabajo de ingeniería.",
        "Industrial, automotive, and mechanical product design.": "Diseño de productos industriales, automotrices y mecánicos.",
        "Documentation coming soon": "Documentación próximamente",
        "Public documentation will be added when this application has its first documented release. Each release will receive its own section, and previous version manuals will remain available.": "La documentación pública se incorporará cuando esta aplicación tenga su primera versión documentada. Cada lanzamiento tendrá su propia sección y los manuales de versiones anteriores seguirán disponibles.",

        "PEOPLE & TALENT": "PERSONAS Y TALENTO",
        "The team behind": "El equipo detrás de",
        "the ideas.": "las ideas.",
        "A multidisciplinary team combining development, art, design, and production to bring our projects to life.": "Un equipo multidisciplinario que combina desarrollo, arte, diseño y producción para dar vida a nuestros proyectos.",
        "NVTS TEAM": "EQUIPO NVTS",
        "Founder · Leadership & Development": "Fundador · Dirección y desarrollo",
        "Personal profile ↗": "Perfil personal ↗",
        "Management": "Gestión",
        "CEO": "Director ejecutivo",
        "PROJECT MANAGER": "GERENTE DE PROYECTOS",
        "VERSION CONTROL MANAGER": "RESPONSABLE DE CONTROL DE VERSIONES",
        "SOCIAL MEDIA MANAGER": "RESPONSABLE DE REDES SOCIALES",
        "OUTSOURCING MANAGER": "RESPONSABLE DE CONTRATACIONES EXTERNAS",
        "STEAM PAGE MANAGER": "RESPONSABLE DE LA PÁGINA DE STEAM",
        "COMMUNITY MANAGER": "RESPONSABLE DE COMUNIDAD",
        "Leadership": "Liderazgo",
        "SCRUM MASTER": "SCRUM MASTER",
        "CREATIVE DIRECTOR": "DIRECTOR CREATIVO",
        "TECHNICAL ARTIST": "ARTISTA TÉCNICO",
        "Programming": "Programación",
        "GAME PROGRAMMER": "PROGRAMADOR DE VIDEOJUEGOS",
        "SOFTWARE PROGRAMMER": "PROGRAMADOR DE SOFTWARE",
        "UI PROGRAMMER": "PROGRAMADOR DE INTERFAZ",
        "AI PROGRAMMER": "PROGRAMADOR DE IA",
        "QA TESTER": "ANALISTA DE CONTROL DE CALIDAD",
        "BUG TRACKER": "RESPONSABLE DE SEGUIMIENTO DE ERRORES",
        "SIMULATIONS PROGRAMMER": "PROGRAMADOR DE SIMULACIONES",
        "2D Art": "Arte 2D",
        "2D ARTIST": "ARTISTA 2D",
        "2D ANIMATOR": "ANIMADOR 2D",
        "VFX 2D ARTIST": "ARTISTA DE EFECTOS VISUALES 2D",
        "CONCEPT ARTIST": "ARTISTA DE CONCEPT ART",
        "STORYBOARD ARTIST": "ARTISTA DE STORYBOARD",
        "SIMULATIONS 2D ARTIST": "ARTISTA DE SIMULACIONES 2D",
        "3D Art": "Arte 3D",
        "3D ARTIST": "ARTISTA 3D",
        "3D ANIMATOR": "ANIMADOR 3D",
        "VFX 3D ARTIST": "ARTISTA DE EFECTOS VISUALES 3D",
        "TEXTURES ARTIST": "ARTISTA DE TEXTURAS",
        "MATERIALS ARTIST": "ARTISTA DE MATERIALES",
        "SIMULATIONS 3D ARTIST": "ARTISTA DE SIMULACIONES 3D",
        "Audio": "Audio",
        "MUSICIAN": "MÚSICO",
        "AUDIO ENGINEER": "INGENIERO DE AUDIO",
        "AUDIO EDITOR": "EDITOR DE AUDIO",
        "Design": "Diseño",
        "UX DESIGNER": "DISEÑADOR UX",
        "UI DESIGNER": "DISEÑADOR UI",
        "GAME DESIGNER": "DISEÑADOR DE VIDEOJUEGOS",
        "LEVEL DESIGNER": "DISEÑADOR DE NIVELES",
        "COMBAT DESIGNER": "DISEÑADOR DE COMBATE",
        "QUEST DESIGNER": "DISEÑADOR DE MISIONES",
        "CHARACTER DESIGNER": "DISEÑADOR DE PERSONAJES",
        "ENVIRONMENT DESIGNER": "DISEÑADOR DE ENTORNOS",
        "NARRATIVE DESIGNER": "DISEÑADOR NARRATIVO",
        "Marketing": "Marketing",
        "DIGITAL MARKETING": "MARKETING DIGITAL",
        "VIDEO EDITOR": "EDITOR DE VIDEO",
        "ORGANIZATION": "ORGANIZACIÓN",
        "Multidisciplinary collaboration.": "Colaboración multidisciplinaria.",
        "The listed roles represent the areas and responsibilities considered within the studio’s production organization; they do not imply that every position is currently held by a hired team member.": "Los puestos enumerados representan las áreas y responsabilidades contempladas en la organización de producción del estudio; no implican que cada función esté actualmente ocupada por una persona contratada.",

        "HELP CENTER": "CENTRO DE AYUDA",
        "Frequently": "Preguntas",
        "Asked Questions.": "frecuentes.",
        "Information about the studio, our software, and the technology we use.": "Información sobre el estudio, nuestro software y las tecnologías que utilizamos.",
        "BEFORE YOU START": "ANTES DE EMPEZAR",
        "This section brings together answers to common questions about NamuVT Studios. If you cannot find what you are looking for, contact us through the Contact page or our official social channels.": "Esta sección reúne respuestas a preguntas habituales sobre NamuVT Studios. Si no encontrás lo que buscás, contactanos desde la página de Contacto o a través de nuestros canales sociales oficiales.",
        "Where was NamuVT Studios founded?": "¿Dónde se fundó NamuVT Studios?",
        "NamuVT Studios was founded in Buenos Aires, Argentina.": "NamuVT Studios se fundó en Buenos Aires, Argentina.",
        "What are the 25 applications in the NVTS ecosystem?": "¿Cuáles son las 25 aplicaciones del ecosistema NVTS?",
        "The official catalog consists of NVTS-PhotoMania, NVTS-MixerDAW, NVTS-PremiereSurprise, NVTS-MultiEncoder, NVTS-FusionFX, NVTS-Vectorize, NVTS-Docs, NVTS-Sheets, NVTS-Deck, NVTS-Pixelize, NVTS-Designer, NVTS-Oven, NVTS-FigGUI, NVTS-GameEngine, NVTS-SimulationEngine, NVTS-Symphony, NVTS-CAD, NVTS-Works, NVTS-PDF, NVTS-Light, NVTS-Codex, NVTS-Civil, NVTS-BIM, NVTS-ProtoType, and NVTS-Matrix. NVTS-Launcher is the complementary desktop application. Procedural Field Maker remains an independent, available tool.": "El catálogo oficial está compuesto por NVTS-PhotoMania, NVTS-MixerDAW, NVTS-PremiereSurprise, NVTS-MultiEncoder, NVTS-FusionFX, NVTS-Vectorize, NVTS-Docs, NVTS-Sheets, NVTS-Deck, NVTS-Pixelize, NVTS-Designer, NVTS-Oven, NVTS-FigGUI, NVTS-GameEngine, NVTS-SimulationEngine, NVTS-Symphony, NVTS-CAD, NVTS-Works, NVTS-PDF, NVTS-Light, NVTS-Codex, NVTS-Civil, NVTS-BIM, NVTS-ProtoType y NVTS-Matrix. NVTS-Launcher es la aplicación de escritorio complementaria. Procedural Field Maker continúa siendo una herramienta independiente y disponible.",
        "The ecosystem covers photo editing and management, illustration, audio, video, media encoding, visual effects, vector and editorial design, documents, productivity, pixel art, 3D creation, interface design, software development, video games, 2D animation, simulation for research and games, CAD, civil engineering, BIM, technical prototyping, industrial design, and studio management.": "El ecosistema abarca edición y gestión fotográfica, ilustración, audio, video, codificación multimedia, efectos visuales, diseño vectorial y editorial, documentos, productividad, pixel art, creación 3D, diseño de interfaces, desarrollo de software, videojuegos, animación 2D, simulación para investigación y videojuegos, CAD, ingeniería civil, BIM, prototipado técnico, diseño industrial y gestión del estudio.",
        "Which software tools do we use, and what are they for?": "¿Qué herramientas de software utilizamos y para qué sirven?",
        "The studio uses a range of creative, production, development, and project-management tools according to each project's needs.": "El estudio utiliza distintas herramientas creativas, de producción, desarrollo y gestión de proyectos según las necesidades de cada trabajo.",
        "configuring, building, and testing applications and games for Android devices.": "Configuración, compilación y pruebas de aplicaciones y videojuegos para dispositivos Android.",
        "developing and testing robotics, electronics, and hardware-interaction prototypes.": "Desarrollo y pruebas de prototipos de robótica, electrónica e interacción con hardware.",
        "creating pixel art, sprites, spritesheets, and animated visual assets.": "Creación de pixel art, sprites, hojas de sprites y recursos visuales animados.",
        "3D modeling, sculpting, animation, texturing, UV mapping, and rigging.": "Modelado 3D, escultura, animación, texturizado, mapeado UV y rigging.",
        "technical drafting and computer-aided design workflows for precise drawings and models.": "Dibujo técnico y flujos de diseño asistido por computadora para planos y modelos precisos.",
        "support for planning, documentation, analysis, review, and development tasks.": "Asistencia en tareas de planificación, documentación, análisis, revisión y desarrollo.",
        "compositing, motion graphics, visual effects, and audiovisual post-production.": "Composición, gráficos en movimiento, efectos visuales y posproducción audiovisual.",
        "interface design, navigation flows, reusable components, and interactive prototypes for applications and games.": "Diseño de interfaces, flujos de navegación, componentes reutilizables y prototipos interactivos para aplicaciones y videojuegos.",
        "editing and post-production for videos, trailers, and other audiovisual content.": "Edición y posproducción de videos, tráileres y otros contenidos audiovisuales.",
        "capturing and annotating screenshots for documentation and issue reporting.": "Captura y anotación de pantallas para documentación e informes de incidencias.",
        "creating games inspired by the style and constraints of classic handheld platforms.": "Creación de videojuegos inspirados en el estilo y las limitaciones de las consolas portátiles clásicas.",
        "visual management of repositories, branches, commits, and synchronized changes.": "Gestión visual de repositorios, ramas, commits y cambios sincronizados.",
        "planning and tracking tasks, issues, and organized work through agile workflows.": "Planificación y seguimiento de tareas, incidencias y trabajo organizado mediante metodologías ágiles.",
        "digital illustration, painting, concept art, and 2D visual assets.": "Ilustración digital, pintura, concept art y recursos visuales 2D.",
        "recording and producing audiovisual content and gameplay sessions.": "Grabación y producción de contenido audiovisual y sesiones de juego.",
        "internal management of projects, teams, tasks, issues, priorities, calendars, and work progress.": "Gestión interna de proyectos, equipos, tareas, incidencias, prioridades, calendarios y avances del trabajo.",
        "image editing and compositing, retouching, and preparation of visual assets.": "Edición y composición de imágenes, retoque y preparación de recursos visuales.",
        "audio recording, editing, cleanup, mixing, and post-production.": "Grabación, edición, limpieza, mezcla y posproducción de audio.",
        "visual organization of tasks and workflows using boards and lists.": "Organización visual de tareas y flujos de trabajo mediante tableros y listas.",
        "creating and editing illustrations, logos, and vector graphic assets.": "Creación y edición de ilustraciones, logotipos y recursos gráficos vectoriales.",
        "developing, debugging, and maintaining applications and interactive projects.": "Desarrollo, depuración y mantenimiento de aplicaciones y proyectos interactivos.",
        "code editing and development for web and software projects.": "Edición de código y desarrollo de proyectos web y de software.",
        "Which libraries are part of the NVTS ecosystem?": "¿Qué bibliotecas forman parte del ecosistema NVTS?",
        "The following libraries and technologies are included in the ecosystem's planned technical scope. They support rendering, imaging, physics, geometry, media, and other shared capabilities.": "Las siguientes bibliotecas y tecnologías forman parte del alcance técnico previsto para el ecosistema. Proporcionan capacidades compartidas de renderizado, imágenes, física, geometría, medios y otras áreas.",
        "importing and processing 3D model assets.": "Importación y procesamiento de recursos y modelos 3D.",
        "real-time 3D rendering, scenes, materials, lighting, and browser-based interaction.": "Renderizado 3D en tiempo real, escenas, materiales, iluminación e interacción desde el navegador.",
        "2D rigid-body physics, collision detection, and simulation.": "Física de cuerpos rígidos 2D, detección de colisiones y simulación.",
        "3D physics simulation, collision detection, and rigid-body dynamics.": "Simulación de física 3D, detección de colisiones y dinámica de cuerpos rígidos.",
        "3D rigid-body physics and collision simulation.": "Física de cuerpos rígidos 3D y simulación de colisiones.",
        "high-performance 2D graphics and canvas rendering.": "Gráficos 2D de alto rendimiento y renderizado sobre canvas.",
        "audio and video decoding, encoding, conversion, and processing.": "Decodificación, codificación, conversión y procesamiento de audio y video.",
        "physically based real-time rendering.": "Renderizado en tiempo real basado en principios físicos.",
        "animation timelines and interface motion.": "Líneas de tiempo de animación y movimiento de interfaces.",
        "geometry processing using selected non-copyleft modules only; copyleft headers are excluded.": "Procesamiento geométrico utilizando únicamente módulos seleccionados que no sean copyleft; se excluyen los encabezados copyleft.",
        "high-performance image processing and conversion.": "Procesamiento y conversión de imágenes de alto rendimiento.",
        "CAD geometry, boundary representation, and modeling operations. Its LGPL terms and exception are handled with the required notices.": "Geometría CAD, representación de límites y operaciones de modelado. Sus condiciones LGPL y su excepción se gestionan con los avisos correspondientes.",
        "color management and consistent color workflows.": "Gestión del color y flujos de trabajo cromáticos consistentes.",
        "computer vision and image-processing functions; individual modules are reviewed before inclusion.": "Funciones de visión artificial y procesamiento de imágenes; cada módulo se revisa antes de su incorporación.",
        "reading, writing, and processing professional image formats.": "Lectura, escritura y procesamiento de formatos de imagen profesionales.",
        "sparse volumetric data structures and volume workflows.": "Estructuras de datos volumétricos dispersos y flujos de trabajo con volúmenes.",
        "accelerated 2D graphics rendering and browser-based visual interfaces.": "Renderizado acelerado de gráficos 2D e interfaces visuales para navegador.",
        "2D rigid-body physics and collision detection.": "Física de cuerpos rígidos 2D y detección de colisiones.",
        "3D rigid-body physics and collision detection.": "Física de cuerpos rígidos 3D y detección de colisiones.",
        "cross-platform audio playback and sound management.": "Reproducción de audio multiplataforma y gestión de sonido.",
        "modern cross-platform GPU access and graphics compute.": "Acceso moderno y multiplataforma a la GPU y cómputo gráfico.",
        "Licensing is reviewed at the component and module level. Dependencies retain their respective license notices, and components incompatible with the ecosystem's MIT distribution model are excluded. CGAL is not included because the reviewed packages of interest are GPL-3.0-or-later. For libigl, the copyleft directory is excluded; only appropriately licensed modules may be used.": "Las licencias se revisan a nivel de componente y módulo. Las dependencias conservan sus respectivos avisos de licencia y se excluyen los componentes incompatibles con el modelo de distribución MIT del ecosistema. CGAL no está incluida porque los paquetes evaluados que interesaban utilizan GPL-3.0 o posterior. En libigl se excluye el directorio copyleft; solo podrán utilizarse módulos con licencias adecuadas.",
        "Where can I find the documentation for each NVTS application?": "¿Dónde puedo encontrar la documentación de cada aplicación NVTS?",
        "Each application has its own documentation area. Manuals are organized by release version so that documentation for older versions remains available when a new version is published.": "Cada aplicación tiene su propio espacio de documentación. Los manuales se organizan por versión publicada para que la documentación de versiones anteriores siga disponible cuando se publique una nueva.",
        "Open the NVTS documentation hub ↗": "Abrir el centro de documentación NVTS ↗",
        "DIDN'T FIND YOUR ANSWER?": "¿NO ENCONTRASTE TU RESPUESTA?",
        "Let's talk.": "Hablemos.",
        "Contact the studio ↗": "Contactar al estudio ↗",

        "SOFTWARE · CREATIVITY · PRODUCTIVITY · TECHNOLOGY": "SOFTWARE · CREATIVIDAD · PRODUCTIVIDAD · TECNOLOGÍA",
        "One ecosystem.": "Un ecosistema.",
        "25 applications.": "25 aplicaciones.",
        "NVTS brings together tools for image creation, audio and video production, publication design, document and data workflows, 2D and 3D content creation, video game development, simulation, and studio project management.": "NVTS reúne herramientas para creación de imágenes, producción de audio y video, diseño editorial, documentos y datos, creación de contenido 2D y 3D, desarrollo de videojuegos, simulación y gestión de proyectos del estudio.",
        "OFFICIAL CATALOG": "CATÁLOGO OFICIAL",
        "The 25 NVTS applications": "Las 25 aplicaciones NVTS",
        "This is the official catalog of applications in the ecosystem. NVTS-PhotoMania is available; NVTS-MixerDAW through NVTS-Vectorize are in development, while the remaining applications are coming soon.": "Este es el catálogo oficial de aplicaciones del ecosistema. NVTS-PhotoMania está disponible; desde NVTS-MixerDAW hasta NVTS-Vectorize están en desarrollo, mientras que las demás aplicaciones llegarán próximamente.",
        "Cross-platform web applications": "Aplicaciones web multiplataforma",
        "Available": "Disponible",
        "In development": "En desarrollo",
        "Coming soon": "Próximamente",
        "IMAGE · DIGITAL PAINTING": "IMAGEN · PINTURA DIGITAL",
        "A raster image editor for digital illustration and compositing. It brings together painting, selection and retouching tools, layers, masks, filters, adjustments, and non-destructive styles, as well as guides, symmetry, and resources for preparing comic pages and print-ready images.": "Un editor de imágenes rasterizadas para ilustración digital y composición. Reúne herramientas de pintura, selección y retoque, capas, máscaras, filtros, ajustes y estilos no destructivos, además de guías, simetría y recursos para preparar páginas de cómic e imágenes listas para imprimir.",
        "Open application": "Abrir aplicación",
        "AUDIO · MUSIC PRODUCTION": "AUDIO · PRODUCCIÓN MUSICAL",
        "A digital audio workstation for music and sound production, with multitrack recording, audio editing, MIDI sequencing, instruments, effects, mixing, automation, and mastering for games, videos, and music projects.": "Una estación de trabajo de audio digital para producción musical y sonora, con grabación multipista, edición de audio, secuenciación MIDI, instrumentos, efectos, mezcla, automatización y masterización para videojuegos, videos y proyectos musicales.",
        "VIDEO · EDITING & POST-PRODUCTION": "VIDEO · EDICIÓN Y POSPRODUCCIÓN",
        "A nonlinear video editor for audiovisual productions, with multitrack timelines, clip editing, transitions, titles, effects, color correction, audio mixing, subtitles, and project export.": "Un editor de video no lineal para producciones audiovisuales, con líneas de tiempo multipista, edición de clips, transiciones, títulos, efectos, corrección de color, mezcla de audio, subtítulos y exportación de proyectos.",
        "MEDIA · ENCODING & EXPORT": "MEDIOS · CODIFICACIÓN Y EXPORTACIÓN",
        "A multimedia encoding and conversion tool for batch processing, export queues, format and codec selection, resolution, bitrate, quality, and output profiles for different platforms.": "Una herramienta de codificación y conversión multimedia para procesamiento por lotes, colas de exportación, selección de formatos y códecs, resolución, tasa de bits, calidad y perfiles de salida para distintas plataformas.",
        "VFX · COMPOSITING & VISUAL EFFECTS": "VFX · COMPOSICIÓN Y EFECTOS VISUALES",
        "A digital compositing environment for visual effects and motion graphics. It will combine images and footage through layers and nodes, masks, keying, tracking, rotoscoping, color correction, and effect processing.": "Un entorno de composición digital para efectos visuales y gráficos en movimiento. Permitirá combinar imágenes y metraje mediante capas y nodos, máscaras, keying, tracking, rotoscopia, corrección de color y procesamiento de efectos.",
        "DESIGN · VECTOR ILLUSTRATION": "DISEÑO · ILUSTRACIÓN VECTORIAL",
        "A vector drawing and design application for scalable illustrations, logos, icons, and graphic assets. It will include Bézier paths, shapes, nodes, typography, brushes, fills, gradients, layers, and export to vector and image formats.": "Una aplicación de dibujo vectorial y diseño para ilustraciones escalables, logotipos, íconos y recursos gráficos. Incluirá trazados Bézier, formas, nodos, tipografía, pinceles, rellenos, degradados, capas y exportación a formatos vectoriales y de imagen.",
        "PRODUCTIVITY · DOCUMENTS": "PRODUCTIVIDAD · DOCUMENTOS",
        "A word processor for writing and structuring documents, reports, and work materials, with typographic formatting, styles, tables, images, headers, numbering, templates, review tools, and export to common formats.": "Un procesador de textos para redactar y estructurar documentos, informes y materiales de trabajo, con formato tipográfico, estilos, tablas, imágenes, encabezados, numeración, plantillas, herramientas de revisión y exportación a formatos habituales.",
        "PRODUCTIVITY · SPREADSHEETS": "PRODUCTIVIDAD · HOJAS DE CÁLCULO",
        "A spreadsheet application for organizing data and performing analysis with cells, formulas, functions, references, filters, sorting, tables, charts, and calculation and tracking tools.": "Una aplicación de hojas de cálculo para organizar datos y realizar análisis mediante celdas, fórmulas, funciones, referencias, filtros, ordenamiento, tablas, gráficos y herramientas de cálculo y seguimiento.",
        "PRODUCTIVITY · PRESENTATIONS": "PRODUCTIVIDAD · PRESENTACIONES",
        "A presentation tool for creating visual slide decks with themes, templates, masters, text, charts, images, video, transitions, and animations, with presentation and export options.": "Una herramienta de presentaciones para crear diapositivas visuales con temas, plantillas, patrones, texto, gráficos, imágenes, video, transiciones y animaciones, además de opciones de presentación y exportación.",
        "ART · PIXEL ART & ANIMATION": "ARTE · PIXEL ART Y ANIMACIÓN",
        "A pixel art editor for drawing and animating sprites, characters, tiles, and environments. It will support layers and frames, a timeline, onion skinning, palettes, spritesheets, animation cycles, and game assets.": "Un editor de pixel art para dibujar y animar sprites, personajes, tiles y entornos. Admitirá capas y fotogramas, línea de tiempo, papel cebolla, paletas, hojas de sprites, ciclos de animación y recursos para videojuegos.",
        "EDITORIAL DESIGN · LAYOUT": "DISEÑO EDITORIAL · MAQUETACIÓN",
        "A comprehensive desktop publishing and editorial design suite for books, magazines, newspapers, catalogs, brochures, and multi-page publications. It will support linked text frames, grids, columns, typography, paragraph, character and object styles, master pages, sections, numbering, tables, indexes, tables of contents, notes, and links. It will also include preflight checks, bleeds, crop marks, asset packaging, and export of print-ready and digital publications, including PDF and EPUB.": "Una suite integral de maquetación y diseño editorial para libros, revistas, periódicos, catálogos, folletos y publicaciones de varias páginas. Admitirá marcos de texto vinculados, cuadrículas, columnas, tipografía, estilos de párrafo, carácter y objeto, páginas maestras, secciones, numeración, tablas, índices, tablas de contenido, notas y enlaces. También incluirá controles de preimpresión, sangrados, marcas de corte, empaquetado de recursos y exportación de publicaciones impresas y digitales, incluidos PDF y EPUB.",
        "3D · MODELING, ANIMATION & PRODUCTION": "3D · MODELADO, ANIMACIÓN Y PRODUCCIÓN",
        "A comprehensive 3D creation and production suite covering polygonal and procedural modeling, digital sculpting, retopology, procedural geometry, UV mapping, material creation and editing, texturing, 3D painting, shaders, scene assembly, cameras, lighting, rigging, animation, physics simulations, and rendering. It will also include tools to prepare, bake, review, and optimize 3D assets for games, animation, cinematics, and visualization.": "Una suite integral de creación y producción 3D que abarcará modelado poligonal y procedural, escultura digital, retopología, geometría procedural, mapeado UV, creación y edición de materiales, texturizado, pintura 3D, shaders, composición de escenas, cámaras, iluminación, rigging, animación, simulaciones físicas y renderizado. También incluirá herramientas para preparar, hornear, revisar y optimizar recursos 3D para videojuegos, animación, cinematografía y visualización.",
        "INTERFACE DESIGN · PROTOTYPING": "DISEÑO DE INTERFACES · PROTOTIPADO",
        "A user interface and digital experience design tool for creating wireframes, screens, reusable components, design systems, and interactive prototypes. It will help organize navigation flows and preview designs across screen sizes.": "Una herramienta de diseño de interfaces y experiencias digitales para crear wireframes, pantallas, componentes reutilizables, sistemas de diseño y prototipos interactivos. Permitirá organizar flujos de navegación y previsualizar diseños en distintos tamaños de pantalla.",
        "DEVELOPMENT · VIDEO GAMES & INTERACTIVE PRODUCTION": "DESARROLLO · VIDEOJUEGOS Y PRODUCCIÓN INTERACTIVA",
        "A game engine for 2D, 3D, and hybrid games and animated interactive productions. It will organize scenes, entities, assets, logic, animation, and interaction systems, with execution and rendering in the user’s browser through web graphics technologies.": "Un motor para videojuegos 2D, 3D e híbridos y producciones interactivas animadas. Organizará escenas, entidades, recursos, lógica, animación y sistemas de interacción, con ejecución y renderizado en el navegador mediante tecnologías gráficas web.",
        "SIMULATION · RESEARCH & VIDEO GAMES": "SIMULACIÓN · INVESTIGACIÓN Y VIDEOJUEGOS",
        "An engine for designing, configuring, running, and visualizing interactive simulations and dynamic systems in 2D and 3D. It will support physics, rigid bodies, collisions, particles, fluids, cloth, destruction, behaviors, and emergent phenomena. It has two complementary uses: standalone simulations for research, learning, and visualization, and real-time simulation systems integrated into games through NVTS-GameEngine.": "Un motor para diseñar, configurar, ejecutar y visualizar simulaciones interactivas y sistemas dinámicos en 2D y 3D. Admitirá física, cuerpos rígidos, colisiones, partículas, fluidos, telas, destrucción, comportamientos y fenómenos emergentes. Tendrá dos usos complementarios: simulaciones independientes para investigación, aprendizaje y visualización, y sistemas de simulación en tiempo real integrados en videojuegos mediante NVTS-GameEngine.",
        "2D ANIMATION · AUDIOVISUAL PRODUCTION": "ANIMACIÓN 2D · PRODUCCIÓN AUDIOVISUAL",
        "A 2D animation suite for shorts, series, and audiovisual productions. It will focus on frame-by-frame drawing and animation, timelines, interpolation, symbols, rigs, cut-out animation, synchronization, scenes, camera work, and compositing.": "Una suite de animación 2D para cortometrajes, series y producciones audiovisuales. Se centrará en dibujo y animación cuadro a cuadro, líneas de tiempo, interpolación, símbolos, rigs, animación cut-out, sincronización, escenas, trabajo de cámara y composición.",
        "TECHNICAL DESIGN · CAD": "DISEÑO TÉCNICO · CAD",
        "A computer-aided design tool for creating accurate technical drawings and models. It will include 2D drafting, modeling, dimensions, constraints, measurements, components, and technical documentation.": "Una herramienta de diseño asistido por computadora para crear dibujos y modelos técnicos precisos. Incluirá dibujo 2D, modelado, cotas, restricciones, mediciones, componentes y documentación técnica.",
        "MANAGEMENT · STUDIO OPERATIONS": "GESTIÓN · OPERACIONES DEL ESTUDIO",
        "An internal NamuVT Studios platform for organizing teams, projects, and tasks through Kanban boards, backlogs, issues, priorities, assignees, sprints, calendars, milestones, progress tracking, and reports.": "Una plataforma interna de NamuVT Studios para organizar equipos, proyectos y tareas mediante tableros Kanban, backlogs, incidencias, prioridades, responsables, sprints, calendarios, hitos, seguimiento del progreso e informes.",
        "DOCUMENTS · PDF MANAGEMENT": "DOCUMENTOS · GESTIÓN DE PDF",
        "A comprehensive tool for viewing, creating, editing, and organizing PDF documents. It will support merging and splitting files, rearranging pages, editing text and images, annotations, forms, signatures, permissions, OCR, and optimized exports.": "Una herramienta integral para visualizar, crear, editar y organizar documentos PDF. Admitirá unir y dividir archivos, reorganizar páginas, editar texto e imágenes, anotaciones, formularios, firmas, permisos, OCR y exportaciones optimizadas.",
        "PHOTOGRAPHY · DEVELOPMENT & MANAGEMENT": "FOTOGRAFÍA · REVELADO Y GESTIÓN",
        "A photo management and development environment for importing, cataloging, sorting, and organizing image libraries. It will include metadata, collections, tags, keywords, ratings, non-destructive editing, RAW development, lighting and color adjustments, lens correction, presets, and export.": "Un entorno de gestión y revelado fotográfico para importar, catalogar, clasificar y organizar bibliotecas de imágenes. Incluirá metadatos, colecciones, etiquetas, palabras clave, calificaciones, edición no destructiva, revelado RAW, ajustes de iluminación y color, corrección de lente, ajustes preestablecidos y exportación.",
        "DEVELOPMENT · CODING & PROGRAMMING": "DESARROLLO · CÓDIGO Y PROGRAMACIÓN",
        "A code editor and development environment for software and game projects. It will include syntax highlighting, autocomplete, code navigation, advanced search, an integrated terminal, debugging, project management, version control, extensions, and tools for multiple languages and technologies.": "Un editor de código y entorno de desarrollo para proyectos de software y videojuegos. Incluirá resaltado de sintaxis, autocompletado, navegación por el código, búsqueda avanzada, terminal integrada, depuración, gestión de proyectos, control de versiones, extensiones y herramientas para múltiples lenguajes y tecnologías.",
        "CIVIL ENGINEERING · INFRASTRUCTURE & TERRAIN": "INGENIERÍA CIVIL · INFRAESTRUCTURA Y TERRENO",
        "A civil engineering platform for designing and documenting infrastructure projects. It will include surveying, surfaces and terrain models, horizontal and vertical alignments, profiles, road corridors, grading, earthworks, pipe and drainage networks, volume calculations, cross-sections, plans, and technical documentation.": "Una plataforma de ingeniería civil para diseñar y documentar proyectos de infraestructura. Incluirá topografía, superficies y modelos de terreno, alineamientos horizontales y verticales, perfiles, corredores viales, nivelación, movimiento de suelos, redes de tuberías y drenaje, cálculo de volúmenes, secciones transversales, planos y documentación técnica.",
        "ARCHITECTURE · BUILDING INFORMATION MODELING": "ARQUITECTURA · MODELADO DE INFORMACIÓN DE CONSTRUCCIÓN",
        "A building information modeling and management environment for coordinated projects throughout their lifecycle. It will support parametric building, structural, and MEP models; levels, families, and components; drawings, sections, elevations, quantity schedules, documentation, revisions, and interdisciplinary coordination.": "Un entorno de modelado y gestión de información de construcción para coordinar proyectos durante todo su ciclo de vida. Admitirá modelos paramétricos arquitectónicos, estructurales y MEP; niveles, familias y componentes; planos, secciones, elevaciones, cómputos de cantidades, documentación, revisiones y coordinación interdisciplinaria.",
        "PROTOTYPING · ENGINEERING TOOLS": "PROTOTIPADO · HERRAMIENTAS DE INGENIERÍA",
        "An environment for creating, testing, and validating functional prototypes for the ecosystem’s technical design and engineering applications. It will support experimentation with components, tools, interfaces, workflows, parameters, and modeling systems, as well as proof-of-concept testing and early feature validation.": "Un entorno para crear, probar y validar prototipos funcionales destinados a las aplicaciones de diseño técnico e ingeniería del ecosistema. Permitirá experimentar con componentes, herramientas, interfaces, flujos de trabajo, parámetros y sistemas de modelado, además de probar pruebas de concepto y validar funcionalidades en etapas tempranas.",
        "INDUSTRIAL DESIGN · AUTOMOTIVE & MECHANICAL": "DISEÑO INDUSTRIAL · AUTOMOTRIZ Y MECÁNICO",
        "A design and development system for automotive, industrial, and mechanical parts and products. It will focus on solid and surface modeling, parametric design, parts and assemblies, complex geometry, tolerances, manufacturing drawings, technical documentation, and model preparation for prototyping and production.": "Un sistema de diseño y desarrollo de piezas y productos automotrices, industriales y mecánicos. Se centrará en modelado sólido y de superficies, diseño paramétrico, piezas y ensamblajes, geometría compleja, tolerancias, planos de fabricación, documentación técnica y preparación de modelos para prototipado y producción.",
        "DESKTOP APPLICATION": "APLICACIÓN DE ESCRITORIO",
        "The access hub for the ecosystem. It will complement the 25 web applications with an installable hub for discovering, installing, updating, and opening NamuVT Studios software. It will be distributed through the official website for Windows, Linux, and macOS.": "El centro de acceso al ecosistema. Complementará las 25 aplicaciones web con un entorno instalable para descubrir, instalar, actualizar y abrir el software de NamuVT Studios. Se distribuirá desde el sitio web oficial para Windows, Linux y macOS.",
        "ACCESSIBILITY": "ACCESIBILIDAD",
        "Web applications. Cross-platform access.": "Aplicaciones web. Acceso multiplataforma.",
        "The ecosystem applications are designed to run in a browser on desktop computers and mobile devices. NVTS-Launcher will be the downloadable desktop companion; it does not replace browser access to the applications.": "Las aplicaciones del ecosistema están diseñadas para ejecutarse en un navegador en computadoras de escritorio y dispositivos móviles. NVTS-Launcher será el complemento descargable para escritorio; no reemplaza el acceso a las aplicaciones desde el navegador.",
        "PC": "PC",
        "Mobile devices": "Dispositivos móviles",
        "Web browser": "Navegador web",
        "Launcher for Windows / Linux / macOS": "Launcher para Windows / Linux / macOS",
        "ADDITIONAL TOOLS": "HERRAMIENTAS ADICIONALES",
        "Other NamuVT Studios projects": "Otros proyectos de NamuVT Studios",
        "Alongside the official NVTS ecosystem applications, we maintain independent tools that complement our workflows.": "Además de las aplicaciones oficiales del ecosistema NVTS, mantenemos herramientas independientes que complementan nuestros flujos de trabajo.",
        "PROCEDURAL GENERATION": "GENERACIÓN PROCEDURAL",
        "A tool for exploring, generating, and building destructible procedural fields, maps, and terrain.": "Una herramienta para explorar, generar y construir campos, mapas y terrenos procedurales destructibles.",
        "Open application ↗": "Abrir aplicación ↗",

        "OFFICIAL STORE": "TIENDA OFICIAL",
        "Objects from the": "Objetos del",
        "NVTS universe.": "universo NVTS.",
        "A place for products, content, and items related to our video games and projects.": "Un espacio para productos, contenido y artículos relacionados con nuestros videojuegos y proyectos.",
        "STORE COMING SOON": "TIENDA PRÓXIMAMENTE",
        "We are preparing the catalog.": "Estamos preparando el catálogo.",
        "The store does not have any products available yet. Check back soon for updates.": "La tienda todavía no tiene productos disponibles. Volvé pronto para enterarte de las novedades.",
        "In the meantime, explore our games": "Mientras tanto, explorá nuestros videojuegos",

        "VIDEO GAMES · WORLDS · STORIES": "VIDEOJUEGOS · MUNDOS · HISTORIAS",
        "Games to": "Juegos para",
        "discover.": "descubrir.",
        "Interactive projects at different stages of development. Explore our prototypes, demos, and releases.": "Proyectos interactivos en distintas etapas de desarrollo. Explorá nuestros prototipos, demos y lanzamientos.",
        "PROTOTYPES & PROJECTS": "PROTOTIPOS Y PROYECTOS",
        "In development and experimentation": "En desarrollo y experimentación",
        "PROTOTYPE": "PROTOTIPO",
        "Explore the project and follow its progress on itch.io.": "Explorá el proyecto y seguí su desarrollo en itch.io.",
        "View project ↗": "Ver proyecto ↗",
        "PROJECT": "PROYECTO",
        "Visit the project page on itch.io.": "Visitá la página del proyecto en itch.io.",
        "UPCOMING RELEASES": "PRÓXIMOS LANZAMIENTOS",
        "More adventures are on the way.": "Más aventuras están en camino.",
        "This section will be updated with new demos and official releases as they become available.": "Esta sección se actualizará con nuevas demos y lanzamientos oficiales a medida que estén disponibles.",

        "INDEPENDENT STUDIO · ARGENTINA": "ESTUDIO INDEPENDIENTE · ARGENTINA",
        "Ideas that become": "Ideas que se convierten en",
        "experiences.": "experiencias.",
        "We develop video games and creative tools that combine technology, design, and a distinctive vision.": "Desarrollamos videojuegos y herramientas creativas que combinan tecnología, diseño y una visión propia.",
        "Explore the ecosystem": "Explorar el ecosistema",
        "Our video games": "Nuestros videojuegos",
        "Software development": "Desarrollo de software",
        "Creative technology": "Tecnología creativa",
        "CREATIVE TECHNOLOGY": "TECNOLOGÍA CREATIVA",
        "BUILT WITH PURPOSE · NVTS": "CREADO CON PROPÓSITO · NVTS",
        "WHO WE ARE": "QUIÉNES SOMOS",
        "An independent studio passionate about": "Un estudio independiente apasionado por",
        "creating.": "crear.",
        "NamuVT Studios is an independent video game and software development studio. We bring together programming, art, design, and technology to turn ideas into interactive projects and useful tools.": "NamuVT Studios es un estudio independiente de desarrollo de videojuegos y software. Reunimos programación, arte, diseño y tecnología para transformar ideas en proyectos interactivos y herramientas útiles.",
        "Meet the team": "Conocé al equipo",
        "WHAT WE DO": "QUÉ HACEMOS",
        "Creativity across dimensions.": "Creatividad en todas sus dimensiones.",
        "We build experiences for playing, creating, and exploring new possibilities.": "Creamos experiencias para jugar, crear y explorar nuevas posibilidades.",
        "01 / SOFTWARE": "01 / SOFTWARE",
        "Creative tools": "Herramientas creativas",
        "Web applications for illustration, production, design, and digital creation.": "Aplicaciones web para ilustración, producción, diseño y creación digital.",
        "02 / GAMES": "02 / VIDEOJUEGOS",
        "Worlds, characters, and stories that invite discovery and experimentation.": "Mundos, personajes e historias que invitan a descubrir y experimentar.",
        "03 / PLATFORM": "03 / PLATAFORMA",
        "A connected suite of web applications and a desktop launcher.": "Una suite conectada de aplicaciones web y un launcher de escritorio.",
        "A WORLD OF TOOLS": "UN MUNDO DE HERRAMIENTAS",
        "Discover the": "Descubrí el",
        "NVTS ecosystem.": "ecosistema NVTS.",
        "The ecosystem brings together 25 web applications for desktop and mobile devices, alongside NVTS-Launcher, the downloadable desktop application.": "El ecosistema reúne 25 aplicaciones web para computadoras y dispositivos móviles, junto con NVTS-Launcher, la aplicación de escritorio descargable.",
        "Discover NVTS": "Descubrir NVTS",
        "WEB APPS": "APLICACIONES WEB",
        "DESKTOP LAUNCHER": "LAUNCHER DE ESCRITORIO",
        "CONNECT WITH THE STUDIO": "CONECTATE CON EL ESTUDIO",
        "Stay connected.": "Sigamos en contacto.",
        "We share progress, projects, news, and insights into our creative process.": "Compartimos avances, proyectos, noticias y miradas sobre nuestro proceso creativo.",

        "Independent studio developing video games and creative tools.": "Estudio independiente dedicado al desarrollo de videojuegos y herramientas creativas.",
        "Explore": "Explorar",
        "NVTS Ecosystem": "Ecosistema NVTS",
        "Our team": "Nuestro equipo",
        "Follow us": "Seguinos",
        "NamuVT Studios. All rights reserved.": "NamuVT Studios. Todos los derechos reservados.",
        "Made with creativity and engineering.": "Hecho con creatividad e ingeniería.",

        "01 / 25": "01 / 25",
        "02 / 25": "02 / 25",
        "03 / 25": "03 / 25",
        "04 / 25": "04 / 25",
        "05 / 25": "05 / 25",
        "06 / 25": "06 / 25",
        "07 / 25": "07 / 25",
        "08 / 25": "08 / 25",
        "09 / 25": "09 / 25",
        "10 / 25": "10 / 25",
        "11 / 25": "11 / 25",
        "12 / 25": "12 / 25",
        "13 / 25": "13 / 25",
        "14 / 25": "14 / 25",
        "15 / 25": "15 / 25",
        "16 / 25": "16 / 25",
        "17 / 25": "17 / 25",
        "18 / 25": "18 / 25",
        "19 / 25": "19 / 25",
        "20 / 25": "20 / 25",
        "21 / 25": "21 / 25",
        "22 / 25": "22 / 25",
        "23 / 25": "23 / 25",
        "24 / 25": "24 / 25",
        "25 / 25": "25 / 25"
    };

    const spanishAttributes = {
        "Your name": "Tu nombre",
        "Contact NamuVT Studios with questions, job inquiries, or store order support.": "Contactá a NamuVT Studios para consultas, oportunidades laborales o ayuda con pedidos de la tienda.",
        "Versioned documentation for the 25 applications in the NamuVT Studios NVTS ecosystem.": "Documentación por versiones de las 25 aplicaciones del ecosistema NVTS de NamuVT Studios.",
        "Video games and interactive projects developed by NamuVT Studios.": "Videojuegos y proyectos interactivos desarrollados por NamuVT Studios.",
        "The official NamuVT Studios store. Products and items from our projects are coming soon.": "La tienda oficial de NamuVT Studios. Próximamente habrá productos y artículos de nuestros proyectos.",
        "Explore the 25 applications in the NamuVT Studios ecosystem.": "Explorá las 25 aplicaciones del ecosistema de NamuVT Studios.",
        "NamuVT Studios is an independent Argentine studio developing video games and creative tools.": "NamuVT Studios es un estudio argentino independiente que desarrolla videojuegos y herramientas creativas.",
        "Meet the multidisciplinary team behind NamuVT Studios.": "Conocé al equipo multidisciplinario detrás de NamuVT Studios.",
        "Frequently asked questions about NamuVT Studios, its software, and the technologies used across the NVTS ecosystem.": "Preguntas frecuentes sobre NamuVT Studios, su software y las tecnologías utilizadas en el ecosistema NVTS.",
        "Method not allowed.": "Método no permitido.",
        "Request not allowed.": "Solicitud no permitida.",
        "The form contains invalid data.": "El formulario contiene datos no válidos.",
        "Message received.": "Mensaje recibido.",
        "We recently received a submission. Please wait a few seconds before trying again.": "Recibimos un envío recientemente. Esperá unos segundos antes de volver a intentarlo.",
        "The email service is not configured. Check GMAIL_USER and GMAIL_APP_PASSWORD in your Vercel environment variables, then redeploy.": "El servicio de correo no está configurado. Revisá las variables de entorno GMAIL_USER y GMAIL_APP_PASSWORD en Vercel y volvé a implementar el sitio.",
        "Your message was sent successfully. Thank you for contacting NamuVT Studios.": "Tu mensaje se envió correctamente. Gracias por contactar a NamuVT Studios.",
        "We could not send your message right now. Please try again later.": "No pudimos enviar tu mensaje en este momento. Volvé a intentarlo más tarde.",
        "Your message could not be sent.": "No se pudo enviar tu mensaje.",
        "Your message could not be sent. Please try again.": "No se pudo enviar tu mensaje. Volvé a intentarlo.",
        "Sending your message…": "Enviando tu mensaje…",
        "Sending…": "Enviando…",
        "Please enter your name, email address, and message.": "Ingresá tu nombre, dirección de correo electrónico y mensaje.",
        "Please select one of the available contact reasons.": "Seleccioná uno de los motivos de contacto disponibles.",
        "Please enter a valid email address.": "Ingresá una dirección de correo electrónico válida.",
        "The message must contain at least 10 characters.": "El mensaje debe contener al menos 10 caracteres.",
        "The portfolio link is only available for job inquiries.": "El enlace al portfolio solo está disponible para consultas laborales.",
        "The order number is only available for store inquiries.": "El número de pedido solo está disponible para consultas sobre la tienda.",
        "The portfolio or resume link must be a valid URL.": "El enlace al portfolio o currículum debe ser una URL válida.",
        "We could not validate your submission. Refresh the page and try again.": "No pudimos validar tu envío. Actualizá la página e intentá nuevamente.",
        "name@email.com": "nombre@correo.com",
        "https://...": "https://...",
        "For example: NVTS-10025": "Por ejemplo: NVTS-10025",
        "Tell us how we can help...": "Contanos cómo podemos ayudarte...",
        "Open menu": "Abrir menú",
        "Main navigation": "Navegación principal",
        "NamuVT Studios, home": "NamuVT Studios, inicio"
    };

    const english = Object.fromEntries(
        Object.entries(spanish).map(([source, translated]) => [translated, source])
    );
    const englishAttributes = Object.fromEntries(
        Object.entries(spanishAttributes).map(([source, translated]) => [translated, source])
    );

    function detectLanguage() {
        const requested = new URLSearchParams(window.location.search).get("lang");
        if (requested === "es" || requested === "en") {
            saveLanguage(requested);
            return requested;
        }

        const saved = readSavedLanguage();
        if (saved) {
            return saved;
        }

        return (navigator.language || "en").toLowerCase().startsWith("es") ? "es" : "en";
    }

    function readSavedLanguage() {
        try {
            const saved = window.localStorage.getItem("nvts-language");
            return saved === "es" || saved === "en" ? saved : null;
        } catch (error) {
            return null;
        }
    }

    function saveLanguage(language) {
        try {
            window.localStorage.setItem("nvts-language", language);
        } catch (error) {
            // The language switch still works for the current page if storage is unavailable.
        }
    }

    function translateTextNodes(root, dictionary) {
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        const nodes = [];
        let node = walker.nextNode();

        while (node) {
            nodes.push(node);
            node = walker.nextNode();
        }

        nodes.forEach((textNode) => {
            const parent = textNode.parentElement;
            if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) {
                return;
            }

            const original = textNode.nodeValue;
            const trimmed = original.trim();
            const replacement = dictionary[trimmed];

            if (!replacement) {
                return;
            }

            const leading = original.match(/^\s*/)?.[0] || "";
            const trailing = original.match(/\s*$/)?.[0] || "";
            textNode.nodeValue = `${leading}${replacement}${trailing}`;
        });
    }

    function translateAttributes(dictionary) {
        const attributes = ["placeholder", "aria-label", "title", "alt"];
        document.querySelectorAll("*").forEach((element) => {
            attributes.forEach((attribute) => {
                if (!element.hasAttribute(attribute)) {
                    return;
                }

                const current = element.getAttribute(attribute);
                const replacement = dictionary[current];
                if (replacement) {
                    element.setAttribute(attribute, replacement);
                }
            });
        });

        document.querySelectorAll('meta[name="description"], meta[property="og:title"], meta[property="og:description"]').forEach((meta) => {
            const current = meta.getAttribute("content");
            const replacement = dictionary[current];
            if (replacement) {
                meta.setAttribute("content", replacement);
            }
        });
    }

    function updateLanguageButton(language) {
        const button = document.querySelector("[data-language-toggle]");
        if (!button) {
            return;
        }

        const nextLanguage = language === "es" ? "en" : "es";
        button.textContent = nextLanguage.toUpperCase();
        const label = language === "es"
            ? "Cambiar el idioma a inglés"
            : "Switch language to Spanish";
        button.setAttribute("aria-label", label);
        button.setAttribute("title", label);
    }

    function applyLanguage(language) {
        const dictionary = language === "es" ? spanish : english;
        const attributeDictionary = language === "es" ? spanishAttributes : englishAttributes;

        translateTextNodes(document.body, dictionary);
        document.title = dictionary[document.title] || document.title;
        translateAttributes({ ...dictionary, ...attributeDictionary });
        document.documentElement.lang = language;
        updateLanguageButton(language);
        document.documentElement.dataset.language = language;
    }

    function setLanguage(language) {
        const normalized = language === "es" ? "es" : "en";
        currentLanguage = normalized;
        saveLanguage(normalized);
        applyLanguage(normalized);
        document.dispatchEvent(new CustomEvent("nvts:language-changed", {
            detail: { language: normalized }
        }));
    }

    let currentLanguage = detectLanguage();

    document.addEventListener("click", (event) => {
        const button = event.target.closest("[data-language-toggle]");
        if (!button) {
            return;
        }

        setLanguage(currentLanguage === "es" ? "en" : "es");
    });

    window.NVTSI18n = {
        apply() {
            applyLanguage(currentLanguage);
        },
        getLanguage() {
            return currentLanguage;
        },
        setLanguage(language) {
            currentLanguage = language === "es" ? "es" : "en";
            setLanguage(currentLanguage);
        },
        translate(message) {
            if (currentLanguage !== "es") {
                return message;
            }
            return spanish[message] || message;
        }
    };
})();
