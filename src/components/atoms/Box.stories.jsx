import Box from "./Box";

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
