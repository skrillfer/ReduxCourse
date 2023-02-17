import { createAction, createReducer } from '@reduxjs/toolkit';

// Actions
export const addTask = createAction('ADD_TASK');
export const updateTask = createAction('UPDATE_TASK');
export const removeTask = createAction('REMOVE_TASK');

export const fetchTodo = () => async (dispatch, getState) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const task = await response.json();
  dispatch(addTask({ task: task.title }));
};

// Reducer
let id = 0;

createReducer([], {
  [addTask.type]: (state, action) => {
    state.push({
      id: ++id,
      task: action.payload.task,
      completed: false,
    });
  },
  [updateTask.type]: (state, action) => {
    const index = state.findIndex((task) => task.id === action.payload.id);
    state[index] = { ...taskToUpdate, ...task };
  },
  [removeTask.type]: (state, action) => {
    const index = state.findIndex((task) => task.id === action.payload.id);
    state.splice(index, 1);
  },
});

export default function reducer(state = [], action) {
  switch (action.type) {
    case addTask.type:
      return [
        ...state,
        {
          id: ++id,
          task: action.payload.task,
          completed: false,
        },
      ];
    case updateTask.type:
      return state.map((task) =>
        task.id === action.payload.task.id
          ? { ...task, ...action.payload.task }
          : task
      );
    case removeTask.type:
      return state.filter((task) => task.id !== action.payload.id);
    default:
      return state;
  }
}
