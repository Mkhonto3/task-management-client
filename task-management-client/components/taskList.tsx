import React from "react";

interface Task {
    id: string;
    title: string;
    description: string;
    // Add other fields as necessary
  }
  
  interface TaskListProps {
    tasks: Task[];
  }
  
  const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
    return (
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <div>{task.title}</div>
            <div>{task.description}</div>
          </li>
        ))}
      </ul>
    );
  };
  
  export default TaskList;
  