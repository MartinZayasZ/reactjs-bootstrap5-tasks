import { useState, useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const ctx = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    ctx.createTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            console.log(e.target.value);
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
        />
        <textarea
          name=""
          placeholder="Escribe la descripción de la tarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button>Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
