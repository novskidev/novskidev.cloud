import { Project } from "../utils/utility";
import Card from "../components/ui/card";

export default function ProjectsPage() {
    return (
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-center mt-7 mb-[80px] w-full sm:w-10/12 px-2">
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