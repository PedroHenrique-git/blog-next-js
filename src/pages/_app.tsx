import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import UserProvider from '../providers/UserProvider';
import { GlobalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Component {...pageProps} />
        <GlobalStyles />
      </UserProvider>
    </ThemeProvider>
  );
}
export default MyApp;
