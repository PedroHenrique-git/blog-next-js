import { styled } from '../../../styles/theme';

type isOpenType = {
  isOpen: boolean;
};

export const Button = styled.button`
  background: none;
  border: none;
  outline: none;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primaryFontColor};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OverlayMenu = styled.section<isOpenType>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  bottom: 0;
  left: 0;
  top: 0;
  right: 0;
`;

export const Menu = styled.div<isOpenType>`
  background: #fff;
  max-width: 450px;
  width: 85%;

  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;

  transition: all 0.1s ease-in-out;
  transform: ${(props) =>
    props.isOpen ? 'translate3d(0%, 0, 0)' : 'translate3d(-100%, 0, 0)'};
  z-index: 9999;

  .categories {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0.85rem;

    a {
      color: ${(props) => props.theme.colors.primaryBackgroundColor} !important;
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 25px;
    }
  }
`;

export const MobileHeaderMenu = styled.div`
  padding: 0.75rem;
  border-bottom: 1px solid #eeeeee;
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-content: center;

  .close-drawer {
    border: none;
    background: transparent;
    font-size: 2rem;
    color: #000;
    outline: none;
  }
`;
