
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
];


export const Project: projectType = [
    {
        key: 1,
        title: "Novskidev",
        description: "Novian Developer Portfolio",
        imageSrc: "/images/portofolio.png",
        link: "https://github.com/novskidev/novskidev",
    },
    {
        key: 2,
        title: "VanLife App",
        description: "Renting Travel Vans Application created with React.Js, TailwindCSS, and React Route V6",
        imageSrc: "/images/vanapp.png",
        link: "https://github.com/novskidev/VanlifeApp",
    },
    {
        key: 3,
        title: "Weather App",
        description: "A weather forecast web app built with Next.js and TailwindCSS.",
        imageSrc: "/images/weatherapp.png",
        link: "https://github.com/novskidev/simple-weather-app",
    },
    {
        key: 4,
        title: "Quizzical App",
        description: "Education Media for Student created using React.js and Tailwind.css",
        imageSrc: "/images/quizzicalapp.png",
        link: "https://github.com/novskidev/Quizzical-App",
    },
    {
        key: 5,
        title: "Nike Landing Page",
        description: "A landing page for Nike website.",
        imageSrc: "/images/nikelanding.png",
        link: "https://github.com/novskidev/nike-landingpage",
    },
    {
        key: 6,
        title: "Tenzies game",
        description: "A game powered by react.js.",
        imageSrc: "/images/tenziez.png",
        link: "https://github.com/novskidev/TenziesGame",
    },
    {
        key: 7,
        title: "Mendingmana Apps",
        description: "Choice-making app using Ai to help people make decisions",
        imageSrc: "/images/blogs/Mending-mana.png",
        link: "https://github.com/novskidev/Mendingmana-Apps",
    }, 
    {
        key: 8,
        title: "MaxGPT landing page",
        description: "A landing page for MaxGPT",
        imageSrc: "/images/max-gpt.png",
        link: "https://github.com/novskidev/maxgpt.id",
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
