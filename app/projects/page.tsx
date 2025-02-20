import { Project } from "../utils/utility";
import Card from "../components/ui/card";

export default function ProjectsPage() {
    return (
        <div className="flex flex-row gap-4 flex-wrap items-center justify-center mt-7 mb-[80px] w-10/12 ">
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
    );
  }