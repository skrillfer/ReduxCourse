import * as actionTypes from './actionTypes';

export const addTask = (task) => ({
  type: actionTypes.ADD_TASK,
  payload: { task },
});

export const updateTask = (task) => ({
  type: actionTypes.UPDATE_TASK,
  payload: { task },
});

export const removeTask = (id) => ({
  type: actionTypes.REMOVE_TASK,
  payload: { id },
});
