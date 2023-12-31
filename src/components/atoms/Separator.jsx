import styled from "styled-components";

const Line = styled.div`
  border: 1px solid #eee;
  border-top: none;
  width: 100%;
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
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 70px;
`;
const Separator = () => <Line />;

export default Separator;
