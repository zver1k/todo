import {useRef, useState} from "react";
import {AiOutlinePlus} from "react-icons/ai";
import Button from "../Button/";

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
    <form className="main__body" onSubmit={handleSubmit}>
      <div className="main__field">
        <input
          ref={inputRef}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="main__input"
          type="text"
          placeholder="напишите задачу"
          required
        />
      </div>

      <Button className="main__button" type="submit">
        <AiOutlinePlus />
      </Button>

    </form>
  )
}

export default TaskForm;

