import React from 'react';
import Button from '@/components/buttons/button.jsx';

import { useGameContext } from '@/context/mainContext.js';

import './services.scss';

const Services = () => {
  const { reloadGame, newGame } = useGameContext();

  return (
    <div className = "services">
      <Button onClick = { newGame }>New game</Button>
      <Button onClick = { reloadGame }>Reload game</Button>
    </div>
  )
}

export default Services;