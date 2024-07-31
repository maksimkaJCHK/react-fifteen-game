import React, { useEffect } from 'react';

import { useGameContext } from '@/context/mainContext';

import './board.scss';

const Board = () => {
  const { items, startGame, moveFigure } = useGameContext();

  useEffect(() => {
    startGame()
  }, []);

  return (
    <div className = 'board'>
      { items.map((item, count) => {
          if (!item) return null;

          return <div
            key = { count }
            className = { `board-item board-item-${count}` }
            onClick = { () => moveFigure(count) }
          >
            { item }
          </div>
        })
      }
    </div>
  )
}

export default Board;