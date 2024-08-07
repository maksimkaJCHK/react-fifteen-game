import React from 'react';

import './settings-icon.scss';

const SettingsIcon = ({ onClick = (e) => e }) => {
  return (
    <div
      className = "settings-icon"
      onClick = { onClick }
    />
  )
}

export default SettingsIcon;