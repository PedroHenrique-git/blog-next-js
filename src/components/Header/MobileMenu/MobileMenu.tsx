import { useContext } from 'react';
import { DrawerContext } from '../../../providers/DrawerContext';
import Nav from '../../Nav/Nav';
import HeaderMobileMenu from './HeaderMobileMenu';
import { Menu, OverlayMenu } from './styles';

export default function MobileMenu() {
  const { isOpen } = useContext(DrawerContext);

  return (
    <>
      <Menu isOpen={isOpen}>
        <HeaderMobileMenu />
        <Nav />
      </Menu>
      <OverlayMenu isOpen={isOpen} />
    </>
  );
}
