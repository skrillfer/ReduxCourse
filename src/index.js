import store from './store/configureStore';
import {
  addNewTask,
  deleteTask,
  loadTasks,
  updateCompleted,
} from './store/tasks';
store.dispatch(loadTasks());
store.dispatch(addNewTask({ task: 'Created from fronted' }));
store.dispatch(updateCompleted({ id: 6, completed: true }));
store.dispatch(deleteTask({ id: 1 }));

// const gettingTasks = async () => {
//   // calling api
//   try {
//     const response = await axios.get('http://localhost:5500/api/tasks');
//     console.log(response);
//     store.dispatch(getTasks({ tasks: response.data }));
//   } catch (error) {
//     store.dispatch({ type: 'SHOW_ERROR', payload: { error: error.message } });
//   }
// };
// gettingTasks();
