import useWindowSize from '../../hooks/useWindowSize';
import DesktopMenu from './DesktopMenu/DesktopMenu';
import OpenClosedButton from './MobileMenu/OpenClosedButton';
import { HeaderContainer } from './styles';

export default function Header() {
  const { width } = useWindowSize();

  return (
    <HeaderContainer>
      <h1 className="title">Blog next js</h1>
      {width >= 1025 ? <DesktopMenu /> : <OpenClosedButton />}
    </HeaderContainer>
  );
}
