import TaskItem from "../TaskItem/";

function TaskList( {tasks, completeTask, deleteTask, editTask, saveTask } ) {
  return (
    <ul className="main__tasks-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          completeTask={completeTask}
          editTask={editTask}
          saveTask={saveTask}
        />
      ))}
    </ul>
  )
}

export default TaskList