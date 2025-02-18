
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



export const menu: menuNav[] = [
    {
        id: 1,
        title: "Project",
        path: "/project",
    },
    {
        id: 2,
        title: "Article",
        path: "/about",
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
];
