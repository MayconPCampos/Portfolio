import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

// media inicio

const StyledMedia = styled.div`
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-size: cover;
  width: 270px;
  max-width: 480px;
  height: 180px;
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
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  h4,
  a {
    opacity: 0;
    margin: 0;
    transition: all 0.5s;
  }

  &:hover {
    background-color: #68c3a3;

    h4,
    a {
      opacity: 1;
      color: #fff;
    }
  }
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
  position: relative;
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
