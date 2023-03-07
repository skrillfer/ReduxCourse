import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';
// import axios from '../utils/http';
let id = 0;

const initialState = {
  tasks: [],
  loading: false,
  error: null,
};
// export const fetchTasks = createAsyncThunk(
//   'fetchTasks',
//   async (a, { rejectWithValue }) => {
//     try {
//       const response = await axios.get('/tasks');
//       return { tasks: response.data };
//     } catch (error) {
//       return rejectWithValue({ error: error.message });
//     }
//   }
// );

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // action: function
    apiRequested: (state, action) => {
      state.loading = true;
    },
    apiRequestFailed: (state, action) => {
      console.log(action.payload);
      state.loading = false;
    },
    getTasks: (state, action) => {
      state.tasks = action.payload;
      state.loading = false;
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.task.id
      );
      state.tasks[index] = { ...state.tasks[index], ...action.payload.task };
    },
    removeTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      state.tasks.splice(index, 1);
    },
    completedTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      state.tasks[index].completed = action.payload.completed;
    },
  },
  // extraReducers: (builder) => {
  //   const { pending, fulfilled, rejected } = fetchTasks;
  //   builder
  //     .addCase(pending, (state, action) => {
  //       state.loading = true;
  //     })
  //     .addCase(fulfilled, (state, action) => {
  //       state.tasks = action.payload.tasks;
  //       state.loading = false;
  //     })
  //     .addCase(rejected, (state, action) => {
  //       state.error = action.payload.error;
  //     });
  // },
});

export const {
  apiRequested,
  apiRequestFailed,
  getTasks,
  addTask,
  removeTask,
  updateTask,
  completedTask,
} = taskSlice.actions;
export default taskSlice.reducer;

// Action creators
const url = '/tasks';
export const loadTasks = () =>
  apiCallBegan({
    url,
    method: 'GET',
    onStart: apiRequested.type,
    onSuccess: getTasks.type,
    onError: apiRequestFailed.type,
  });

export const addNewTask = (task) =>
  apiCallBegan({
    url,
    method: 'POST',
    onStart: apiRequested.type,
    onSuccess: addTask.type,
    onError: apiRequestFailed.type,
    data: task,
  });

export const updateCompleted = (task) =>
  apiCallBegan({
    url: `${url}/${task.id}`,
    method: 'PATCH',
    onStart: apiRequested.type,
    onSuccess: completedTask.type,
    onError: apiRequestFailed.type,
    data: task,
  });

export const deleteTask = (task) =>
  apiCallBegan({
    url: `${url}/${task.id}`,
    method: 'DELETE',
    onStart: apiRequested.type,
    onSuccess: removeTask.type,
    onError: apiRequestFailed.type,
  });
