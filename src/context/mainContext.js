import React, {
  createContext,
  useContext,
  useReducer
} from "react";

const MainContext = createContext();

export const useNumpuzContext = () => useContext(MainContext);

const initialState = {
  items: [1, 2, 3, null, 4, 5, 6, 7, 8, ]
};

const reducer = (state, action) => {
  return state;
};

export const Provider = ({ children }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  return (
    <MainContext.Provider value = { state } >
      { children }
    </MainContext.Provider>
  )
};