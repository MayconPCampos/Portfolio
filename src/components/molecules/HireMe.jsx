import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";

const HireMeContainer = styled.div`
  background-color: #68c3a3;
  height: 350px;
  display: flex;
  gap: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 1;
`;

const Message = styled.p`
  font-size: 3rem;
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 1%;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HireMeSection = () => {
  return (
    <HireMeContainer>
      <Message>I'm available for full-time opportunities</Message>
      <Button href="#message" title="Hire me" />
    </HireMeContainer>
  );
};

export default HireMeSection;
