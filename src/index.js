import { addTask, removeTask } from './action';
import store from './store';

const unsubscribe = store.subscribe(() =>
  console.log('Updated', store.getState())
);

store.dispatch(addTask('Task1'));
console.log(store.getState());
store.dispatch(removeTask(1));
console.log(store.getState());

unsubscribe();
store.dispatch(addTask('Task2'));
console.log(store.getState());
