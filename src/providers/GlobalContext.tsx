import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import DrawerProvider from './DrawerContext';

export default function GlobalContext({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DrawerProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </DrawerProvider>
  );
}
