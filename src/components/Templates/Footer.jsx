import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const Container = styled.div`
  background-color: #111;
  height: 180px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1rem;
    font-weight: 300;
    color: #ddd;
    line-height: 1;
    margin: 5px 0;
  }

  @media screen and (max-width: 480px) {
    p {
      font-size: 0.8rem;
    }
  }
`;

const Footer = ({ children }) => {
  const date = new Date().getFullYear();

  return (
    <Container>
      <p>©Maycon Campos {date}. All rights reserved.</p>
    </Container>
  );
};

Footer.defaultProps = {
  children: undefined,
};

Footer.propTypes = {
  children: propTypes.node,
};

export default Footer;
