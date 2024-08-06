import React from 'react';

import './settings-icon.scss';
import setImage from '@/assets/settings.svg';

const SettingsIcon = () => {
  return (
    <div
      className = "settings-icon"
      style = {{ backgroundImage: `url("${setImage}")` }}
    />
  )
}

export default SettingsIcon;