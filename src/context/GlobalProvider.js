import React, { useContext, useReducer } from 'react';

const GlobalContext = React.createContext();

export function useGlobalContext() {
  return useContext(GlobalContext);
}

function GlobalProvider({ children }) {
  const INITIAL_STATE = {
    video: true,
  };

  function reducer(state, action) {
    switch (action) {
      case 'VIDEO_OFF':
        return { ...state, video: false };
      default:
        throw new Error('Invalid action');
    }
  }

  return (
    <GlobalContext.Provider value={useReducer(reducer, INITIAL_STATE)}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
