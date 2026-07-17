import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import SectionDivider from "./components/SectionDivider";

const App = () => {
  return (
    <main className="relative bg-[#d1d5db] min-h-screen">
      <Navbar />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Contact />
      <SectionDivider />
      <Footer />
    </main>
  );
};

export default App;
