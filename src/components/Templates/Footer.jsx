import React from "react";
import styled from "styled-components";
import Text from "../atoms/Text";
import propTypes from "prop-types";

const Container = styled.div`
  background-color: #68c3a3;
  height: 180px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = ({ children }) => {
  const date = new Date().getFullYear();

  return (
    <Container>
      <Text type="bright">©Maycon Campos {date}. All rights reserved.</Text>
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
