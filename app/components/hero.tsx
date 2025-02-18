import profilpic from "../../public/images/5-29-removebg-preview.png"
import Image from "next/image";

function Hero() {
    return (
        <section className="bg-[#F7F7F7] dark:bg-[#1A1A1A] w-full min-h-screen flex flex-col justify-center items-center p-5">
            <Image src={profilpic} alt="Profile Picture" className="bg-gradient-to-r from-[#99D98C] to-[#34A0A4] w-60 h-60 rounded-full object-cover" />
            <div className="flex flex-col items-center text-center gap-4 max-w-3xl">
                <h1 className="font-extrabold text-6xl font-pally p-2 dark:text-white text-center leading-tight">
                    Hi, I'm <span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-[#99D98C] to-[#34A0A4]">Novian N</span> 👋
                </h1>
                <p className="font-roboto font-semibold text-xl p-2 dark:text-gray-300">
                    A Passionate Software Engineer, <br className="hidden sm:block"/> Educator and Coffee Sipper ☕
                </p>
                <p className="font-roboto p-2 text-lg md:text-base sm:text-sm dark:text-gray-400">
                    Helping businesses and individuals solve problems with clean code, <br className="hidden sm:block"/> 
                    innovative solutions, and engaging education.
                </p>
                <div className="flex flex-wrap justify-center items-center gap-3 text-lg md:text-base sm:text-sm font-medium text-[#272727] dark:text-gray-300">
                    <h3>+3 Years Experience</h3>
                    <span className="hidden sm:inline">|</span>
                    <h3>5+ Projects</h3>
                    <span className="hidden sm:inline">|</span>
                    <h3>+3 Apps Created</h3>
                </div>
            </div>

            {/* Background Blur Elements */}
            <div className="fixed left-[-100px] top-1/4 w-[250px] h-[250px] blur-[200px] rounded-full bg-light_green dark:bg-[#99D98C]/50"></div>
            <div className="fixed right-[-100px] bottom-1/4 w-[350px] h-[350px] blur-[300px] rounded-full bg-verdigris dark:bg-[#34A0A4]/50"></div>
        </section>
    );
}

export default Hero;
