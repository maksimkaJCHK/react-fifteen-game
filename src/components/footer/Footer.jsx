import React from 'react';
import Wrapper from '@/components/wrapper/wrapper';

import './footer.scss';

const Footer = () => {
  return (
    <footer className = "footer">
      <Wrapper>
        <a
          href="https://github.com/maksimkaJCHK/react-fifteen-game"
          target="_blank"
          className="footer-repo"
        >
          game repository
        </a>
      </Wrapper>
    </footer>
  )
}

export default Footer;