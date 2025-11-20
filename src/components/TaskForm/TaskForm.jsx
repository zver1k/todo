import {useState} from "react";
import {AiOutlinePlus} from "react-icons/ai";

function TaskForm( {addTask} ) {
  const [title, setTitle] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    addTask({title});
    if (title.trim()) {
      setTitle("");
    }
  }


  return (
    <form action="" className="main__body" onSubmit={handleSubmit}>
      <label className="main__label">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="main__input"
          type="text"
          placeholder="напишите задачу"
          required
        />
      </label>

      <button
        className="main__btn"
        type="submit">
        <AiOutlinePlus />
      </button>
    </form>
  )
}

export default TaskForm;

