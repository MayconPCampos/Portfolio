import React from "react";
import styled from "styled-components";
import bg from "../assets/bg.avif";
import Introduction from "../molecules/Introduction";
import BreakpointSize, { BreakAt } from "../../styles/Breakpoints";
import MenuBar from "../organisms/NavBar";

const Container = styled.div`
  background: url(${bg}), rgba(0, 0, 0, 0.6);
  background-blend-mode: overlay;
  background-position: center;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;

  ${BreakAt(BreakpointSize.md)} {
    height: 100vh;
  }
`;

const Hero = () => {
  return (
    <>
      <MenuBar />
      <Container>
        <Introduction></Introduction>
      </Container>
    </>
  );
};

export default Hero;
