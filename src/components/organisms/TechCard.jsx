import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  img {
    width: 100px;
  }
`;

const TechCard = ({ children }) => {
  return <Card>{children}</Card>;
};

export default TechCard;
