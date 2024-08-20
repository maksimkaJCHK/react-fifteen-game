import React, { useMemo, useCallback } from 'react';

import Board from './Board';

import { useGameContext } from '@/context/mainContext';
import { calcNumbRow, calcNumbCol } from '@/helpers/helpers.js';

import './board.scss';

const BoardContainer = () => {
  const {
    id,
    items,
    size,
    isGameOver,
    firstPosition,
    moveFigure,
  } = useGameContext();

  const idMemo = useMemo(() => id, [id]);
  const sizeMemo = useMemo(() => size, [size]);

  const generateStyle = (item) => {
    if (!item) {
      return {
        top: '0%',
        left: '0%'
      }
    }

    const calcPosition = 100 / sizeMemo;

    const idx = items.findIndex((el) => el === item);
    const top = (calcPosition * calcNumbRow(idx, sizeMemo)) - calcPosition;
    const left = (calcPosition * calcNumbCol(idx, sizeMemo)) - calcPosition;

    return {
      top: `${top}%`,
      left: `${left}%`
    }
  };

  const genItemStyle = useMemo(() => firstPosition.map((item) => generateStyle(item)), [items, firstPosition]);

  const itemClass = useMemo(() => {
    const isCompleted = items.filter((item, count) => item === count + 1);

    return firstPosition.map((item) => {
      const className = ['board-item'];

      if (isCompleted.indexOf(item) !== -1) className.push('completed');

      return className.join(' ');
    });
  }, [items, firstPosition]);

  const boardClass = useMemo(() => {
    return [
      'board',
      `board-size-${size}`,
      `${isGameOver ? 'stop-game' : '' }`
    ].join(' ');
  }, [size, isGameOver]);

  const moveFigureMemo = useCallback((idx) => moveFigure(idx), []);

  return <Board
    boardClass = { boardClass }
    firstPosition = { firstPosition }
    idMemo = { idMemo }
    itemClass = { itemClass }
    genItemStyle = { genItemStyle }
    moveFigure = { moveFigureMemo }
  />
}

export default BoardContainer;