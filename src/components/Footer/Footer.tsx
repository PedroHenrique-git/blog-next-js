import { SiNetlify, SiNextdotjs } from 'react-icons/si';
import { FooterContainer } from './styles';

export default function Footer() {
  return (
    <FooterContainer>
      <p className="message">
        Made by{' '}
        <a
          href="https://github.com/PedroHenrique-git"
          target="_blank"
          rel="noreferrer"
        >
          Pedro henrique
        </a>
      </p>

      <div className="informations">
        <div className="informations-deploy">
          <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
            deploy by <SiNetlify />
          </a>
        </div>
        <div className="informations-developed">
          <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
            developed with <SiNextdotjs />
          </a>
        </div>
      </div>
    </FooterContainer>
  );
}
