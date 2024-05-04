import { useState } from 'react';

export default function Task({ task, onToggleCompleted, onEditTask, onDeleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleToggleCompleted = async () => {
    await onToggleCompleted(task._id);
  };

  const handleEditTask = async () => {
    await onEditTask(task._id, editedText);
    setIsEditing(false);
  };

  const handleDeleteTask = async () => {
    await onDeleteTask(task._id);
  };

  const handleChange = (e) => {
    setEditedText(e.target.value);
  };

  if (isEditing) {
    return (
      <div>
        <input type="text" value={editedText} onChange={handleChange} />
        <button onClick={handleEditTask}>Save</button>
      </div>
    );
  }

  return (
    <div>
      <input type="checkbox" checked={task.completed} onChange={handleToggleCompleted} />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={handleDeleteTask}>Delete</button>
    </div>
  );
}