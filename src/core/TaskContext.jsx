import { createContext, useState, useEffect } from "react";
import { tasksList as data } from '../components/data/task';

export const TaskContext = createContext(); //Nombre del contexto

export const TaskContextProvider = (props) => {

  const [tasks, setTasks] = useState([]);
  useEffect(() => { setTasks(data) }, []);

  const createTask = (taskTitle, taskDescription) => {
    setTasks([...tasks, {
      id: tasks.length,
      title: taskTitle,
      description: taskDescription
    }])
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <TaskContext.Provider value={{
      tasks,
      deleteTask,
      createTask
    }}>
      {props.children}
    </TaskContext.Provider>
  );
};