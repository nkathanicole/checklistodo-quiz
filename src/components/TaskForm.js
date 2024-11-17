import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, currentTask, updateTask, clearCurrentTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  useEffect(() => {
    if (currentTask) {
      setTaskName(currentTask.name);
      setTaskDescription(currentTask.description);
    } else {
      setTaskName('');
      setTaskDescription('');
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName || !taskDescription) {
      alert('Please fill in all fields');
      return;
    }

    const task = {
      id: currentTask ? currentTask.id : Date.now(),
      name: taskName,
      description: taskDescription,
      completed: currentTask ? currentTask.completed : false,
    };

    if (currentTask) {
      updateTask(task);
    } else {
      addTask(task);
    }

    clearCurrentTask();
    setTaskName('');
    setTaskDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <textarea
        placeholder="Task Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button type="submit">{currentTask ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;