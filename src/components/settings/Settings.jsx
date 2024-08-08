import React from 'react';
import Wrapper from '@/components/wrapper/Wrapper';
import Close from '@/components/UI/close/close';

import { useGameContext } from '@/context/mainContext';

import './settings.scss';

const Settings = () => {
  const { isSettings, closeSettings } = useGameContext();

  return (
    <div className = { `settings ${isSettings ? 'open' : ''}` }>
      <Wrapper onClick = { closeSettings }>
        <div
          className="settings-wrapper"
          onClick = { (e) => e.stopPropagation() }
        >
          <div className="settings-block">
            <Close onClick = { closeSettings } />

            <div className="settings-header">
              Size game
            </div>
            </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Settings;