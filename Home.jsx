import TaskForm from './TaskForm';

function Home({ tasks, setTasks }) {
  const addTask = (task) => {
    setTasks(prev => [...prev, task]);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Add New Task</h2>
      <TaskForm onAdd={addTask} />
    </div>
  );
}
export default Home;