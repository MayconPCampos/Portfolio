import React from "react";
import styled from "styled-components";
import bg from "../assets/bg.avif";
import Section from "../atoms/Section";
import Introduction from "../molecules/Introduction";
import BreakpointSize, { BreakAt } from "../../styles/Breakpoints";

const Container = styled.div`
  background: url(${bg}), rgba(0, 0, 0, 0.6);
  background-blend-mode: overlay;
  background-position: center;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 0 10%; */

  ${BreakAt(BreakpointSize.md)} {
    height: 100vh;
  }
`;

const Hero = () => {
  return (
    <Container>
      <Section>
        <Introduction></Introduction>
      </Section>
    </Container>
  );
};

export default Hero;
