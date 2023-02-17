import { addTask, fetchTodo, removeTask, updateTask } from './store/tasks';
import store from './store/configureStore';

const unsubscribe = store.subscribe(() =>
  console.log('Updated', store.getState())
);

store.dispatch(addTask({ task: 'Task 1' }));
store.dispatch(addTask({ task: 'Task 2' }));
store.dispatch(updateTask({ task: { id: 1, completed: true } }));

// store.dispatch(removeTask(1));
store.dispatch(fetchTodo());

// unsubscribe();
