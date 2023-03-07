import React from 'react';
// import AddTask from './components/AddTask';
import AddTasksClass from './components/AddTasksClass';
// import Task from './components/Task';
import TasksClass from './components/TasksClass';

const App = () => {
  return (
    <div style={{ margin: '5px', textAlign: 'center' }}>
      <AddTasksClass />
      <TasksClass />
    </div>
  );
};

export default App;
