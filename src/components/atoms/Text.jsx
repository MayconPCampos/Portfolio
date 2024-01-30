import styled from "styled-components";
import PropTypes from "prop-types";

const NormalText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #333;
  line-height: 1.8;
`;

const GreyText = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: #777;
  line-height: 1.8;
`;

const WhiteText = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  color: #fff;
  margin-bottom: 30px;
`;

const Text = ({ type, children }) => {
  switch (type) {
    case "grey":
      return <GreyText>{children}</GreyText>;
    case "white":
      return <WhiteText>{children}</WhiteText>;
    default:
      return <NormalText>{children}</NormalText>;
  }
};

Text.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
};

export default Text;
