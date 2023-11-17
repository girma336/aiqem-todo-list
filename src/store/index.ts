import { configureStore, getDefaultMiddleware, Middleware } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';
import localStorageMiddleware from './thunks/middleware';

type CustomMiddleware = Middleware<{}, any>;

const middleware: CustomMiddleware[] = [
    ...getDefaultMiddleware(),
    localStorageMiddleware,
  ];
const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  middleware,
});


export default store;
