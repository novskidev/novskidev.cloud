"use client";

import Link from "next/link";
import Image from "next/image";
import profilPic from "../../public/images/5-29-removebg-preview.png"
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto px-4 py-8"
        >
            <article className="space-y-8">
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center"
                >
                    <h1 className="font-pally text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
                        <Typewriter
                            words={[
                                "Thanks for reaching me!",
                                "Welcome to my website!",
                            ]}
                            loop={1}
                            cursor
                            cursorStyle="|"
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={0} 
                        />
                    </h1>
                </motion.div>

                {/* Profile Section */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="w-48 h-48 relative"
                    >
                        <Image 
                            src={profilPic} 
                            alt="Profile Picture" 
                            fill
                            className="rounded-full object-cover shadow-lg"
                        />
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex-1"
                    >
                        <p className="text-lg dark:text-white leading-relaxed">
                            Hi, I&apos;m <span className="font-bold text-primary">Novian Nadari</span>—a passionate Software Engineer & Educator based in Yogyakarta, Indonesia 🇮🇩. I am currently deepening my knowledge in programming while working as a freelance software engineer. Besides coding, I dedicate my time to teaching at an elementary school, sharing knowledge, and inspiring young minds.
                        </p>
                    </motion.div>
                </div>

                {/* About Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
                >
                    <p className="text-lg dark:text-white leading-relaxed">
                        With a strong interest in technology and education, I love building software solutions that make an impact. I also enjoy contributing to the open-source community and continuously learning new things to grow as a developer.
                    </p>
                </motion.div>

                {/* Links Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
                >
                    <p className="text-lg dark:text-white leading-relaxed">
                        Glad to have you here! 🎉 On this website, I share various{" "}
                        <Link href="/articles" className="text-primary hover:text-primary-dark font-semibold underline transition-colors">
                            Articles
                        </Link>{" "}
                        related to technology, programming, and my personal experiences. You can also explore some of my open-source{" "}
                        <Link href="/projects" className="text-primary hover:text-primary-dark font-semibold underline transition-colors">
                            Projects
                        </Link>{" "}
                        and see what I&apos;ve been working on.
                    </p>
                </motion.div>

                {/* Contact Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-center"
                >
                    <h2 className="font-pally text-2xl font-bold dark:text-white mb-4">
                        📩 Get in Touch!
                    </h2>
                    <p className="text-lg dark:text-white">
                        Send me an email at{" "}
                        <Link 
                            href="mailto:novskidev@gmail.com" 
                            className="text-primary hover:text-primary-dark font-semibold underline transition-colors"
                        >
                            novskidev@gmail.com
                        </Link>{" "}
                        to say hi, or connect via the socials.
                    </p>
                </motion.div>
            </article>
        </motion.section>
    );
}