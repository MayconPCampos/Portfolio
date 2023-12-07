import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  width: 50px;
  border: 1px solid #fff;
  border-radius: 4px;
  transform: rotate(45deg);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 70%;
    transform: rotate(-45deg);
  }
`;

const Icon = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Icon;
