import { Github, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import Link from 'next/link';


function Footer() {
    return (
        <footer className="bg-white dark:bg-black w-full py-6 sm:py-8">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="flex flex-col items-center justify-center space-y-4">
                   <section className="flex items-center justify-center gap-4 sm:gap-6">
                       <Link href={'https://www.instagram.com/novskidev/'} aria-label="Instagram">
                           <Instagram className='w-5 h-5 sm:w-6 sm:h-6 hover:scale-125 transition-all duration-300 dark:text-[#E4E4E4]'/>
                       </Link>
                       <Link href={'https://github.com/novskidev'} aria-label="GitHub">
                           <Github className='w-5 h-5 sm:w-6 sm:h-6 hover:scale-125 transition-all duration-300 dark:text-[#E4E4E4]'/>
                       </Link>
                       <Link href={'https://www.linkedin.com/in/noviann/'} aria-label="LinkedIn">
                           <Linkedin className='w-5 h-5 sm:w-6 sm:h-6 hover:scale-125 transition-all duration-300 dark:text-[#E4E4E4]'/>
                       </Link>
                        <Link href={'https://www.threads.com/@novn_'} aria-label="Threads">
                            <MessageCircle className='w-5 h-5 sm:w-6 sm:h-6 hover:scale-125 transition-all duration-300 dark:text-[#E4E4E4]'/>
                        </Link>
                   </section>
                   <p className="text-sm sm:text-base font-roboto font-semibold dark:text-[#E4E4E4] text-center">
                       Created By Novian ©{new Date().getFullYear()}
                   </p>
               </div>
           </div>
        </footer>
    );
}

export default Footer;
