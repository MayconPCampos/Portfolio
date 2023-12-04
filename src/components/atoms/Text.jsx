import styled from "styled-components";
import propTypes from "prop-types";

const Normal = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: #333;
`;

const Tiny = styled.p`
  font-size: 0.8rem;
  font-weight: 400;
  color: #333;
`;

const Big = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  color: #333;
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
