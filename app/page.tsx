import Link from "next/link";

import Hero from "./components/hero";
import Projects from "./components/project";
import Articles from "./components/articles";
import { getAllArticles } from "./utils/mdx";

export default function Home() {
  const articles = getAllArticles();

  return (
    <div className="flex flex-col w-full gap-16">
      <Hero />
      <section id="projects" className="scroll-mt-24">
        <Projects />
      </section>
      <section id="articles" className="scroll-mt-24">
        <Articles articles={articles} />
      </section>
    </div>
  );
}
