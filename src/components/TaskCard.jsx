import { useTasks } from "../context/TasksContext";
import { Link } from "react-router-dom";

export const TaskCard = ({ task }) => {
  const { deleteTask } = useTasks();

  return (
    <div className="task-card-container">
      <header className="task-card-header">
        <h1 className="page-titulo">{task.title}</h1>
        <div className="task-card-buttons-container">
          <button
            onClick={() => {
              deleteTask(task._id);
            }}
          >
            Delete
          </button>
          <Link to={`/tasks/${task._id}`}>Edit</Link>
        </div>
      </header>
      <p>{task.description}</p>
      <p>{new Date(task.date).toLocaleDateString()}</p>
    </div>
  );
};
