import React, { useMemo } from 'react';
import { useGameContext } from '@/context/mainContext';

import './info.scss';

const Info = () => {
  const { count, isGameOver } = useGameContext();

  const infoText = useMemo(() => {
    if (isGameOver) return `Congratulations you completed the game in ${count} moves.`;
    if (count === 0) return `Make the first move.`;

    return `You made ${count} moves.`
  }, [count, isGameOver]);

  const styleInfo = useMemo(() => {
    const typeClass = ['info'];

    if (isGameOver) typeClass.push('isGameOver') ;

    return typeClass.join(' ');
  }, [isGameOver]);

  return (
    <div className = { styleInfo }>
      { infoText }
    </div>
  )
}

export default Info;