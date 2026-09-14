import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import SkillsTicker from "@/components/sections/SkillsTicker";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Experience from "@/components/sections/Experience";
import SkillsExpertise from "@/components/sections/SkillsExpertise";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="bg-[var(--c-bg)] content-stretch flex flex-col items-center relative w-full overflow-x-clip">
        <Hero />
        <RevealOnScroll>
          <SkillsTicker />
        </RevealOnScroll>
        <RevealOnScroll>
          <About />
        </RevealOnScroll>
        <RevealOnScroll>
          <Services />
        </RevealOnScroll>
        <RevealOnScroll>
          <Experience />
        </RevealOnScroll>
        <RevealOnScroll>
          <SkillsExpertise />
        </RevealOnScroll>
        <RevealOnScroll>
          <Projects />
        </RevealOnScroll>
        <RevealOnScroll>
          <Contact />
        </RevealOnScroll>
      </main>
      <RevealOnScroll>
        <Footer />
      </RevealOnScroll>
    </>
  );
}
