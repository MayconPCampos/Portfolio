import styled from "styled-components";
import propTypes from "prop-types";

const Normal = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: #333;
  line-height: 1.5;
`;

const Bright = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: #fff;
  line-height: 1.5;
`;

const Tiny = styled.p`
  font-size: 0.8rem;
  font-weight: 400;
  color: #bbb;
`;

const Big = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  color: #333;
`;

const Bold = styled.p`
  font-size: 1.2rem;
  font-weight: 800;
  color: #fff;
  text-transform: uppercase;
`;

const Text = ({ type, children }) => {
  switch (type) {
    case "bright":
      return <Bright>{children}</Bright>;
    case "tiny":
      return <Tiny>{children}</Tiny>;
    case "big":
      return <Big>{children}</Big>;
    case "bold":
      return <Bold>{children}</Bold>;
    default:
      return <Normal>{children}</Normal>;
  }
};

Text.propTypes = {
  type: propTypes.string,
  children: propTypes.node,
};

export default Text;
