import { Project } from "../utils/utility";
import Card from "./ui/card";

function Projects() {
  return (
    <section className="w-full h-fit flex flex-col items-center justify-center bg-kappel dark:bg-[#121212] transition-all duration-300">
      <div className="w-8/12 my-[40px] mx-[264px]">
        <h1 className="font-pally text-left text-wrap font-bold text-6xl text-white dark:text-[#56D3A8] transition-all duration-300">
          Projects
        </h1>
        <p className="font-roboto text-white dark:text-[#E4E4E4] text-xs sm:text-sm md:text-base text-wrap text-left py-2 transition-all duration-300">
          Open-source projects I&apos;ve made over the years, including this website, games, and apps.
        </p>
      </div>

      <div className="flex gap-4 flex-wrap items-center justify-center mb-[80px] w-9/12 ">
        {Project.slice(0, 4).map((project) => (
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
