import reducer from './tasks';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({ reducer });

export default store;
