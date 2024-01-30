import { createGlobalStyle } from "styled-components";
import fontLight from "../fonts/Poppins-Light.ttf";
import fontRegular from "../fonts/Poppins-Medium.ttf";
import fontBold from "../fonts/Poppins-SemiBold.ttf";

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: "Poppins";
  src: url(${fontLight});
  font-weight: 300;
}

@font-face {
  font-family: "Poppins";
  src: url(${fontRegular});
  font-weight: 400;
}

@font-face {
  font-family: "Poppins";
  src: url(${fontBold});
  font-weight: 800;
}

html{
  font-family: "Poppins";
  font-size: 16px;
  scroll-behavior: smooth;
}

body{
  background-color: #fff;
  min-width: 320px;
  margin: 0;
  box-sizing: border-box;
}

hr{
    border: none;
    border-top: 1px solid #eee;
  }

::-webkit-scrollbar {
  width: 14px;
  background-color: rgba(0, 0, 0, 0);
}

::-webkit-scrollbar-track {
  border: 4px solid rgba(0, 0, 0, 0);
}

::-webkit-scrollbar-thumb {
  border: 4px solid rgba(0, 0, 0, 0);
  background-clip: padding-box;
  border-radius: 9999px;
  background-color: rgba(200, 200, 200, 0.8);
}

`;

export default GlobalStyles;
