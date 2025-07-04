
import TaskCard from './TaskCard';

function TaskList({ tasks, onDelete }) {
  if (tasks.length === 0) return <p>No tasks available.</p>;

  return (
    <>
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} onDelete={onDelete} />
      ))}
    </>
  );
}
export default TaskList;