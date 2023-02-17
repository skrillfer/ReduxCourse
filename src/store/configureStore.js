import taskReducer from './tasks';
import employeeReducer from './employees';

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({ reducer: { taskReducer, employeeReducer } });

export default store;
