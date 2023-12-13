import React from "react";
import styled from "styled-components";
import bg from "../assets/bg.avif";
import Introduction from "../molecules/Introduction";

const Container = styled.div`
  background: url(${bg}), rgba(0, 0, 0, 0.6);
  background-blend-mode: overlay;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10%;
`;

const Hero = () => {
  return (
    <Container>
      <Introduction></Introduction>
    </Container>
  );
};

export default Hero;
