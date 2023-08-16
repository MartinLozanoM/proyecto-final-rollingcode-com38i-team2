import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import { TaskCard } from "../components/TaskCard";

export const TasksPage = () => {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  if (tasks.length === 0) {
    return <h1>No hay tareas</h1>;
  }

  return (
    <div className="task-page-container-taskcards">
      {tasks.map((task) => (
        <TaskCard task={task} key={task._id} />
      ))}
    </div>
  );
};
