import React, {
  createContext,
  useContext,
  useReducer
} from "react";

import {
  generateBoardItem,
  colInRow,
  colInCols,
  moveFigures,
  isEqualArr
} from '@/helpers/helpers.js';

const MainContext = createContext();

export const useGameContext = () => useContext(MainContext);

const initialState = {
  items: [],
  isGameOver: false,
  isStart: false,
  size: 3,
  count: 0,
};

const reducer = (state, { type, payload }) => {
  if (type === 'start') {
    const { size } = state;
    const items = generateBoardItem(size);

    return {
      ...state,
      items,
      count: 0,
    }
  }

  if (type === 'move') {
    const { items, count, size } = state;

    const idxNull = items.findIndex((el) => el === null);

    const isColInRow = colInRow(idxNull, size) === colInRow(payload, size);
    const isColInCols = colInCols(idxNull, size) === colInCols(payload, size);

    if (isColInRow || isColInCols) {
      const newItems = moveFigures({
        items,
        idxNull,
        curIdx: payload,
        smes: isColInCols ? size : 1
      });
      console.log(isEqualArr(newItems));
      return {
        ...state,
        items: newItems,
        count: count + 1,
      }
    }

    return {
      ...state,
    }
  }

  return state;
};

export const Provider = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  const startGame = () => dispatch({ type: 'start' });
  const moveFigure = (idx) => dispatch({ type: 'move', payload: idx });

  return (
    <MainContext.Provider value = {{ ...state, startGame, moveFigure }} >
      { children }
    </MainContext.Provider>
  )
};