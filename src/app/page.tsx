import Header from "@/components/Header";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12">
      <Header />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Resume />
      <Contact />
    </main>
  );
}
