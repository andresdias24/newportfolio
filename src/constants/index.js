import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "About",
        title: "Sobre mi",
    },
    {
        id: "Work",
        title: "Trabajos",
    },
    {
        id: "Contact",
        title: "Contacto",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "junior mobile Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "entisiasta de la tecnologia",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },

    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiencias = [
    {
        titulo: "Desarrollador Node.js",
        nombre_empresa: "Miora",
        icono: starbucks,
        iconoFondo: "#383E56",
        fecha: "Marzo 2020 - Abril 2021",
        puntos: [
            "Desarrollar y mantener aplicaciones del lado del servidor utilizando Node.js y otras tecnologías relacionadas.",
            "Colaborar con equipos multifuncionales, incluidos diseñadores, gerentes de producto y otros desarrolladores para crear productos de alta calidad.",
            "Implementar APIs RESTful y asegurar la integración con servicios de terceros.",
            "Participar en revisiones de código y proporcionar retroalimentación constructiva a otros desarrolladores.",
        ],
    },
    {
        titulo: "Desarrollador Full-Stack",
        nombre_empresa: "Fundación U.Distrital",
        icono: tesla,
        iconoFondo: "#E6DEDD",
        fecha: "Enero 2021 - Febrero 2022",
        puntos: [
            "Desarrollar y mantener aplicaciones web utilizando Node.js y React.js.",
            "Colaborar con equipos multifuncionales, incluidos diseñadores, gerentes de producto y otros desarrolladores para crear productos de alta calidad.",
            "Implementar diseño responsivo y asegurar la compatibilidad entre navegadores.",
            "Participar en revisiones de código y proporcionar retroalimentación constructiva a otros desarrolladores.",
        ],
    },
    {
        titulo: "Ingeniero de Nube",
        nombre_empresa: "Tita Media",
        icono: shopify,
        iconoFondo: "#383E56",
        fecha: "Enero 2022 - Enero 2023",
        puntos: [
            "Desarrollar y mantener infraestructuras en la nube utilizando Google Cloud Platform (GCP).",
            "Colaborar con equipos multifuncionales para diseñar y desplegar soluciones escalables y seguras.",
            "Implementar y gestionar servicios de GCP como Compute Engine, Cloud Storage y BigQuery.",
            "Participar en revisiones de arquitectura y proporcionar retroalimentación constructiva.",
        ],
    },
    {
        titulo: "Desarrollador Backend",
        nombre_empresa: "Bewe",
        icono: meta,
        iconoFondo: "#E6DEDD",
        fecha: "Enero 2023 - Presente",
        puntos: [
            "Desarrollar y mantener aplicaciones del lado del servidor utilizando Node.js y otras tecnologías relacionadas.",
            "Colaborar con equipos multifuncionales, incluidos diseñadores, gerentes de producto y otros desarrolladores para crear productos de alta calidad.",
            "Implementar APIs RESTful y asegurar la integración con servicios de terceros.",
            "Participar en revisiones de código y proporcionar retroalimentación constructiva a otros desarrolladores.",
        ],
    },
];

const testimonials = [
//     {
//         testimonial:
//             "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//         name: "Sara Lee",
//         designation: "CFO",
//         company: "Acme Co",
//         image: "https://randomuser.me/api/portraits/women/4.jpg",
//     },
//     {
//         testimonial:
//             "I've never met a web developer who truly cares about their clients' success like Rick does.",
//         name: "Chris Brown",
//         designation: "COO",
//         company: "DEF Corp",
//         image: "https://randomuser.me/api/portraits/men/5.jpg",
//     },
//     {
//         testimonial:
//             "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//         name: "Lisa Wang",
//         designation: "CTO",
//         company: "456 Enterprises",
//         image: "https://randomuser.me/api/portraits/women/6.jpg",
//     },
];

const projects = [
    {
        name: "Comercio Electrónico",
        description:
            "Plataforma web que permite a los usuarios buscar, reservar y gestionar alquileres de coches de varios proveedores, proporcionando una solución conveniente y eficiente para las necesidades de transporte.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "API REST",
        description:
            "Aplicación web que permite a los usuarios buscar ofertas de trabajo, ver rangos salariales estimados para puestos y localizar trabajos disponibles según su ubicación actual.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Guía de Viajes",
        description:
            "Una plataforma integral de reservas de viajes que permite a los usuarios reservar vuelos, hoteles y coches de alquiler, y ofrece recomendaciones seleccionadas para destinos populares.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };