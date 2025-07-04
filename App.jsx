
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import TaskList from './pages/TaskList';
import EditTask from './pages/EditTask';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('taskList');
    if (stored) {
      setTasks(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <BrowserRouter>
      <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
        <Link to="/">Add Task</Link> | <Link to="/tasks">View Tasks</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home tasks={tasks} setTasks={setTasks} />} />
        <Route path="/tasks" element={<TaskList tasks={tasks} onDelete={handleDelete} />} />
        <Route path="/edit/:id" element={<EditTask tasks={tasks} setTasks={setTasks} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;