import styled from "styled-components";
import propTypes from "prop-types";

const Normal = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #333;
  line-height: 1.8;
`;

const Grey = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #777777;
  line-height: 1.8;
`;

const Bright = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: #fff;
  line-height: 1;
  margin: 5px 0;
`;

const Tiny = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  color: #333;
  margin: 0px;
`;

const Big = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  color: #fff;
  margin-bottom: 30px;
`;

const Bold = styled.p`
  font-size: 1.2rem;
  font-weight: 800;
  color: #fff;
  text-transform: uppercase;
`;

const Text = ({ type, children }) => {
  switch (type) {
    case "grey":
      return <Grey>{children}</Grey>;
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
