import styled from "styled-components";

const Button = styled.button`
  border-radius: 5px;
  border: none;
  border-bottom: 2px solid #3dad86;
  padding: 15px 25px;
  color: #fff;
  font-weight: 400;
  letter-spacing: 1px;
  background-color: #68c3a3;
  width: fit-content;
  font-size: 0.8rem;
  text-transform: uppercase;
  margin-top: 30px;
  cursor: pointer;

  &:hover {
    background-color: #3dad86;
  }
`;

export default Button;
