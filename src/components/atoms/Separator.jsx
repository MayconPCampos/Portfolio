import styled from "styled-components";

const Line = styled.div`
  border: 1px solid #999;
  border-top: none;
  width: 40px;
  align-self: center;
`;

const LittleBox = styled.div`
  height: 10px;
  width: 10px;
  transform: rotate(45deg);
  background-color: #999;
`;

const Container = styled.div`
  display: flex;
  gap: 10px;
`;
const Separator = () => (
  <Container>
    <Line />
    <LittleBox />
    <LittleBox />
    <Line />
  </Container>
);

export default Separator;
