import { Middleware } from '@reduxjs/toolkit';
import { RootState } from '../types';



const localStorageMiddleware: Middleware<{}, RootState> = (store) => (next) => (action) => {
  const result = next(action);

  const { tasks } = store.getState().tasks;
  localStorage.setItem('tasks', JSON.stringify(tasks));

  return result;
};

export default localStorageMiddleware;