import styled from "styled-components";

const sizes = {
  sm: {
    width: "130px",
    height: "200px",
    borderRadius: "80px",
  },
  md: {
    width: "300px",
    height: "300px",
    borderRadius: "30px",
  },
  lg: {
    width: "600px",
    height: "300px",
    borderRadius: "30px",
  },
  xl: {
    width: "600px",
    height: "600px",
    borderRadius: "30px",
  },
};

export const BoxStyle = styled.div`
  border: 1px solid #fff;
  max-width: ${(props) => props.size.width};
  height: ${(props) => props.size.height};
  border-radius: ${(props) => props.size.borderRadius};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Box = ({ size }) => {
  switch (size) {
    case "xl":
      return <BoxStyle size={sizes.xl}></BoxStyle>;
    case "lg":
      return <BoxStyle size={sizes.lg}></BoxStyle>;
    case "md":
      return <BoxStyle size={sizes.md}></BoxStyle>;
    default:
      return <BoxStyle size={sizes.sm}></BoxStyle>;
  }
};

export default Box;
