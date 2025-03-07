'use client'

import { motion } from "framer-motion";
import profilpic from "../../public/images/Diva_18022025.png"
import Image from "next/image";

export default function Hero() {
    return (
        <section className="bg-[#F7F7F7] dark:bg-[#1A1A1A] w-full min-h-screen flex flex-col justify-center items-center p-5 relative overflow-hidden">
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Image 
                    src={profilpic} 
                    alt="Profile Picture" 
                    className="bg-gradient-to-r from-[#99D98C] to-[#34A0A4] mt-16 w-40 h-40 lg:w-60 lg:h-60 rounded-full object-cover hover:scale-105 transition-transform duration-300 shadow-lg" 
                />
            </motion.div>

            <motion.div 
                className="flex flex-col items-center text-center gap-6 max-w-3xl mt-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <h1 className="font-extrabold text-4xl md:text-6xl font-pally p-2 dark:text-white text-center leading-tight">
                    Hi, I&apos;m <motion.span 
                        className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-[#99D98C] to-[#34A0A4]"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        Novian
                    </motion.span>
                    <motion.span
                        initial={{ rotate: -10 }}
                        animate={{ rotate: 20 }}
                        transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
                    >
                        👋
                    </motion.span>
                </h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <p className="font-roboto font-semibold text-md text-wrap lg:text-xl md:text-lg p-2 dark:text-gray-300">
                        A Passionate Software Engineer, <br className="hidden sm:block"/> Educator and Coffee Sipper ☕
                    </p>
                    <p className="font-roboto p-2 text-md md:text-lg sm:text-sm dark:text-gray-400">
                        Helping businesses and individuals solve problems with clean code, <br className="hidden sm:block"/> 
                        innovative solutions, and engaging education.
                    </p>
                </motion.div>

                <motion.div 
                    className="flex flex-wrap font-roboto justify-center items-center gap-4 text-lg md:text-base sm:text-sm font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <motion.div 
                        className="stat-card bg-white dark:bg-[#272727] p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                        whileHover={{ y: -5 }}
                    >
                        <h3 className="text-[#272727] dark:text-gray-300">+3 Years Experience</h3>
                    </motion.div>
                    <motion.div 
                        className="stat-card bg-white dark:bg-[#272727] p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                        whileHover={{ y: -5 }}
                    >
                        <h3 className="text-[#272727] dark:text-gray-300">5+ Projects</h3>
                    </motion.div>
                    <motion.div 
                        className="stat-card bg-white dark:bg-[#272727] p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                        whileHover={{ y: -5 }}
                    >
                        <h3 className="text-[#272727] dark:text-gray-300">+3 Apps Created</h3>
                    </motion.div>
                </motion.div>
            </motion.div>

            <div className="fixed left-[-100px] top-1/4 w-[250px] h-[250px] blur-[200px] rounded-full bg-light_green dark:bg-[#99D98C]/50 animate-pulse"></div>
            <div className="fixed right-[-100px] bottom-1/4 w-[350px] h-[350px] blur-[300px] rounded-full bg-verdigris dark:bg-[#34A0A4]/50 animate-pulse"></div>
        </section>
    );
}
