import Articles from "./components/articles";
import Hero from "./components/hero";
import Projects from "./components/project";
export default function Home() {
  return (
  <div className="flex flex-col w-full h-fit ">
    <Hero />
    <Projects/>
    <Articles/>
  </div>
  );
}
