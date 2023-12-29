import Text from "./Text";
import StoriesBackground from "./Background";

export default {
  title: "Components/Atoms/Text",
  component: Text,
};

export const Normal = {
  render: () => <Text>Texto normal</Text>,
};

export const Bright = {
  render: () => (
    <StoriesBackground>
      <Text type="bright">Texto normal</Text>
    </StoriesBackground>
  ),
};

export const Tiny = {
  render: () => <Text type="tiny">Texto tiny</Text>,
};

export const Big = {
  render: () => <Text type="big">Texto big</Text>,
};

export const Bold = {
  render: () => (
    <StoriesBackground>
      <Text type="bold">Texto bold</Text>
    </StoriesBackground>
  ),
};

export const Number = {
  render: () => <Text type="number">123456789</Text>,
};
