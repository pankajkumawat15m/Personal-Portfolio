import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import DevTerminal from "../components/DevTerminal";

function Home() {
  return (
    <>
      {/* Dynamic Navigation Bar & Progress tracker */}
      <Navbar />
      
      {/* High-Fidelity Hero Landing Zone */}
      <Hero />

      {/* Numerical Achievements Stats */}
      <Stats />
      
      {/* Bio, Identity & Professional summary */}
      <About />
      
      {/* Skills inventory & Journey milestones timeline */}
      <Experience />

      {/* Services provided */}
      <Services />
      
      {/* Project filtering & details deck */}
      <Portfolio />
      
      {/* Client Intake Form & social cards */}
      <Contact />
      
      {/* Copyright footer bar */}
      <Footer />

      {/* Floating CLI Terminal Command Line drawer */}
      <DevTerminal />
    </>
  );
}

export default Home;
