import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import { Education, Experience } from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <main id="main">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
