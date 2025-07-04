
import { Link } from 'react-router-dom';

function TaskCard({ task, onDelete }) {
  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <Link to={`/edit/${task.id}`} style={{ marginRight: '1rem' }}>Edit</Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
export default TaskCard;