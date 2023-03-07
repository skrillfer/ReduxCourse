import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTasks } from '../store/tasks';
const Task = () => {
  const taskSlice = useSelector((state) => state.tasks);
  const { tasks, loading } = taskSlice;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTasks());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {tasks.map((task) => (
            <p key={task.id}>{task.task}</p>
          ))}
        </div>
      )}
    </>
  );
};

export default Task;
