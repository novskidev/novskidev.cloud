import type { Metadata } from "next";

import { Project } from "../utils/utility";
import Card from "../components/ui/card";
import { MotionDiv } from "../components/motion-wrapper";

export const metadata: Metadata = {
  title: "Projects | Novskidev.cloud",
  description:
    "A curated collection of Novian's software projects, from AI-assisted tools to education-focused web apps and experiments.",
  openGraph: {
    title: "Projects | Novskidev.cloud",
    description:
      "Explore open-source and client projects by Novian Nadari, showcasing React, Next.js, Astro, Svelte, and AI-powered solutions.",
    url: "https://novskidev.cloud/projects",
    type: "website",
    siteName: "Novskidev.cloud",
  },
  alternates: {
    canonical: "https://novskidev.cloud/projects",
  },
};

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
        className="grid w-full grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
