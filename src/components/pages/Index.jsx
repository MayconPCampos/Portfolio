import Hero from "../Templates/Hero";
import About from "../Templates/About";
import Skills from "../Templates/Skills";
import Projects from "../Templates/Projects";

const images = [
  { key: 1, title: "React", url: "../assets/react.svg" },
  { key: 2, title: "HTML5", url: "../assets/html5.svg" },
  { key: 3, title: "CSS3", url: "../assets/css3-alt.svg" },
  { key: 4, title: "Javascript", url: "../assets/js.svg" },
];

const Index = () => {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Skills images={images}></Skills>
      <Projects></Projects>
    </>
  );
};

export default Index;
