import GridContainer from "./Grid";
import styled from "styled-components";

export default {
  title: "Components/Atoms/Grid",
  component: GridContainer,
};

const ExampleBox = styled.div`
  width: 100%;
  height: 150px;
  background-color: #324c85;
  border-radius: 10px;
`;

export const Example = {
  render: () => (
    <GridContainer sm={2} md={4} lg={6} xl={8}>
      <ExampleBox />
      <ExampleBox />
      <ExampleBox />
      <ExampleBox />
      <ExampleBox />
      <ExampleBox />
      <ExampleBox />
      <ExampleBox />
    </GridContainer>
  ),
};
