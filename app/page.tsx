import Hero from "@/app/components/Hero";
import Projects from "@/app/components/Projects";
import Experience from "@/app/components/Experience";
import Skills from "@/app/components/Skills";
import ContactFancy from "@/app/components/ContactFancy";

export default function HomePage() {
  return (
    <main className="relative">
      {/* This wrapper accounts for the fixed sidebar, once. */}
      <div className="md:pl-[300px]">
        {/* This ensures a consistent right gap on desktop without touching sections. */}
        <div className="md:pr-10">
          <Hero />
          <Projects />
          <Experience />
          <Skills />
          <ContactFancy />
        </div>
      </div>
    </main>
  );
}
