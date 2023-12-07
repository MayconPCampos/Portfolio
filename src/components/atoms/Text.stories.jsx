import Text from "./Text";

export default {
  title: "Components/Atoms/Text",
  component: Text,
};

export const Normal = {
  render: () => <Text>Texto normal</Text>,
};

export const Tiny = {
  render: () => <Text type="tiny">Texto tiny</Text>,
};

export const Big = {
  render: () => <Text type="big">Texto big</Text>,
};

export const Bold = {
  render: () => <Text type="bold">Texto bold</Text>,
};
