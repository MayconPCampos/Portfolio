import React from "react";
import styled from "styled-components";
import Text from "./Text";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  width: 100%;
`;

const Bar = styled.div`
  width: 100%;
  height: 10px;
  border: 1px solid transparent;
  border-radius: 50px;
  background-color: #eee;
  margin: 0;
`;

const Progress = styled.div`
  background-color: #3dad86;
  height: 100%;
  width: ${(props) => props.progress}%;
  border: none;
  border-radius: 50px;
`;

const ProgressBar = ({ progress }) => {
  return (
    <Container>
      <Bar>
        <Progress progress={progress}></Progress>
      </Bar>
      <Text type="tiny">{progress}%</Text>
    </Container>
  );
};

export default ProgressBar;
