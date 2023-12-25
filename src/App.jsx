import React from "react";
import Hero from "../src/components/Templates/Hero";
import About from "../src/components/Templates/About";
import Skills from "../src/components/Templates/Skills";
import Projects from "../src/components/Templates/Projects";
import Footer from "../src/components/Templates/Footer";
import { images } from "./data";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Hero />
      <About />
      <Skills images={images} />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
