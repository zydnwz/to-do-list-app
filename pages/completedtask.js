import { useState, useEffect } from 'react';
import Task from '../components/Task';

export default function CompletedTasks() {
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const fetchCompletedTasks = async () => {
      const res = await fetch('/api/tasks');
      const data = await res.json();
      const completedTasks = data.tasks.filter(task => task.completed);
      setCompletedTasks(completedTasks);
    };
    fetchCompletedTasks();
  }, []);

  return (
    <div>
      <h1>Completed Tasks</h1>
      {completedTasks.map(task => (
        <Task key={task._id} task={task} />
      ))}
    </div>
  );
}
