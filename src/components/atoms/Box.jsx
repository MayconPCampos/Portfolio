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
  lg: {
    width: "600px",
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
