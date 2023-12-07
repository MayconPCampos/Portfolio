import Box from "./Box";
import styled from "styled-components";

const DarkBackground = styled.div`
  background-color: #333;
`;

export default {
  title: "Components/Atoms/Box",
};

export const Small = {
  render: () => <Box size="sm"></Box>,
};

export const Medium = {
  render: () => <Box size="md"></Box>,
};

export const Large = {
  render: () => <Box size="lg"></Box>,
};

export const ExtraLarge = {
  render: () => <Box size="xl"></Box>,
};
