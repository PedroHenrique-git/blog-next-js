import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from '../src/styles/theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
      <GlobalStyles />
    </ThemeProvider>
  )
}

const Story = ({ storyFn }) => storyFn();

const myDecorator = storyFn => <Provider><Story storyFn={storyFn} /></Provider>;

export const decorators = [myDecorator, withThemeProvider];
