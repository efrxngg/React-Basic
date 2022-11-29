import TaskForm from '../components/task/TaskForm';
import TaskList from '../components/task/TaskList';

const App = () => {

  return (
    <main className=''>
      <div className='container mx-auto'>
        <TaskForm />
        <TaskList />
      </div>
    </main>
  )
};

export default App