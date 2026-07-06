import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Projects from "@/app/components/Projects";
import MotionPreview from "@/app/components/MotionPreview";
import Experience from "@/app/components/Experience";
import Skills from "@/app/components/Skills";
import Writing from "@/app/components/Writing";
import ContactFancy from "@/app/components/ContactFancy";
import SectionDivider from "@/app/components/SectionDivider";

export default function HomePage() {
  return (
    <main className="relative">
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <MotionPreview />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Writing />
      <SectionDivider />
      <ContactFancy />
    </main>
  );
}
