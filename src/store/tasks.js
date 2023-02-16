// Action Types
const ADD_TASK = 'ADD_TASK';
const REMOVE_TASK = 'REMOVE_TASK';
const UPDATE_TASK = 'UPDATE_TASK';

// Actions
export const addTask = (task) => ({
  type: ADD_TASK,
  payload: { task },
});

export const updateTask = (task) => ({
  type: UPDATE_TASK,
  payload: { task },
});

export const removeTask = (id) => ({
  type: REMOVE_TASK,
  payload: { id },
});

export const fetchTodo = () => async (dispatch, getState) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const task = await response.json();
  dispatch(addTask(task.title));
};

// Reducer
let id = 0;
export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: ++id,
          task: action.payload.task,
          completed: false,
        },
      ];
    case UPDATE_TASK:
      return state.map((task) =>
        task.id === action.payload.task.id
          ? { ...task, ...action.payload.task }
          : task
      );
    case REMOVE_TASK:
      return state.filter((task) => task.id !== action.payload.id);
    default:
      return state;
  }
}
