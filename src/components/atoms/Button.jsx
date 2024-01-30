import styled from "styled-components";
import propTypes from "prop-types";

const buttonStyles = {
  green: {
    border: "0px solid #3dad86",
    backgroundColor: "#68c3a3",
    hoverBackgroundColor: "#3dad86",
  },
  default: {
    border: "1px solid #fff",
    backgroundColor: "transparent",
    hoverBackgroundColor: "rgba(0, 0, 0, 0.1)",
  },
};

const StyledButton = styled.button`
  border-radius: 4px;
  border: ${(props) => props.type.border};
  background-color: ${(props) => props.type.backgroundColor};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.type.hoverBackgroundColor};
    transition: background-color 0.8s;
  }
`;

const AnchorTag = styled.a`
  display: inline-block;
  color: #fff;
  font-size: 0.8rem;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
  padding: 15px 20px;
`;

const Button = ({ color, href, title }) => {
  switch (color) {
    case "green":
      return (
        <StyledButton type={buttonStyles.green}>
          <AnchorTag href={href}>{title}</AnchorTag>
        </StyledButton>
      );
    default:
      return (
        <StyledButton type={buttonStyles.default}>
          <AnchorTag href={href}>{title}</AnchorTag>
        </StyledButton>
      );
  }
};

export default Button;

Button.propTypes = {
  href: propTypes.string,
  title: propTypes.string,
  color: propTypes.string,
};
