import { createGlobalStyle } from "styled-components";
import fontLight from "../fonts/Poppins-Light.ttf";
import fontRegular from "../fonts/Poppins-Medium.ttf";
import fontSemiBold from "../fonts/Poppins-SemiBold.ttf";
import fontBold from "../fonts/Poppins-SemiBold.ttf";

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: "Inter";
  src: url(${fontLight});
  font-weight: 300;
}

@font-face {
  font-family: "Inter";
  src: url(${fontRegular});
  font-weight: 400;
}

@font-face {
  font-family: "Inter";
  src: url(${fontSemiBold});
  font-weight: 800;
}

@font-face {
  font-family: "Roboto";
  src: url(${fontBold});
  font-weight: 800;
}

html{
  font-family: "Inter";
  font-size: 16px;
  scroll-behavior: smooth;
}

body{
  background-color: #fff;
  min-width: 320px;
  margin: 0;
}

`;

export default GlobalStyles;
