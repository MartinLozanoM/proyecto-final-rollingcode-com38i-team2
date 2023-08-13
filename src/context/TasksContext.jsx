import { createContext, useState, useContext } from "react";
import { createTaskRequest, getTasksRequest } from "../api/tasks";

const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTasks deberia ser usado con un TaskProvider");
  } else {
    return context;
  }
};

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const response = await getTasksRequest();
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async (task) => {
    console.log("creaste task!");
    const response = await createTaskRequest(task);
    console.log(response);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        getTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
