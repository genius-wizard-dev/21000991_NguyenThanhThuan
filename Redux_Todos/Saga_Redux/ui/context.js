import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store';

export function AppProvider({ children }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

export function useApp() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  return { state, dispatch };
}
