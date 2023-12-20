import styled from "styled-components";

const ButtonStyles = {
  green: {
    color: "#fff",
    backgroundColor: "#68c3a3",
    padding: "15px 25px",
    borderColor: "#3dad86",
    hoverColor: "#fff",
    hoverBackgroundColor: "#3dad86",
  },
  transparent: {
    color: "#52b3d9",
    backgroundColor: "#fff",
    padding: "15px 25px",
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
  color: ${(props) => props.type.color};
  font-weight: 400;
  letter-spacing: 1px;
  background-color: ${(props) => props.type.backgroundColor};
  border-color: ${(props) => props.type.borderColor};
  width: fit-content;
  font-size: 0.8rem;
  text-transform: uppercase;
  margin-top: 30px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.type.hoverBackgroundColor};
    color: ${(props) => props.type.hoverColor};
  }
`;

const Button = ({ children, transparent }) => {
  if (transparent) {
    return (
      <StyledButton type={ButtonStyles.transparent}>{children}</StyledButton>
    );
  } else {
    return <StyledButton type={ButtonStyles.green}>{children}</StyledButton>;
  }
};

export default Button;
