import { createContext, useState, useContext } from "react";

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

  const createTask = (task) => {
    console.log("task!");
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
