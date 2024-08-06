import React from 'react';

import Wrapper from '@/components/wrapper/wrapper';
import SettingsIcon from '@/components/UI/SettingsIcon';

import { useGameContext } from '@/context/mainContext'

import './header.scss';

const Header = () => {
  return (
    <div className = "header">
      <Wrapper>
        <SettingsIcon />

        <div className="header-logo">
          React fifteen game
        </div>
      </Wrapper>
    </div>
  )
}

export default Header;