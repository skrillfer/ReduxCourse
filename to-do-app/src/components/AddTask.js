import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewTask } from '../store/tasks';

const AddTask = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addNewTask({
        task,
      })
    );
    setTask('');
  };
  return (
    <>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={task}
          placeholder='Enter a new task...'
          onChange={(e) => setTask(e.target.value)}
        />
        <button type='submit'>Add task</button>
      </form>
    </>
  );
};

export default AddTask;
