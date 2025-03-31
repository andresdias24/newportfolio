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
    // {
    //     name: "Redux Toolkit",
    //     icon: redux,
    // },

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

const experiences = [
    {
        title: "Analista Técnico",
        company_name: "Miora",
        icon: "⚙️", // Icono genérico para trabajos técnicos
        iconBg: "#383E56",
        date: "Marzo 2020 - Abril 2021",
        points: [
            "Desarrollar y mantener aplicaciones web utilizando React.js y otras tecnologías relacionadas.",
            "Colaborar con equipos multifuncionales, incluidos diseñadores, gerentes de producto y otros desarrolladores, para crear productos de alta calidad.",
            "Implementar diseño responsivo y asegurar la compatibilidad entre navegadores.",
            "Participar en revisiones de código y proporcionar retroalimentación constructiva a otros desarrolladores.",
        ],
    },
    {
        title: "Desarrollador Front-End",
        company_name: "Fundación U.Distrital",
        icon: "💻", // Icono genérico para desarrollo de software
        iconBg: "#E6DEDD",
        date: "Enero 2021 - Febrero 2022",
        points: [
            "Desarrollar y mantener aplicaciones web utilizando React.js y otras tecnologías relacionadas.",
            "Colaborar con equipos multifuncionales, incluidos diseñadores, gerentes de producto y otros desarrolladores, para crear productos de alta calidad.",
            "Implementar diseño responsivo y asegurar la compatibilidad entre navegadores.",
            "Participar en revisiones de código y proporcionar retroalimentación constructiva a otros desarrolladores.",
        ],
    },
    {
        title: "Desarrollador Front-End",
        company_name: "Tita Media",
        icon: "🌐", // Icono genérico para desarrollo web
        iconBg: "#383E56",
        date: "Enero 2022 - Enero 2023",
        points: [
            "Desarrollar y mantener aplicaciones web utilizando React.js y otras tecnologías relacionadas.",
            "Colaborar con equipos multifuncionales, incluidos diseñadores, gerentes de producto y otros desarrolladores, para crear productos de alta calidad.",
            "Implementar diseño responsivo y asegurar la compatibilidad entre navegadores.",
            "Participar en revisiones de código y proporcionar retroalimentación constructiva a otros desarrolladores.",
        ],
    },
    {
        title: "Desarrollador Back-End",
        company_name: "Bewe",
        icon: "🔧", // Icono genérico para desarrollo back-end
        iconBg: "#E6DEDD",
        date: "Enero 2023 - Presente",
        points: [
            "Desarrollar y mantener aplicaciones web utilizando React.js y otras tecnologías relacionadas.",
            "Colaborar con equipos multifuncionales, incluidos diseñadores, gerentes de producto y otros desarrolladores, para crear productos de alta calidad.",
            "Implementar diseño responsivo y asegurar la compatibilidad entre navegadores.",
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
        name: "E-commerce",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "node",
                color: "green-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://www.warehauseonline.store/categorys",
    },
    {
        name: "REST_API",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "mongo",
                color: "blue-text-gradient",
            },
            {
                name: "node",
                color: "green-text-gradient",
            },
            {
                name: "express",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://documenter.getpostman.com/view/16622675/2s83YWkje3",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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