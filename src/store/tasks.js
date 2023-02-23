import { createSlice } from '@reduxjs/toolkit';
let id = 0;
const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    getTasks: (state, action) => {
      return action.payload.tasks;
    },
    // action: function
    addTask: (state, action) => {
      state.push({
        id: ++id,
        task: action.payload.task,
        completed: false,
      });
    },
    updateTask: (state, action) => {
      const index = state.findIndex(
        (task) => task.id === action.payload.task.id
      );
      state[index] = { ...state[index], ...action.payload.task };
    },
    removeTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state.splice(index, 1);
    },
  },
});

export const { getTasks, addTask, removeTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;