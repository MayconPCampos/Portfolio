import { createGlobalStyle } from "styled-components";
import fontLight from "../fonts/RobotoCondensed-Light.ttf";
import fontRegular from "../fonts/Inter-Regular.ttf";
import fontSemiBold from "../fonts/Inter-SemiBold.ttf";
import fontBold from "../fonts/RobotoCondensed-Bold.ttf";

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
}

body{
  background-color: #fff;
  min-width: 320px;
  margin: 0;
}

`;

export default GlobalStyles;
