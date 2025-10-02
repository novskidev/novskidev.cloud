type menuNav = {
    id: number,
    title: string,
    path: string
}

export type projectType = {
    key: number;
    title: string;
    description: string;
    imageSrc: string;
    link: string;
}[];

export type articleType = {
    key: number;
    title: string;
    date: string;
    description: string;
    link: string;
}[];



export const menu: menuNav[] = [
    {
        id: 1,
        title: "Projects",
        path: "/projects",
    },
    {
        id: 2,
        title: "Articles",
        path: "/articles",
    },
    {
        id: 3,
        title: "About",
        path: "/about",
    },
    {
        id: 4,
        title: "Product",
        path: "/product",
    },
];


export const Project: projectType = [
   {
        key: 1,
        title: "Lindung Rent",
        description: "Motorcycle Rent WebApps",
        imageSrc: "/images/lindung_motor.png",
        link: "https://lindung.id",
    }, 
    {
        key: 2,
        title: "MaxFoto",
        description: "Ai Photo Editor with Gemini AI",
        imageSrc: "/images/maxfoto.png",
        link: "https://foto.maxgpt.id",
    },
    {
        key: 3,
        title: "Mending Mana Web Apps",
        description: "A web application for make a better decision in choosing product for your with Gemini AI and Svelte",
        imageSrc: "/images/mendingmana.png",
        link: "https://github.com/novskidev/mendingmana.id",
    },
    {
        key: 4,
        title: "MaxPredict",
        description: "a web application for make a A/B Testing for your Threads post powered by 1000 user simulation test with Open AI",
        imageSrc: "/images/MaxPredict.png",
        link: "https://predict.maxgpt.id",
    },
    {
        key: 5,
        title: "TemanGuru",
        description: "A web application to help a teacher make a better quiz with the power of Gemini AI",
        imageSrc: "/images/temanguru.png",
        link: "https://temanguru.web.id",
    },

    {
        key: 6,
        title: "Novskidev",
        description: "Novian Developer Portfolio",
        imageSrc: "/images/portofolio.png",
        link: "https://github.com/novskidev/novskidev",
    },
    {
        key: 7,
        title: "VanLife App",
        description: "Renting Travel Vans Application created with React.Js, TailwindCSS, and React Route V6",
        imageSrc: "/images/vanapp.png",
        link: "https://github.com/novskidev/VanlifeApp",
    },
    {
        key: 8,
        title: "Weather App",
        description: "A weather forecast web app built with Next.js and TailwindCSS.",
        imageSrc: "/images/weatherapp.png",
        link: "https://github.com/novskidev/simple-weather-app",
    },
    {
        key: 9,
        title: "Quizzical App",
        description: "Education Media for Student created using React.js and Tailwind.css",
        imageSrc: "/images/quizzicalapp.png",
        link: "https://github.com/novskidev/Quizzical-App",
    },
    {
        key: 10,
        title: "Nike Landing Page",
        description: "A landing page for Nike website.",
        imageSrc: "/images/nikelanding.png",
        link: "https://github.com/novskidev/nike-landingpage",
    },
    {
        key: 11,
        title: "MaxGPT Landing Page",
        description: "A landing page for MaxGPT website created with Astro.js and TailwindCSS.",
        imageSrc: "/images/maxgpt.png",
        link: "https://github.com/novskidev/maxgpt.id",
    },
    {
        key: 12,
        title: "Tenzies game",
        description: "A game powered by react.js.",
        imageSrc: "/images/tenziez.png",
        link: "https://github.com/novskidev/TenziesGame",
    },
];


export const article: articleType = [
    {
        key: 1,
        title: "Complete Guide to Learning Next.js for Beginners",
        date: "2025-02-19",
        description: "A comprehensive guide on how to get started with Next.js and build modern web applications.",
        link: "#"
    },
    {
        key: 2,
        title: "Introduction to TypeScript: Benefits and How to Use It",
        date: "2024-11-18",
        description: "Learn the advantages of using TypeScript and how to implement it in your projects.",
        link: "#"
    },
    {
        key: 3,
        title: "How to Become a Fullstack Developer in 6 Months?",
        date: "2024-10-10",
        description: "A roadmap to help you transition into a fullstack developer within six months.",
        link: "#"
    },
    {
        key: 4,
        title: "Understanding React Hooks: A Beginner's Guide",
        date: "2024-09-22",
        description: "A simple explanation of React Hooks and how to use them effectively.",
        link: "#"
    },
    {
        key: 5,
        title: "Best Practices for Writing Clean and Maintainable Code",
        date: "2024-08-15",
        description: "Learn how to write clean and maintainable code to improve collaboration and scalability.",
        link: "#"
    },
    {
        key: 6,
        title: "Getting Started with Tailwind CSS for Modern UI Design",
        date: "2024-07-30",
        description: "A step-by-step guide on using Tailwind CSS to create beautiful user interfaces.",
        link: "#"
    },
    {
        key: 7,
        title: "Why You Should Learn Python for Data Science?",
        date: "2024-06-12",
        description: "An overview of Python’s importance in data science and how to get started.",
        link: "#"
    },
    {
        key: 8,
        title: "Mastering Git and GitHub: Essential Commands for Developers",
        date: "2024-05-25",
        description: "A detailed guide to Git and GitHub commands every developer should know.",
        link: "#"
    },
    {
        key: 9,
        title: "Understanding API Development with Node.js and Express",
        date: "2024-04-10",
        description: "Learn how to build and deploy RESTful APIs using Node.js and Express.",
        link: "#"
    },
    {
        key: 10,
        title: "How to Deploy Web Applications for Free in 2025",
        date: "2024-03-18",
        description: "A list of the best free hosting platforms for deploying web applications in 2025.",
        link: "#"
    }
];
