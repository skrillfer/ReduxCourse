import { addTask, removeTask } from './action';
import store from './store';

store.dispatch(addTask('Task1'));
store.dispatch(removeTask(1));
console.log(store.getState());
