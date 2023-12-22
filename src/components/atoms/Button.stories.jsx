import Button, { Mini } from "./Button";

export default {
  title: "Components/Atoms/Button",
  component: Button,
};

export const Green = {
  render: () => <Button color="green">primary</Button>,
};

export const Blue = {
  render: () => <Button color="blue">primary</Button>,
};

export const Transparent = {
  render: () => <Button color="transparent">primary</Button>,
};
