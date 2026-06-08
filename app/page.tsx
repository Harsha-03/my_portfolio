import Hero from "./components/Hero";
import MotionPreview from "./components/MotionPreview";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import ContactFancy from "./components/ContactFancy";

export default function HomePage() {
  return (
    <main className="relative">
      <div className="md:pl-[300px]">
        <div className="md:pr-10">
          <section id="home" className="scroll-mt-24">
            <Hero />
          </section>

          <section id="projects" className="scroll-mt-24">
            <Projects />
          </section>

          <section id="motion" className="scroll-mt-24">
            <MotionPreview />
          </section>

          <section id="experience" className="scroll-mt-24">
            <Experience />
          </section>

          <section id="skills" className="scroll-mt-24">
            <Skills />
          </section>

          <section id="contactfancy" className="scroll-mt-24">
            <ContactFancy />
          </section>
        </div>
      </div>
    </main>
  );
}