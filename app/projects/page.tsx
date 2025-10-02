import { Project } from "../utils/utility";
import Card from "../components/ui/card";
import { MotionDiv } from "../components/motion-wrapper";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectsPage() {
    return (
        <MotionDiv
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-7 mb-[80px] w-full max-w-7xl mx-auto px-4">
        {Project.map((project) => (
          <MotionDiv 
            key={project.key} 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Card
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              link={project.link}
            />
          </MotionDiv>
        ))}
      </MotionDiv> 
    );
  }
