import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import NameProvider from '../providers/nameProvider';
import { GlobalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <NameProvider>
        <Component {...pageProps} />
        <GlobalStyles />
      </NameProvider>
    </ThemeProvider>
  );
}
export default MyApp;
