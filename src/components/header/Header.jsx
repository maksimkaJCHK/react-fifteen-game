import React from 'react';

import Wrapper from '@/components/wrapper/wrapper';
import SettingsIcon from '@/components/UI/settings-icon/SettingsIcon';

import { useGameContext } from '@/context/mainContext'

import './header.scss';

const Header = () => {
  const { openSettings } = useGameContext();

  return (
    <header className = "header">
      <Wrapper>
        <SettingsIcon onClick = { openSettings } />

        <div className="header-logo">
          React fifteen game
        </div>
      </Wrapper>
    </header>
  )
}

export default Header;