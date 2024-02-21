import MenuBar from "../organisms/NavBar";
import ProjectDetail from "../Templates/ProjectDetail";
import Cards from "../Templates/Cards";
import Contact from "../Templates/Contact";
import Footer from "../Templates/Footer";

const Project = () => {
  let screenWidth = window.innerWidth;

  return (
    <>
      <MenuBar
        isBackgroundVisible={screenWidth > 500 ? true : false}
        isHomePage={false}
      />
      <ProjectDetail />
      <Cards visibilityYTreshold={0} />
      <Contact />
      <Footer />
    </>
  );
};

export default Project;
