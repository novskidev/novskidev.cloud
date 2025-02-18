
type menuNav = {
    id: number,
    title: string,
    path: string
}

type project = [
    {   
        id: number,
        title: string,
        path: string
        description: string
        image: string
        link: string
    }
]


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


export const project: project = [
    {
        id: 1,
        title: "Novskidev",
        path: "https://novskidev.vercel.app",
        description: "Novian Developer Portofolio",
        image: "/novskidev.png",
        link: "https://github.com/novskidev/novskidev",
    },
];