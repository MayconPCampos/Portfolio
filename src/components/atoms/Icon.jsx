import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const Container = styled.div`
  height: 60px;
  width: 60px;
  border: 1px solid #fff;
  border-radius: 4px;
  transform: rotate(45deg);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;

  img {
    width: 60%;
    transform: rotate(-45deg);
  }

  &:hover {
    background-color: #68c3a3;
  }
`;

const Icon = ({ children }) => {
  return <Container>{children}</Container>;
};

Icon.defaultProps = {
  children: undefined,
};

Icon.propTypes = {
  children: propTypes.node,
};

export default Icon;
