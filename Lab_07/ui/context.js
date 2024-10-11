import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, loading: true, error: null };
    case 'FETCH_DATA_SUCCESS':
      return { ...state, data: action.payload, loading: false };
    case 'FETCH_DATA_FAILURE':
      return { ...state, error: action.payload, loading: false };
    case 'ADD_TODO':
      return { ...state, data: [...state.data, action.payload] };
    case 'EDIT_TODO':
      return {
        ...state,
        data: state.data.map(todo =>
          todo.id === action.payload.id ? action.payload : todo
        )
      };
    case 'DELETE_TODO':
      return {
        ...state,
        data: state.data.filter(todo => todo.id !== action.payload)
      };
    default:
      return state;
  }
};

const AppContext = createContext();

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: 'FETCH_DATA' });
    try {
      const response = await fetch('https://65fab81b3909a9a65b1b4dc5.mockapi.io/api/v1/todos');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonData = await response.json();
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: jsonData });
    } catch (error) {
      dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
    }
  };

  return (
    <AppContext.Provider value={{ state, dispatch, fetchData }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}