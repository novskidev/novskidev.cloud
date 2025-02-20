import Link from "next/link";
import Image from "next/image";
import profilPic from "../../public/images/5-29-removebg-preview.png"

export default function AboutPage() {
    return (
        <section className="w-8/12">
            <article className="mt-7 flex-wrap w-full items-center">
                <h1 className="font-bold font-pally text-xl">Welcome to My Website!</h1>
                <p className="my-4">Hi, I'm <span className="font-bold text-[text-align:justify]">Novian Nadari</span>—a passionate Software Engineer & Educator based in Yogyakarta, Indonesia 🇮🇩. I am currently deepening my knowledge in programming while working as a freelance software engineer. Besides coding, I dedicate my time to teaching at an elementary school, sharing knowledge, and inspiring young minds.

With a strong interest in technology and education, I love building software solutions that make an impact. I also enjoy contributing to the open-source community and continuously learning new things to grow as a developer.</p>
            <div className="my-4 flex w-full justify-between items-center">
            <Image src={profilPic} alt="Profile Picture" width={200} height={100} className="hidden sm:block -mt-[70px]  object-cover rounded-full" />
             <p className="w-full md:w-1/2">Glad to have you here! 🎉 On this website, I share various <Link href={`/articles`} className="font-semibold underline">Articles</Link>   related to technology, programming, and my personal experiences. You can also explore some of my open-source <Link href={`/projects`} className="font-semibold underline">Projects</Link> and see what I’ve been working on.

Feel free to connect, explore, and let’s build something great together! 🚀</p>
           
            </div>
            <h1 className="font-bold font-pally text-xl mt-9">📩 Get in Touch!</h1>
            <p className="mt-4">Send me an email <span><Link href="mailto:novskidev@gmail.com" className="font-semibold underline">novskidev@gmail.com</Link></span> to say hi, or connect via the socials.</p>
            </article>
        </section>
    );
  }