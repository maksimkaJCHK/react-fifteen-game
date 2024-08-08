import React, { useEffect } from 'react';

import { useGameContext } from '@/context/mainContext';
import { calcNumbRow, calcNumbCol } from '@/helpers/helpers.js';

import './board.scss';

const Board = () => {
  const {
    id,
    items,
    size,
    moveFigure,
    isGameOver,
    firstPosition
  } = useGameContext();

  const generateStyle = (item) => {
    const calcPosition = 100 / size;

    const idx = items.findIndex((el) => el === item);
    const top = (calcPosition * calcNumbRow(idx, size)) - calcPosition;
    const left = (calcPosition * calcNumbCol(idx, size)) - calcPosition;

    return {
      top: `${top}%`,
      left: `${left}%`
    }
  };

  const boardClass = [
    'board',
    `board-size-${size}`,
    `${isGameOver ? 'stop-game' : '' }`
  ];

  return (
    <div className = { boardClass.join(' ') }>
      { firstPosition.map((item) => {
          if (!item) return null;

          return (
            <div
              key = { item + id }
              className = 'board-item'
              style = { generateStyle(item) }
              onClick = { () => moveFigure(item) }
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