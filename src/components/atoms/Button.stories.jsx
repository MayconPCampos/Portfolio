import Button, { Mini } from "./Button";

export default {
  title: "Components/Atoms/Button",
  component: Button,
};

export const Primary = {
  render: () => <Button>primary</Button>,
};

export const Transparent = {
  render: () => <Button transparent={true}>primary</Button>,
};
