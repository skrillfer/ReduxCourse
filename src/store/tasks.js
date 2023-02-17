import { createAction } from '@reduxjs/toolkit';

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
