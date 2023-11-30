import styled from "styled-components";
import propTypes from "prop-types";

const Normal = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #ccc;
`;

const Tiny = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
  color: #fff;
`;

const Big = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
`;

const Text = ({ type, children }) => {
  if (type === "tiny") {
    return <Tiny>{children}</Tiny>;
  } else if (type === "big") {
    return <Big>{children}</Big>;
  } else {
    return <Normal>{children}</Normal>;
  }
};

Text.propTypes = {
  type: propTypes.string,
  children: propTypes.node,
};

export default Text;
