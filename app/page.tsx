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
      <section className="relative mx-auto mb-20 w-full max-w-5xl rounded-3xl bg-gradient-to-r from-[#99D98C] to-[#34A0A4] px-6 py-12 text-center text-white shadow-xl sm:px-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
            Ready to build something together?
          </h2>
          <p className="text-sm font-medium sm:text-base lg:text-lg">
            I help teams ship modern products, educate new developers, and explore how AI fits into real-world workflows.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:novskidev@gmail.com"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-verdigris transition hover:-translate-y-0.5 hover:shadow-lg sm:text-base"
            >
              Hire Me
            </a>
            <Link
              href="/product"
              className="rounded-full border border-white/80 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10 sm:text-base"
            >
              Explore My Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
