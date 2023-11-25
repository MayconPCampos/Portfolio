import { createGlobalStyle } from "styled-components";
import font from "../fonts/Inter-Thin.ttf";

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: "Inter";
  src: url(${font});
}

html{
  font-family: "Inter";
}

body{
  background-color: #000;
}

`;

export default GlobalStyles;
