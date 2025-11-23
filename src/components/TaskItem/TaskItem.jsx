import {FiEdit} from "react-icons/fi";
import {AiOutlineClose} from "react-icons/ai";
import Button from "../Button/";

function TaskItem({task, completeTask, deleteTask}) {
  const { id, title, completed } = task;
  return (
        <li className="main__task">
          <Button
            onClick={() => completeTask(id)}
            className={`main__task-complete ${completed ? "main__task-complete--done" : ""}`}
          >
          </Button>

          <span
            className={`main__task-text ${completed ? "main__task-text--done" : ""}`}
          >
            {title}
          </span>

          <div className="main__task-buttons">

            <Button className="main__task-edit">
              <FiEdit />
            </Button>

            <Button
              onClick={() => deleteTask(id)}
              className="main__task-remove"
            >
              <AiOutlineClose />
            </Button>
          </div>
        </li>

  )
}

export default TaskItem
    