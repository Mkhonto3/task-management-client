import { useEffect, useState } from 'react';
import TaskList from '../../components/taskList';
import axios from "../../utils/api"
import React from 'react';
interface Task {
  id: string;
  title: string;
  description: string;
  // Add other fields as necessary
}

const TasksPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('/api/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Tasks</h1>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TasksPage;
