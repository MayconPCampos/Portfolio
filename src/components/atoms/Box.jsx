import styled from "styled-components";
import propTypes from "prop-types";

const sizes = {
  sm: {
    width: "130px",
    height: "200px",
    borderRadius: "80px",
    borderColor: "#fff",
    padding: "25px",
  },
  md: {
    width: "337px",
    height: "168px",
    borderRadius: "30px",
    borderColor: "#bbb",
    padding: "0px",
  },
  lg: {
    width: "600px",
    height: "337px",
    borderRadius: "30px",
    borderColor: "#bbb",
    padding: "0px",
  },
  xl: {
    width: "400px",
    height: "1000px",
    borderRadius: "10px",
    borderColor: "#bbb",
    padding: "0px",
  },
};

export const BoxStyle = styled.div`
  border: 1px solid #bbb;
  border-color: ${(props) => props.size.borderColor};
  max-width: ${(props) => props.size.width};
  max-height: ${(props) => props.size.height};
  border-radius: ${(props) => props.size.borderRadius};
  display: flex;
  row-gap: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: ${(props) => props.size.padding};
`;

export const Box = ({ size, children }) => {
  switch (size) {
    case "xl":
      return <BoxStyle size={sizes.xl}>{children}</BoxStyle>;
    case "lg":
      return <BoxStyle size={sizes.lg}>{children}</BoxStyle>;
    case "md":
      return <BoxStyle size={sizes.md}>{children}</BoxStyle>;
    default:
      return <BoxStyle size={sizes.sm}>{children}</BoxStyle>;
  }
};

Box.defaultProps = {
  size: "md",
};

Box.propTypes = {
  size: propTypes.string,
};

export default Box;
