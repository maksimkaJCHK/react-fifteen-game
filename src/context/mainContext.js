import React, {
  createContext,
  useContext,
  useReducer
} from "react";

import {
  generateBoardItem,
  calcNumbRow,
  calcNumbCol,
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
  const { isGameOver } = state;

  if (type === 'start') {
    const { size } = state;
    const items = generateBoardItem(size);

    return {
      ...state,
      items,
      count: 0,
      isStart: true,
      isGameOver: false
    }
  }

  if (type === 'move' && !isGameOver) {
    const { items, count, size, isGameOver } = state;

    const idxNull = items.findIndex((el) => el === null);

    const isColInRow = calcNumbRow(idxNull, size) === calcNumbRow(payload, size);
    const isColInCols = calcNumbCol(idxNull, size) === calcNumbCol(payload, size);

    if (isColInRow || isColInCols) {
      const newItems = moveFigures({
        items,
        idxNull,
        curIdx: payload,
        smes: isColInCols ? size : 1
      });

      return {
        ...state,
        items: newItems,
        count: count + 1,
        isGameOver: isEqualArr(newItems),
        isStart: !isEqualArr(newItems),
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