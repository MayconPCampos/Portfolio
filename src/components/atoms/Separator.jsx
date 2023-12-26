import styled from "styled-components";

const Line = styled.div`
  border: 1px solid #ddd;
  border-top: none;
  width: 40px;
  align-self: center;
`;

const LittleBox = styled.div`
  height: 10px;
  width: 10px;
  transform: rotate(45deg);
  background-color: #ddd;
`;

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 70px;
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
