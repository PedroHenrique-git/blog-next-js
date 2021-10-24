import Link from 'next/link';
import { SITE_NAME } from '../../config/app-config';
import useWindowSize from '../../hooks/useWindowSize';
import DesktopMenu from './DesktopMenu/DesktopMenu';
import OpenClosedButton from './MobileMenu/OpenClosedButton';
import { HeaderContainer } from './styles';

export default function Header() {
  const { width } = useWindowSize();

  return (
    <HeaderContainer>
      <Link href="/">
        <a>
          <h1 className="title">{SITE_NAME}</h1>
        </a>
      </Link>
      {width >= 1025 ? <DesktopMenu /> : <OpenClosedButton />}
    </HeaderContainer>
  );
}
