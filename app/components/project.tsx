import { Project } from "../utils/utility";
import Card from "./ui/card";
function Projects() {
    return ( 
        <section className="w-full h-fit flex flex-col bg-kappel items-center justify-center">
            <div className="w-8/12 my-[40px] mx-[264px]">
                <h1 className="font-pally text-left text-wrap font-bold text-6xl text-white">Projects</h1>
                <p className="font-roboto text-white text-xs md:text-sm lg:text-base text-wrap text-left py-2">
                    Open-source projects I've made over the years, including this website, games, and apps.
                </p>
            </div>

            {/* Tambahkan grid untuk menampilkan cards dengan rapi */}
            <div className="flex gap-4 flex-wrap items-center justify-center mb-[80px] w-8/12">
                {Project.map((project) => (
                    <Card
                      key={project.key}
                      title={project.title}
                      description={project.description}
                      imageSrc={project.imageSrc}
                      link={project.link}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;
