import { addTask, removeTask, updateTask } from './action';
import store from './store';

const unsubscribe = store.subscribe(() =>
  console.log('Updated', store.getState())
);

store.dispatch(addTask('Task1'));
store.dispatch(updateTask({ id: 1, completed: true }));

unsubscribe();
