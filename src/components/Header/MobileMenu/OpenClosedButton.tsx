import { useContext } from 'react';
import { IoMdMenu } from 'react-icons/io';
import { DrawerContext } from '../../../providers/DrawerContext';
import MobileMenu from './MobileMenu';
import { Button } from './styles';

export default function OpenClosedButton() {
  const { isOpen, setIsOpen } = useContext(DrawerContext);

  const handleClick = () => {
    const body = document.body;
    setIsOpen(!isOpen);
    body.style.overflowY = 'hidden';
  };

  return (
    <>
      <Button onClick={handleClick}>
        <IoMdMenu />
      </Button>
      <MobileMenu />
    </>
  );
}
