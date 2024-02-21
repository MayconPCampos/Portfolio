import Hero from "../Templates/Hero";
import About from "../Templates/About";
import Skills from "../Templates/Skills";
import { skills } from "../../data";
import Cards from "../Templates/Cards";
import Contact from "../Templates/Contact";
import Footer from "../Templates/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills skills={skills} />
      <Cards visibilityYTreshold={2000} />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
