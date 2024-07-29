import React from 'react';

import { useNumpuzContext } from '@/context/mainContext';

import './board.scss';

const Board = () => {
  const { items } = useNumpuzContext();

  return (
    <div className = 'board'>
      { items.map((item, count) => {
          if (!item) return null;

          return <div className = { `board-item board-item-${count}` }>{ item }</div>
        })
      }
    </div>
  )
}

export default Board;