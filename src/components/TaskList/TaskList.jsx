import TaskItem from "../TaskItem/";

function TaskList( { completeTask, deleteTask, editTask, saveTask, completeTasks, activeTasks } ) {
  return (
    <ul className="main__tasks-list">
      {activeTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          completeTask={completeTask}
          editTask={editTask}
          saveTask={saveTask}
        />
      ))}
      {completeTasks.map((task) => (
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