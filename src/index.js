import { addTask, removeTask, updateTask } from './store/tasks';
import store from './store/configureStore';

const unsubscribe = store.subscribe(() =>
  console.log('Updated', store.getState())
);

store.dispatch(addTask('Task1'));
store.dispatch(updateTask({ id: 1, completed: true }));

unsubscribe();
