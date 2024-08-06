import React from 'react';

import Wrapper from '@/components/wrapper/wrapper';
import Moves from '@/components/moves/Moves';
import SettingsIcon from '@/components/UI/SettingsIcon';

import { useGameContext } from '@/context/mainContext'

import './header.scss';

const Header = () => {
  const { count } = useGameContext();

  return (
    <div className = "header">
      <Wrapper>
        <SettingsIcon />

        <div className="header-logo">
          React fifteen game
        </div>

        <Moves count = { count } />
      </Wrapper>
    </div>
  )
}

export default Header;