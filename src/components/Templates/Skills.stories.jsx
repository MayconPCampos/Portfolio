import Skills from "./Skills";

const images = [
  { key: 1, title: "React", url: "../assets/react.svg" },
  { key: 2, title: "HTML5", url: "../assets/html5.svg" },
  { key: 3, title: "CSS3", url: "../assets/css3-alt.svg" },
  { key: 4, title: "Javascript", url: "../assets/js.svg" },
];

export default {
  title: "Components/Templates/Skills",
  component: Skills,
};

export const Usage = {
  render: () => <Skills images={images}></Skills>,
};
