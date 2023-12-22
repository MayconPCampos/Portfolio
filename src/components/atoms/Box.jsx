import styled from "styled-components";
import propTypes from "prop-types";

const sizes = {
  sm: {
    width: "110px",
    height: "180px",
    borderRadius: "80px",
    borderColor: "#fff",
    padding: "25px",
    borderTopRightRadius: "80px",
    borderTopLeftRadius: "80px",
  },
  lg: {
    width: "700px",
    height: "100%",
    borderRadius: "10px",
    borderColor: "#eee",
    padding: "0px",
    borderTopRightRadius: "0px",
    borderTopLeftRadius: "0px",
  },
};

export const BoxStyle = styled.div`
  border: 1px solid transparent;
  border-color: ${(props) => props.size.borderColor};
  max-width: ${(props) => props.size.width};
  max-height: ${(props) => props.size.height};
  border-radius: ${(props) => props.size.borderRadius};
  border-top-left-radius: ${(props) => props.size.borderTopLeftRadius};
  border-top-right-radius: ${(props) => props.size.borderTopRightRadius};
  display: flex;
  row-gap: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: auto;
  padding: ${(props) => props.size.padding};
`;

export const Box = ({ size, children }) => {
  switch (size) {
    case "lg":
      return <BoxStyle size={sizes.lg}>{children}</BoxStyle>;

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
