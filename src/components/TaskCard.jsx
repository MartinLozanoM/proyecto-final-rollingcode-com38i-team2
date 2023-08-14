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
            className="bg-danger text-white p-1 mb-1 text-white fw-bold"
          >
            Eliminar
          </button>
          <Link
            to={`/tasks/${task._id}`}
            className="bg-primary text-white p-1 mb-1 text-white fw-bold"
          >
            Editar
          </Link>
        </div>
      </header>
      <p>{task.description}</p>
      <p>{new Date(task.date).toLocaleDateString()}</p>
    </div>
  );
};
