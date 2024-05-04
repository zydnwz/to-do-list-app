export default function Task({ task, onToggleCompleted, onDeleteTask }) {
  const handleToggleCompleted = async () => {
    await onToggleCompleted(task._id);
  };

  const handleDeleteTask = async () => {
    await onDeleteTask(task._id);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggleCompleted}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={handleDeleteTask}>Delete</button>
    </div>
  );
}