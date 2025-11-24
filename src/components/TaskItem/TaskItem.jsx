import {FiEdit} from "react-icons/fi";
import {AiOutlineClose, AiOutlineSave} from "react-icons/ai";
import Button from "../Button/";
import {useState} from "react";

function TaskItem({ task, completeTask, deleteTask, editTask, saveTask }) {
  const { id, title, completed, isEdit } = task;
  const [tempTitle, setTempTitle] = useState(title);
  return (
        <li className="main__task">
          <Button
            onClick={() => completeTask(id)}
            className={`main__task-complete ${completed ? "main__task-complete--done" : ""}`}
          >
          </Button>

          {!isEdit && (
            <span
              className={`main__task-text ${
                completed ? "main__task-text--done" : ""
              }`}
            >
              {title}
            </span>
          )}

          {isEdit && (
            <input
              value={tempTitle}
              onChange={e => setTempTitle(e.target.value)}
              autoFocus
            />
          )}

          <div className="main__task-buttons">

            {!isEdit && (
              <Button
                onClick={() => editTask(id)}
                className="main__task-edit"
              >
                <FiEdit />
              </Button>
            )}

            {isEdit && (
              <Button
                onClick={() => saveTask(id, tempTitle)}
                className="main__task-edit"
              >
                <AiOutlineSave />
              </Button>
            )}

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
    