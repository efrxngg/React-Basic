import { useState, useContext } from 'react';
import { TaskContext } from '../../core/TaskContext';

function TaskForm() {
  const { createTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div className='max-w-md mx-auto'>
      <form
        className='bg-slate-900 py-10 mb-4 px-6'
        onSubmit={handleSubmit}
      >
        <h1 className='text-2xl font-bold text-white px-4 '>Create Task</h1>
        <input
          placeholder='Write your homework'
          onChange={(e) => { setTitle(e.target.value) }}
          value={title}
          autoFocus
          className='bg-slate-300 p-3 w-full mb-2'
        />
        <textarea
          placeholder='Write your description task'
          onChange={(e) => { setDescription(e.target.value) }}
          value={description}
          className='bg-slate-300 p-3 w-full mb-2'
        ></textarea>
        <button
          className='bg-indigo-500 px-3 py-1 mx-6 text-white rounded-md'
        >Save</button>
      </form>
    </div>
  )
}

export default TaskForm;