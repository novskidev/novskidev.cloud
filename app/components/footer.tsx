import { Github, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';


function Footer() {
    return (  
        <footer className="bg-white w-full h-fit flex flex-col items-center justify-center py-2 dark:bg-black">
           <div>
           <section className='flex justify-between py-3'>
            <Link href={'https://www.instagram.com/novskidev/'}>
            <Instagram className='text-xs sm:text-sm md:text-base dark:text-[#E4E4E4]'/>
            </Link>
            <Link href={'https://github.com/novskidev'}>
            <Github className='text-xs sm:text-sm md:text-base dark:text-[#E4E4E4]'/>
            </Link>
            <Link href={'https://www.linkedin.com/in/noviann/'}>
            <Linkedin className='text-xs sm:text-sm md:text-base dark:text-[#E4E4E4]'/>
            </Link>
            </section> 
            <p className="text-xs sm:text-sm md:text-base font-roboto text-semibold dark:text-[#E4E4E4]"> Created By Novian ©{new Date().getFullYear()} </p>
            </div>
        </footer>
    );
}

export default Footer;