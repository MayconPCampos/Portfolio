import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

// media inicio

const StyledMedia = styled.div`
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-size: cover;
  width: 640px;
  height: 360px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const CardMedia = ({ image }) => <StyledMedia image={image} />;

CardMedia.defaultProps = {
  image: undefined,
};

CardMedia.propTypes = {
  image: propTypes.string,
};

// media final

// body inicio

const StyledBody = styled.div`
  padding: 10px;
`;

export const CardBody = ({ children }) => <StyledBody>{children}</StyledBody>;

CardBody.defaultProps = {
  children: undefined,
};

CardBody.propTypes = {
  children: propTypes.node,
};

// body final

//card inicio

const StyledCard = styled.div`
  border-radius: 10px;
  width: fit-content;
  background-color: #fff;
  border: 1px solid #bbb;
  overflow: hidden;
`;

export const Card = ({ children }) => <StyledCard>{children}</StyledCard>;

Card.defaultProps = {
  children: undefined,
};

Card.propTypes = {
  children: propTypes.node,
};

// card final

export default Card;
