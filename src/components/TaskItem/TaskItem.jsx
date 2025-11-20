import {FiEdit} from "react-icons/fi";
import {AiOutlineClose} from "react-icons/ai";

function TaskItem({task, completeTask, deleteTask}) {
  const { id, title, completed } = task;
  return (
        <li className="main__task">
          <button
            onClick={() => completeTask(id)}
            className={`main__task-complete ${completed ? "main__task-complete--done" : ""}`}
          >
          </button>

          <span
            className={`main__task-text ${completed ? "main__task-text--done" : ""}`}
          >
            {title}
          </span>

          <div className="main__task-buttons">
            <button
              className="main__task-edit"
            >
              <FiEdit />
            </button>

            <button
              onClick={() => deleteTask(id)}
              className="main__task-remove"
            >
              <AiOutlineClose />
            </button>
          </div>
        </li>

  )
}

export default TaskItem
    