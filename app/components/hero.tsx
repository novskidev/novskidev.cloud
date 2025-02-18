function Hero() {
    return (
        <section className="bg-[#F7F7F7] dark:bg-[#1A1A1A] mt-[64px] w-full h-fit flex justify-center items-center">
            <div className="mt-[120px] md:mt-[80px] sm:mt-[60px] flex flex-col items-center justify-center gap-2">
                <h1 className="font-bold text-7xl md:text-5xl sm:text-4xl font-pally text-wrap text-center p-2 dark:text-white">
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#99D98C] to-[#34A0A4]">Novian</span>👋
                </h1>
                <p className="font-roboto font-semibold text-2xl md:text-xl sm:text-lg p-2 text-wrap text-center dark:text-gray-300">
                    A Passionate Software Engineer, <br className="sm:hidden" /> Educator and Coffee Sipper ☕
                </p>
                <p className="font-roboto text-wrap text-center p-2 text-lg md:text-base sm:text-sm dark:text-gray-400">
                    Helping businesses and individuals solve problems with clean code, <br className="sm:hidden" /> innovative solutions, and engaging education.
                </p>
                <div className="flex justify-center items-center text-center text-wrap gap-2 font-roboto font-medium text-xl md:text-md sm:text-base text-[#272727] dark:text-gray-300">
                    <h3>+3 Years Experience</h3>
                    <h1>|</h1>
                    <h3>5+ Projects</h3>
                    <h1>|</h1>
                    <h3>+3 Apps Created</h3>
                </div>
                <div className="fixed left-[-47px] w-[300px] h-[300px] blur-[300px] rounded-full bg-light_green dark:bg-[#99D98C]/50"></div>
                <div className="fixed right-[-47px] w-[300px] h-[300px] blur-[300px] rounded-full bg-light_green dark:bg-[#34A0A4]/50"></div>
            </div>
        </section>
    );
}

export default Hero;