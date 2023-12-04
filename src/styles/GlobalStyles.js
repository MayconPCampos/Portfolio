import { createGlobalStyle } from "styled-components";
import fontLight from "../fonts/Inter-Light.ttf";
import fontRegular from "../fonts/Inter-Regular.ttf";
import fontSemiBold from "../fonts/Inter-SemiBold.ttf";

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

html{
  font-family: "Inter";
  font-size: 16px;
}

body{
  background-color: #fff;
}

`;

export default GlobalStyles;
