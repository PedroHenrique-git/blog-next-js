import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const theme = {
  colors: {
    primaryFontColor: '#eeeeee',
    primaryBackgroundColor: '#1c2225',
  },
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
