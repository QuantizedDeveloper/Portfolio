import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Process from "./components/Process/Process";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Stats from "./components/Stats/Stats";
import TechStack from "./components/TechStack/TechStack";
import CaseStudy from "./components/CaseStudy/CaseStudy";
import WhyMe from "./components/WhyMe/WhyMe";
import FAQ from "./components/FAQ/FAQ";
import "./styles.css";

function App() {
  return (
    <>
  <Navbar />
  <Hero />
  <Stats />
  <About />
  <Skills />
  <TechStack />
  <Projects />
  <CaseStudy />
  <Services />
  <Process />
  <WhyMe />
  <FAQ />
  <Testimonials />
  <Contact />
  <Footer />
</>
  );
}

export default App;