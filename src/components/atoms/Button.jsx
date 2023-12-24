import styled from "styled-components";
import propTypes from "prop-types";

const ButtonStyles = {
  green: {
    color: "#fff",
    backgroundColor: "#68c3a3",
    padding: "15px 25px",
    borderColor: "#3dad86",
    hoverColor: "#fff",
    hoverBackgroundColor: "#3dad86",
  },
  blue: {
    color: "#fff",
    backgroundColor: "#52b3d9",
    padding: "15px 25px",
    borderColor: "#0c83b3",
    hoverColor: "#fff",
    hoverBackgroundColor: "#0c83b3",
  },
  transparent: {
    color: "#52b3d9",
    backgroundColor: "#fff",
    padding: "3px",
    borderColor: "#fff",
    hoverColor: "#0c83b3",
    hoverBackgroundColor: "transparent",
  },
};

const StyledButton = styled.button`
  border-radius: 5px;
  border: none;
  border-bottom: 2px solid #3dad86;
  padding: ${(props) => props.type.padding};

  font-weight: 400;
  letter-spacing: 1px;
  background-color: ${(props) => props.type.backgroundColor};
  border-color: ${(props) => props.type.borderColor};
  width: fit-content;
  font-size: 0.8rem;
  text-transform: uppercase;
  margin-top: 30px;
  cursor: pointer;

  a {
    color: ${(props) => props.type.color};
    text-decoration: none;
  }

  &:hover {
    background-color: ${(props) => props.type.hoverBackgroundColor};
    color: ${(props) => props.type.hoverColor};
  }
`;

const Button = ({ children, color }) => {
  if (color === "transparent") {
    return (
      <StyledButton type={ButtonStyles.transparent}>{children}</StyledButton>
    );
  } else if (color === "green") {
    return <StyledButton type={ButtonStyles.green}>{children}</StyledButton>;
  } else if (color === "blue") {
    return <StyledButton type={ButtonStyles.blue}>{children}</StyledButton>;
  }
};

export default Button;

Button.defaultProps = {
  color: undefined,
  children: undefined,
};

Button.propTypes = {
  color: propTypes.string,
  children: propTypes.node,
};
