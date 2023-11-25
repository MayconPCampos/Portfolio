import GlobalStyles from "../src/styles/GlobalStyles";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (StoryFn) => (
    <>
      <GlobalStyles />
      <StoryFn />
    </>
  ),
];

export default preview;
