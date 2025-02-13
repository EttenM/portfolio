// "use client";
import Hero from "./blocks/hero/Hero";
import About from "./blocks/about/About";
import Projects from "./blocks/projects/Projects";
import Skills from "./blocks/skills/Skills";
import Contact from "./blocks/contact/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
