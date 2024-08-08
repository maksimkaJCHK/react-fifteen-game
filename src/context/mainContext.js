import React, {
  createContext,
  useContext,
  useReducer
} from "react";

import mainReducer from './mainReducer';

const MainContext = createContext();

export const useGameContext = () => useContext(MainContext);

const initialState = {
  items: [],
  firstPosition: [],
  isGameOver: false,
  isStart: false,
  size: 3,
  count: 0,
  id: null,
  isSettings: false,
  stopGameCondition: ''
};

export const Provider = ({ children }) => {
  const [ state, dispatch ] = useReducer(mainReducer, initialState);

  const newGame = () => dispatch({ type: 'newGame' });
  const reloadGame = () => dispatch({ type: 'reloadGame' });
  const moveFigure = (idx) => dispatch({ type: 'move', payload: idx });

  const openSettings = () => dispatch({ type: 'changeSettings', payload: true });
  const closeSettings = () => dispatch({ type: 'changeSettings', payload: false });

  const changeSize = (size) => dispatch({ type: 'changeSize', payload: size });

  return (
    <MainContext.Provider value = {{
      ...state,
      newGame,
      reloadGame,
      moveFigure,
      openSettings,
      closeSettings,
      changeSize
    }}>
      { children }
    </MainContext.Provider>
  )
};