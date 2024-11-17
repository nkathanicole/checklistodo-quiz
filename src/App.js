import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter(task => task.id !== id));
    }
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const editTask = (task) => {
    setCurrentTask(task);
  };

  const clearCurrentTask = () => {
    setCurrentTask(null);
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TaskForm 
        addTask={addTask} 
        currentTask={currentTask} 
        updateTask={updateTask} 
        clearCurrentTask={clearCurrentTask} 
      />
      <TaskList 
        tasks={tasks} 
        editTask={editTask} 
        deleteTask={deleteTask} 
        toggleComplete={toggleComplete} 
      />
    </div>
  );
};

export default App;
