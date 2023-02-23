import axios from 'axios';
import store from './store/configureStore';
import { getTasks } from './store/tasks';

const gettingTasks = async () => {
  // calling api
  try {
    const response = await axios.get('http://localhost:5500/api/tasks');
    console.log(response);
    store.dispatch(getTasks({ tasks: response.data }));
  } catch (error) {
    store.dispatch({ type: 'SHOW_ERROR', payload: { error: error.message } });
  }
};
gettingTasks();
