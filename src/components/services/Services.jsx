import React from 'react';
import Button from '@/components/UI/buttons/button';

import { useGameContext } from '@/context/mainContext';

import './services.scss';

const Services = () => {
  const { reloadGame, newGame, count } = useGameContext();

  return (
    <div className = "services">
      <Button onClick = { newGame }>New game</Button>
      <Button
        disabled = { count === 0 }
        onClick = { reloadGame }>
          Reload game
        </Button>
    </div>
  )
}

export default Services;