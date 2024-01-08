import React from "react";
import Hero from "../src/components/Templates/Hero";
import About from "../src/components/Templates/About";
import Skills from "../src/components/Templates/Skills";
import Projects from "../src/components/Templates/Projects";
import Footer from "../src/components/Templates/Footer";
import { skills } from "./data";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Hero />
      <About />
      <Skills skills={skills} />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
