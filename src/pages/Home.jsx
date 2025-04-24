import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";


function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      
      <About />
      <Services />
      <Experience />
      
      <Portfolio />
      <Contact />
      
      <Footer />
    </>
  );
}

export default Home;
