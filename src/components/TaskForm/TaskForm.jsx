import {useRef, useState} from "react";
import {AiOutlinePlus} from "react-icons/ai";

function TaskForm( {addTask} ) {
  const [title, setTitle] = useState("");
  const inputRef = useRef(null);
  function handleSubmit(e) {
    e.preventDefault();
    inputRef.current?.focus();
    addTask({title});
    if (title.trim()) {
      setTitle("");
    }
  }


  return (
    <form action="" className="main__body" onSubmit={handleSubmit}>
      <label className="main__label">
        <input
          ref={inputRef}
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

