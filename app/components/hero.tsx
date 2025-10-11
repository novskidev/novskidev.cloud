'use client';

import profilpic from "../../public/images/novski.png";
import Image from "next/image";
import Link from "next/link";
import { FaReact, FaPython } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiAstro, SiSvelte, SiVuedotjs, SiSupabase, SiExpress } from "react-icons/si";
import { motion } from "framer-motion";

function Hero() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-[#F7F7F7] dark:bg-[#1A1A1A] w-full min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-10"
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
                className="flex justify-center items-center w-full"
            >
                <Image src={profilpic} alt="Profile Picture" className="bg-gradient-to-r from-[#99D98C] to-[#34A0A4] mt-8 w-32 h-32 sm:w-40 sm:h-40 lg:w-60 lg:h-60 rounded-full object-cover" />
            </motion.div>
            <div className="flex flex-col items-center text-center gap-2 sm:gap-4 max-w-xs sm:max-w-2xl md:max-w-3xl w-full px-2 sm:px-0">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                    className="font-extrabold text-2xl sm:text-4xl md:text-6xl font-pally p-2 dark:text-white text-center leading-tight"
                >
                    Hi, I&apos;m <span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-[#99D98C] to-[#34A0A4]">Novian</span>👋
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.7 }}
                    className="font-roboto font-semibold text-sm sm:text-md md:text-xl p-2 dark:text-gray-300"
                >
                    A Passionate Software Engineer, <br className="hidden sm:block"/> Educator and Coffee Sipper ☕
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.7 }}
                    className="font-roboto p-2 text-xs sm:text-md md:text-lg dark:text-gray-400"
                >
                    Helping businesses and individuals solve problems with clean code, <br className="hidden sm:block"/> 
                    innovative solutions, and engaging education.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.75, duration: 0.7 }}
                    className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2"
                >
                    <a
                        href="mailto:novskidev@gmail.com"
                        className="rounded-full bg-verdigris px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-bondi_blue sm:text-base"
                    >
                        Let&apos;s Collaborate
                    </a>
                    <Link
                        href="#projects"
                        className="rounded-full border border-verdigris px-5 py-2 text-sm font-semibold text-verdigris transition hover:-translate-y-0.5 hover:bg-verdigris/10 dark:text-[#56D3A8] dark:border-[#56D3A8] dark:hover:bg-[#56D3A8]/10 sm:text-base"
                    >
                        View My Projects
                    </Link>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.7 }}
                    className="w-full flex justify-center mt-4 sm:mt-8"
                >
                    <div className="relative overflow-hidden w-full max-w-xs sm:max-w-xl md:max-w-2xl h-16 sm:h-20">
                        <motion.div
                            className="flex animate-slide gap-8 sm:gap-12 md:gap-16 items-center h-full"
                            whileHover={{ scale: 1.05 }}
                        >
                            {/* React */}
                            <FaReact className="text-cyan-500 w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20" />
                            {/* Next.js */}
                            <RiNextjsFill className="text-black dark:text-white w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20" />
                            {/* Astro */}
                            <SiAstro className="text-orange-400 w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20" />
                            {/* Svelte */}
                            <SiSvelte className="text-orange-600 w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20" />
                            {/* Vue */}
                            <SiVuedotjs className="text-green-500 w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20" />
                            {/* Supabase */}
                            <SiSupabase className="text-green-500 w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20" />
                            {/* Express */}
                            <SiExpress className="text-gray-700 dark:text-gray-300 w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20" />
                            {/* Python */}
                            <FaPython className="text-yellow-500 w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20" />
                            {/* Repeat for infinite effect */}
                            <FaReact className="text-cyan-500 w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20" />
                            <RiNextjsFill className="text-black dark:text-white w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20" />
                            <SiAstro className="text-orange-400 w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20" />
                            <SiSvelte className="text-orange-600 w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20" />
                            <SiVuedotjs className="text-green-500 w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20" />
                            <SiSupabase className="text-emerald-500 w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20" />
                            <SiExpress className="text-gray-700 dark:text-gray-300 w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20" />
                            <FaPython className="text-yellow-500 w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <div className="fixed left-[-100px] top-1/4 w-[250px] h-[250px] blur-[200px] rounded-full bg-light_green dark:bg-[#99D98C]/50"></div>
            <div className="fixed right-[-100px] bottom-1/4 w-[350px] h-[350px] blur-[300px] rounded-full bg-verdigris dark:bg-[#34A0A4]/50"></div>
        </motion.section>
    );
}

export default Hero;
