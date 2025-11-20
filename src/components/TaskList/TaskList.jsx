import TaskItem from "../TaskItem/";

function TaskList( {tasks, completeTask, deleteTask } ) {
  return (
    <ul className="main__tasks-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
      ))}
    </ul>
  )
}

export default TaskList