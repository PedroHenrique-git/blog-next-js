import { useContext } from 'react';
import { IoMdClose } from 'react-icons/io';
import { DrawerContext } from '../../../providers/DrawerContext';
import { MobileHeaderMenu } from './styles';

export default function HeaderMobileMenu() {
  const { setIsOpen } = useContext(DrawerContext);

  const handleClick = () => {
    const body = document.body;
    setIsOpen(false);
    body.style.overflowY = 'auto';
  };

  return (
    <MobileHeaderMenu>
      <button onClick={handleClick} className="close-drawer">
        <IoMdClose />
      </button>
    </MobileHeaderMenu>
  );
}
