import type { AppProps } from 'next/app';
import GlobalContext from '../providers/GlobalContext';
import { GlobalStyles } from '../styles/global-styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalContext>
      <Component {...pageProps} />
      <GlobalStyles />
    </GlobalContext>
  );
}
export default MyApp;
