import React, { memo } from 'react';

const Board = memo(({
  boardClass,
  firstPosition,
  idMemo,
  itemClass,
  genItemStyle,
  moveFigure
}) => {

  return (
    <div className = { boardClass }>
      { firstPosition.map((item, count) => {
          if (!item) return null;

          return (
            <div
              key = { item + idMemo }
              className = { itemClass[count] }
              style = { genItemStyle[count] }
              onClick = { () => moveFigure(item) }
            >
              { item }
            </div>
          )
        })
      }
    </div>
  )
});

export default Board;