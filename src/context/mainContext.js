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
  generateArr,
  bForCompareArr,
  isStopGame
} from '@/helpers/helpers.js';

const MainContext = createContext();

export const useGameContext = () => useContext(MainContext);

const initialState = {
  items: [],
  firstPosition: [],
  isGameOver: false,
  isStart: false,
  size: 4,
  count: 0,
  stopGameCondition: ''
};

const reducer = (state, { type, payload }) => {
  const { isGameOver } = state;

  if (type === 'start') {
    const { size } = state;
    const items = generateBoardItem(size);
    const stopGameCondition = bForCompareArr([...generateArr(size * size)]);

    return {
      ...state,
      items,
      stopGameCondition,
      count: 0,
      isStart: true,
      isGameOver: false,
      firstPosition: items.map((el) => el)
    }
  }

  if (type === 'move' && !isGameOver) {
    const {
      items,
      count,
      size,
      stopGameCondition
    } = state;

    const idxNull = items.findIndex((el) => el === null);

    const fIdx = items.findIndex((el) => el === payload);
    const isColInRow = calcNumbRow(idxNull, size) === calcNumbRow(fIdx, size);
    const isColInCols = calcNumbCol(idxNull, size) === calcNumbCol(fIdx, size);

    if (isColInRow || isColInCols) {
      const newItems = moveFigures({
        items,
        idxNull,
        curIdx: fIdx,
        smes: isColInCols ? size : 1
      });

      return {
        ...state,
        items: newItems,
        count: count + 1,
        isGameOver: isStopGame(newItems, stopGameCondition),
        isStart: !isStopGame(newItems, stopGameCondition),
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