import { useContext } from "react";
import { TaskContext } from "../../core/TaskContext";

const TaskCard = ({ task }) => {

  const { deleteTask } = useContext(TaskContext);

  const showMessage = (msg) => {
    console.log(`${msg} ${task.id}`);
  };
  return (
    <div className="bg-slate-900 py-4 px-4 rounded-md">
      <h2 className="text-xl text-white font-bold capitalize">{task.title}</h2>
      <p className="text-gray-300 text-sm">{task.description}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md text-white mt-4 hover:bg-red-400"
        onClick={() => { showMessage("Deleting ID: "); deleteTask(task.id) }}
      >Delete Homework</button>
    </div>
  );
};

export default TaskCard;