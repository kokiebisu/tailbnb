import { createContext, useReducer, useState } from 'react';
import { modalReducer } from './reducers/modal';

const initialState = {
  modal: {
    menu: false,
  },
};

const Context = createContext({});

const combineReducers = (...reducers) => (state, action) => {
  for (let i = 0; i < reducers.length; i++) state = reducers[i](state, action);
  return state;
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(
    combineReducers(modalReducer),
    initialState
  );
  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };
