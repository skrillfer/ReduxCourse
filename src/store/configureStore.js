import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import taskReducer from './tasks';
import employeeReducer from './employees';
import log from '../middleware/log';

const store = configureStore({
  reducer: { tasks: taskReducer, employees: employeeReducer },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), log],
});

export default store;
