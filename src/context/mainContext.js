import React, {
  createContext,
  useContext,
  useReducer
} from "react";

import { generateBoardItem } from '@/helpers/helpers.js';

const MainContext = createContext();

export const useGameContext = () => useContext(MainContext);

const initialState = {
  items: [],
  isGameOver: false,
  isStart: false,
  size: 3
};

const reducer = (state, { type, payload }) => {
  if (type === 'start') {
    const { size } = state;
    const items = generateBoardItem(size);

    return {
      ...state,
      items
    }
  }
  return state;
};

export const Provider = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  const startGame = () => dispatch({ type: 'start' });

  return (
    <MainContext.Provider value = {{ ...state, startGame }} >
      { children }
    </MainContext.Provider>
  )
};