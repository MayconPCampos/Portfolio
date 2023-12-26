import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const Card = styled.div`
  max-width: 110px;
  max-height: 180px;
  border-radius: 80px;
  display: flex;
  row-gap: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: auto;
  padding: 25px;

  img {
    width: 100px;
    height: 100px;
  }
`;

const SkillCard = ({ children }) => {
  return <Card>{children}</Card>;
};

SkillCard.defaultProps = {
  children: undefined,
};

SkillCard.propTypes = {
  children: propTypes.node,
};
export default SkillCard;
