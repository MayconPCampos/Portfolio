import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const CardContainer = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
`;

const CardLink = styled.a`
  text-decoration: none;
  color: #555;
  transition: color 0.8s;
  text-transform: uppercase;
  font-size: 1rem;

  &:hover {
    color: #444;
  }
`;

const CardImage = styled.img`
  border-radius: 3px;
  width: 100%;
  height: 100%;
  transition: opacity 0.5s;
  margin-bottom: 5px;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

const CardDescription = styled.p`
  font-size: 0.8rem;
`;

const Card = ({ image, description, url }) => {
  return (
    <CardContainer>
      <CardLink href={url} target="_blank" rel="noreferrer">
        <CardImage src={image} alt="placeholder" />
        <CardDescription>{description}</CardDescription>
      </CardLink>
    </CardContainer>
  );
};

Card.propTypes = {
  image: propTypes.string,
  description: propTypes.string,
  url: propTypes.string,
};

export default Card;
