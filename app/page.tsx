import Background from "@/components/Background";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import TopArc from "@/components/TopArc";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Background />
      <TopArc />
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </main>
  );
}
