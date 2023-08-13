import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";
import { useNavigate } from "react-router-dom";

export const TaskFormPage = () => {
  const { register, handleSubmit } = useForm();
  const { createTask } = useTasks();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    createTask(data);
    navigate("/tasks");
  });

  return (
    <div className="page-container-dos">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Titulo"
          {...register("title")}
          autoFocus
          className="page-input"
        />
        <textarea
          rows="3"
          placeholder="Descripcion"
          {...register("description")}
          className="page-input"
        ></textarea>
        <button>Guardar</button>
      </form>
    </div>
  );
};
