// EditTask.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditTask({ tasks, setTasks }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: '', description: '' });

  useEffect(() => {
    const task = tasks.find(task => task.id === parseInt(id));
    if (task) {
      setForm({ title: task.title, description: task.description });
    }
  }, [id, tasks]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.title && form.description) {
      setTasks(tasks.map(task => task.id === parseInt(id) ? { ...task, title: form.title, description: form.description } : task));
      navigate('/tasks');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Task</h2>
      <input name="title" value={form.title} onChange={handleChange} placeholder="Task Title" />
      <input name="description" value={form.description} onChange={handleChange} placeholder="Description" />
      <button type="submit">Save Changes</button>
    </form>
  );
}
export default EditTask;