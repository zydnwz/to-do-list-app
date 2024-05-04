import { useState } from 'react';

const TaskItem = ({ task }) => {
  const [completed, setCompleted] = useState(task.completed);

  const toggleComplete = async () => {
    try {
      const response = await fetch(`/api/tasks/${task._id}/complete`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        setCompleted(!completed);
      }
    } catch (error) {
      console.error('Error completing task:', error);
    }
  };

  const deleteTask = async () => {
    try {
      const response = await fetch(`/api/tasks/${task._id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <li>
      <input type="checkbox" checked={completed} onChange={toggleComplete} />
      <span>{task.text}</span>
      <button onClick={deleteTask}>Delete</button>
    </li>
  );
};

export default TaskItem;
