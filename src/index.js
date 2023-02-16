import { addTask, fetchTodo, removeTask, updateTask } from './store/tasks';
import store from './store/configureStore';

const unsubscribe = store.subscribe(() =>
  console.log('Updated', store.getState())
);

store.dispatch(addTask('TaskM'));
store.dispatch(addTask('TaskP'));
store.dispatch(updateTask({ id: 1, completed: true }));

// store.dispatch(removeTask(1));
store.dispatch(fetchTodo());

// unsubscribe();
