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
            className="relative flex w-full min-h-[calc(100svh-4rem)] items-center justify-center overflow-hidden bg-[#F7F7F7] px-4 py-12 dark:bg-[#1A1A1A] sm:min-h-[calc(100svh-5rem)] sm:px-6 md:py-16 lg:px-12 lg:py-20"
        >
            <div className="pointer-events-none absolute -left-24 top-1/3 hidden h-[200px] w-[200px] rounded-full bg-light_green blur-[200px] dark:bg-[#99D98C]/50 sm:block lg:-left-36 lg:h-[240px] lg:w-[240px]" />
            <div className="pointer-events-none absolute -right-24 bottom-1/4 h-[220px] w-[220px] rounded-full bg-verdigris blur-[220px] dark:bg-[#34A0A4]/50 sm:-right-28 sm:h-[280px] sm:w-[280px] lg:h-[340px] lg:w-[340px]" />

            <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-8 sm:gap-10 md:flex-row md:items-center md:gap-12 lg:max-w-7xl lg:gap-16">
                <div className="flex w-full flex-col items-center text-center md:w-3/5 md:items-start md:text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        className="font-pally text-[2rem] font-extrabold leading-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl"
                    >
                        Hi, I&apos;m <span className="bg-gradient-to-r from-[#99D98C] to-[#34A0A4] bg-clip-text font-extrabold text-transparent">Novian</span>👋
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45, duration: 0.7 }}
                        className="mt-3 font-roboto text-sm font-semibold text-gray-700 dark:text-gray-300 sm:text-base md:text-lg"
                    >
                        A Passionate Software Engineer, Educator and Coffee Sipper ☕
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.55, duration: 0.7 }}
                        className="mt-2 max-w-2xl font-roboto text-xs text-gray-600 dark:text-gray-400 sm:text-sm md:text-base"
                    >
                        Helping businesses and individuals solve problems with clean code, innovative solutions, and engaging education.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.65, duration: 0.7 }}
                        className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:justify-start"
                    >
                        <a
                            href="mailto:novskidev@gmail.com"
                            className="rounded-full bg-verdigris px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-bondi_blue sm:text-base"
                        >
                            Let&apos;s Collaborate
                        </a>
                        <Link
                            href="#projects"
                            className="rounded-full border border-verdigris px-5 py-2 text-sm font-semibold text-verdigris transition hover:-translate-y-0.5 hover:bg-verdigris/10 dark:border-[#56D3A8] dark:text-[#56D3A8] dark:hover:bg-[#56D3A8]/10 sm:text-base"
                        >
                            View My Projects
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.75, duration: 0.7 }}
                        className="mt-8 flex w-full justify-center md:justify-start md:mt-10"
                    >
                        <div className="relative h-12 w-full max-w-sm overflow-hidden rounded-full border border-verdigris/10 bg-white/70 backdrop-blur-sm dark:bg-white/5 sm:h-14 sm:max-w-md md:h-16 md:max-w-lg lg:h-20 lg:max-w-xl">
                            <motion.div
                                className="flex h-full animate-slide items-center gap-8 sm:gap-10 md:gap-12 lg:gap-14"
                                whileHover={{ scale: 1.05 }}
                            >
                                <FaReact className="h-9 w-9 text-cyan-500 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16" />
                                <RiNextjsFill className="h-9 w-9 text-black dark:text-white sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16" />
                                <SiAstro className="h-9 w-9 text-orange-400 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16" />
                                <SiSvelte className="h-9 w-9 text-orange-600 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16" />
                                <SiVuedotjs className="h-9 w-9 text-green-500 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16" />
                                <SiSupabase className="h-9 w-9 text-green-500 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16" />
                                <SiExpress className="h-9 w-9 text-gray-700 dark:text-gray-300 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16" />
                                <FaPython className="h-9 w-9 text-yellow-500 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16" />
                                <FaReact className="h-9 w-9 text-cyan-500 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16" />
                                <RiNextjsFill className="h-9 w-9 text-black dark:text-white sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16" />
                                <SiAstro className="h-9 w-9 text-orange-400 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16" />
                                <SiSvelte className="h-9 w-9 text-orange-600 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16" />
                                <SiVuedotjs className="h-9 w-9 text-green-500 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16" />
                                <SiSupabase className="h-9 w-9 text-emerald-500 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16" />
                                <SiExpress className="h-9 w-9 text-gray-700 dark:text-gray-300 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16" />
                                <FaPython className="h-9 w-9 text-yellow-500 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ scale: 0.85, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
                    className="flex w-full max-w-[15rem] justify-center sm:max-w-[18rem] md:w-2/5 md:max-w-[20rem] lg:max-w-none"
                >
                    <div className="relative mt-6 w-full rounded-[3rem] bg-gradient-to-br from-[#99D98C] to-[#34A0A4] p-1.5 shadow-2xl md:mt-0 md:p-2">
                        <div className="h-full w-full rounded-[3rem] bg-[#F7F7F7] p-3 dark:bg-[#1A1A1A] sm:p-4 md:p-5">
                            <Image
                                src={profilpic}
                                alt="Profile Picture"
                                priority
                                sizes="(min-width: 1280px) 460px, (min-width: 768px) 340px, (min-width: 640px) 280px, 220px"
                                className="h-full w-full rounded-[2rem] object-cover"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default Hero;
