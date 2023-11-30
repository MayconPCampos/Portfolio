import { createGlobalStyle } from "styled-components";
import font from "../fonts/Inter-Thin.ttf";
import fontRegular from "../fonts/Inter-Regular.ttf";
import fontSemiBold from "../fonts/Inter-SemiBold.ttf";

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: "Inter";
  src: url(${font});
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
  background-color: #000;
}

`;

export default GlobalStyles;
