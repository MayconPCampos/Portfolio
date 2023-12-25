import Hero from "../Templates/Hero";
import About from "../Templates/About";
import Skills from "../Templates/Skills";
import Projects from "../Templates/Projects";
import Footer from "../Templates/Footer";

import { images } from "../../data";

const Index = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills images={images} />
      <Projects />
      <Footer />
    </>
  );
};

export default Index;
