import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './tasks';
import employeeReducer from './employees';
import logger from 'redux-logger';
import error from './middleware/error';

const store = configureStore({
  reducer: { tasks: taskReducer, employees: employeeReducer },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    logger,
    error,
  ],
});

export default store;
