import React from 'react';

import './settings-icon.scss';

const SettingsIcon = ({ onClick = (e) => e }) => {
  return (
    <div
      className = "settings-icon"
      onClick = { onClick }
    >
      <svg height="800px" width="800px" version="1.1" viewBox="0 0 54 54">
        <g stroke-width="0"/>
        <g stroke-linecap="round" stroke-linejoin="round"/>
        <g>
          <g>
            <path d="M27,18c-4.962,0-9,4.038-9,9s4.038,9,9,9s9-4.038,9-9S31.962,18,27,18z"/>
            <path d="M51.22,21h-2.018c-0.515-1.911-1.272-3.74-2.26-5.457l1.426-1.426c0.525-0.525,0.814-1.224,0.814-1.966 c0-0.743-0.289-1.441-0.814-1.967l-4.553-4.553c-1.05-1.049-2.881-1.051-3.933,0l-1.426,1.426C36.74,6.07,34.911,5.313,33,4.798 V2.78C33,1.247,31.753,0,30.22,0H23.78C22.247,0,21,1.247,21,2.78v2.018c-1.911,0.515-3.74,1.272-5.457,2.26l-1.426-1.426 c-1.051-1.052-2.883-1.05-3.933,0l-4.553,4.553c-0.525,0.525-0.814,1.224-0.814,1.967c0,0.742,0.289,1.44,0.814,1.966l1.426,1.426 C6.07,17.26,5.312,19.089,4.798,21H2.78C1.247,21,0,22.247,0,23.78v6.438C0,31.752,1.247,33,2.78,33h2.018 c0.515,1.911,1.272,3.74,2.26,5.457l-1.426,1.426c-0.525,0.525-0.814,1.224-0.814,1.966c0,0.743,0.289,1.441,0.814,1.967 l4.553,4.553c1.05,1.051,2.882,1.052,3.933,0l1.426-1.426c1.717,0.987,3.546,1.745,5.457,2.26v2.017C21,52.752,22.247,54,23.78,54 h6.439c1.533,0,2.78-1.248,2.78-2.781v-2.017c1.911-0.515,3.74-1.272,5.457-2.26l1.426,1.426c1.052,1.052,2.882,1.05,3.933,0 l4.553-4.553c0.525-0.525,0.814-1.224,0.814-1.967c0-0.742-0.289-1.44-0.814-1.966l-1.426-1.426 c0.987-1.717,1.745-3.546,2.26-5.457h2.018c1.533,0,2.78-1.248,2.78-2.781V23.78C54,22.247,52.753,21,51.22,21z M39,27 c0,6.617-5.383,12-12,12s-12-5.383-12-12s5.383-12,12-12S39,20.383,39,27z"/>
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SettingsIcon;