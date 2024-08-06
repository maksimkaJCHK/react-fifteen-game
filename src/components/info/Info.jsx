import React from 'react';
import { useGameContext } from '@/context/mainContext';

import './info.scss';

const Info = () => {
  const { count, isGameOver } = useGameContext();

  return (
    <div className = "info">
      Congratulations you completed the game in { count } moves
    </div>
  )
}

export default Info;