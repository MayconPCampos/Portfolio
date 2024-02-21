import React from "react";
import styled from "styled-components";

import PropTypes from "prop-types";

const StyledCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;

  @media screen and (max-width: 900px) {
    margin-top: 20px;
  }
`;

const CardImage = styled.img`
  width: 90%;
  max-height: 380px;
  margin: 0;
  padding: 0;
  border: 1px solid #ccc;
  cursor: zoom-in;
`;

const ProjectDetailCard = ({ src }) => {
  return (
    <StyledCard>
      <CardImage src={src} alt></CardImage>
    </StyledCard>
  );
};

ProjectDetailCard.propTypes = {
  src: PropTypes.string,
};

export default ProjectDetailCard;
