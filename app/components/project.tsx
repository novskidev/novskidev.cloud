'use client';

import { Project } from "../utils/utility";
import Card from "./ui/card";
import { useFadeInUp, useFadeInStagger } from "../hooks/useScrollAnimation";

function Projects() {
  const headerRef = useFadeInUp();
  const gridRef = useFadeInStagger('.project-card', { start: 'top 80%' });

  return (
    <section className="w-full bg-kappel py-16 sm:py-24 dark:bg-[#121212] transition-all duration-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <header ref={headerRef} className="space-y-3 text-center text-white sm:text-left dark:text-[#E4E4E4]">
          <h1 className="font-pally text-3xl font-bold sm:text-4xl lg:text-5xl">
            Projects
          </h1>
          <p className="font-roboto text-sm sm:text-base lg:text-lg">
            Open-source projects I&apos;ve made over the years, including this website, games, and apps.
          </p>
        </header>

        <div ref={gridRef} className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Project.slice(0, 6).map((project) => (
            <div key={project.key} className="project-card">
              <Card
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
