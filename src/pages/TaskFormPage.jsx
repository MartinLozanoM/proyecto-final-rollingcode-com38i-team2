import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export const TaskFormPage = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        console.log(task);
        setValue("title", task.title);
        setValue("description", task.description);
      }
    }
    loadTask();
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, data);
    } else {
      createTask(data);
    }
    navigate("/tasks");
  });

  return (
    <div className="page-container-uno">
      <div className="page-container-dos">
        <form onSubmit={onSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="Titulo"
            {...register("title")}
            autoFocus
            className="page-input"
          />
          <label htmlFor="description">Description</label>
          <textarea
            rows="3"
            placeholder="Descripcion"
            {...register("description")}
            className="page-input"
          ></textarea>
          <button className="task-form-button">Guardar</button>
        </form>
      </div>
    </div>
  );
};
