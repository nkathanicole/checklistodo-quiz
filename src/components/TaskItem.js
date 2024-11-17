import React from 'react';

const TaskItem = ({ task, editTask, deleteTask, toggleComplete }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <h3 onClick={() => editTask(task)}>{task.name}</h3>
      <p>{task.description}</p>
      <button onClick={() => toggleComplete(task.id)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;