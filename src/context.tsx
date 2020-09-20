import React from 'react';
import { createContext, useReducer, useContext } from 'react';

type Dispatch = (action: Action) => void;
type Action = { type: 'MENU_MODAL' };

type State = {
  menu: boolean;
};

type ModalProviderProps = { children: React.ReactNode };

const ModalStateContext = createContext<State | undefined>(undefined);
const ModalDispatchContext = createContext<Dispatch | undefined>(undefined);

const modalReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'MENU_MODAL':
      return { ...state, menu: !state.menu };
    default:
      return state;
  }
};

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [state, dispatch] = useReducer(modalReducer, {
    menu: false,
  });
  return (
    <ModalStateContext.Provider value={state}>
      <ModalDispatchContext.Provider value={dispatch}>
        {children}
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
};

const useModalState = () => {
  const context = useContext(ModalStateContext);
  if (!context) {
    throw new Error('useToggleState must be used within a Provider');
  }
  return context;
};

const useModalDispatch = () => {
  const context = useContext(ModalDispatchContext);
  if (!context) {
    throw new Error('useToggleDispatch must be used within a Provider');
  }
  return context;
};

export { useModalDispatch, useModalState, ModalProvider };
