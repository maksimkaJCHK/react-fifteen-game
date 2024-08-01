import React, { useEffect } from 'react';

import { useGameContext } from '@/context/mainContext';
import { calcNumbRow, calcNumbCol } from '@/helpers/helpers.js';

import './board.scss';

const Board = () => {
  const {
    items,
    size,
    startGame,
    moveFigure,
    isGameOver
  } = useGameContext();

  const generateStyle = (idx) => {
    const calcPosition = 100 / size;

    const top = (calcPosition * calcNumbRow(idx, size)) - calcPosition;
    const left = (calcPosition * calcNumbCol(idx, size)) - calcPosition;

    return {
      top: `${top}%`,
      left: `${left}%`
    }
  };

  useEffect(() => {
    startGame();
  }, []);

  return (
    <div className = { `board ${isGameOver ? 'stop-game' : '' }` }>
      { items.map((item, count) => {
          if (!item) return null;

          return (
            <div
              key = { item }
              className = 'board-item'
              style = { generateStyle(count) }
              onClick = { () => moveFigure(count) }
            >
              { item }
            </div>
          )
        })
      }
    </div>
  )
}

export default Board;