import Articles from "./components/articles";
import Hero from "./components/hero";
import Projects from "./components/project";
import { getAllArticles } from "./utils/mdx";

export default function Home() {
  const articles = getAllArticles();
  
  return (
  <div className="flex flex-col w-full h-fit">
    <Hero />
  </div>
  );
}
