import { useState, useEffect } from 'react';
import AddTaskForm from '../components/AddTaskForm';
import Task from './Task';
import './TodoList.css';

export default function TodoList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch('/api/tasks');
      const data = await res.json();
      setTasks(data.tasks);
    };
    fetchTasks();
  }, []);

  const handleAddTask = async (text) => {
    const res = await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
    const data = await res.json();
    setTasks([...tasks, data.task]);
  };

  const handleToggleCompleted = async (taskId) => {
    await fetch(`/api/tasks?taskId=${taskId}`, { method: 'PUT' });
    setTasks(
      tasks.map((task) =>
        task._id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleEditTask = async (taskId, newText) => {
    await fetch(`/api/tasks?taskId=${taskId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: newText }),
    });
    setTasks(
      tasks.map((task) =>
        task._id === taskId ? { ...task, text: newText } : task
      )
    );
  };

  const handleDeleteTask = async (taskId) => {
    await fetch(`/api/tasks?taskId=${taskId}`, { method: 'DELETE' });
    setTasks(tasks.filter((task) => task._id !== taskId));
  };

  return (
    <div>
      <AddTaskForm onAddTask={handleAddTask} />
      {tasks.map((task) => (
        <Task
          key={task._id}
          task={task}
          onToggleCompleted={handleToggleCompleted}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
        />
      ))}
    </div>
  );
}