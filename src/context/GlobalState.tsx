// src/context/GlobalState.tsx
import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { Transaction } from '../types';

interface State {
  transactions: Transaction[];
}

interface GlobalContextProps {
  state: State;
  dispatch: React.Dispatch<any>;
}

const initialState: State = {
  transactions: [],
};

const GlobalContext = createContext<GlobalContextProps>({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state: State, action: any): State => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter((t) => t.id !== action.payload),
      };
    default:
      return state;
  }
};

export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
