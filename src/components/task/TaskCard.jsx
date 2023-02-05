import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

function TaskCard({ task, cols }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-secondary text-white m-1 p-3 w-25 rounded-4">
      <h1 className="fs-1 text-uppercase">{task.title}</h1>
      <p>{task.description}</p>
      <button className="bg-danger rounded-4 text-white border-0 px-2 py-1" onClick={() => deleteTask(task.id)}>Eliminar tarea</button>
    </div>
  );
}

export default TaskCard;
