import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  border-radius: 4px;
  border: 1px solid #fff;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

const ButtonLink = styled.a`
  display: inline-block;
  color: #fff;
  font-size: 0.8rem;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
  padding: 15px 20px;
`;

const Button = ({ color, href, title, target }) => {
  return (
    <StyledButton color={color}>
      <ButtonLink href={href} target={target}>
        {title}
      </ButtonLink>
    </StyledButton>
  );
};

Button.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
  target: PropTypes.string,
};

Button.defaultProps = {
  href: undefined,
  title: undefined,
  color: undefined,
  target: "_blank",
};

export default Button;
