import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../utils/http';
let id = 0;

const initialState = {
  tasks: [],
  loading: false,
  error: null,
};
export const fetchTasks = createAsyncThunk(
  'fetchTasks',
  async (a, { rejectWithValue }) => {
    try {
      const response = await axios.get('/tasks');
      return { tasks: response.data };
    } catch (error) {
      return rejectWithValue({ error: error.message });
    }
  }
);

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // action: function
    getTasks: (state, action) => {
      state.tasks = action.payload.tasks;
    },
    addTask: (state, action) => {
      state.tasks.push({
        id: ++id,
        task: action.payload.task,
        completed: false,
      });
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
  },
  extraReducers: (builder) => {
    const { pending, fulfilled, rejected } = fetchTasks;
    builder
      .addCase(pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fulfilled, (state, action) => {
        state.tasks = action.payload.tasks;
        state.loading = false;
      })
      .addCase(rejected, (state, action) => {
        state.error = action.payload.error;
      });
  },
});

export const { getTasks, addTask, removeTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
