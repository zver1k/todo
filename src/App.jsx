import './App.css'
import {useEffect, useState} from "react";
import TaskForm from "./components/TaskForm/";
import TaskList from "./components/TaskList/";
import Footer from "./components/Footer/";
import TaskHeader from "./components/TaskHeader/";
import Header from "./components/Header/";


function App() {

const [isLogin, setIsLogin] = useState(true);
const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : [];
});

function addTask(task) {
  setTasks(prev => [
    ...prev,
    { ...task, completed: false, isEdit: false, id: crypto.randomUUID() }
  ]);
}

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks])

function deleteTask(id) {
  setTasks(tasks.filter((task) => task.id !== id));
}

function completeTask(id) {
  setTasks(tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  ));
}

function editTask(id) {
  setTasks(tasks.map(task =>
    task.id === id ? { ...task, isEdit: !task.isEdit } : task
  ));
}

  function saveTask(id, newTitle) {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, title: newTitle, isEdit: false } : task
    ));
  }

const activeTasks = tasks.filter(task => !task.completed);
const completeTasks = tasks.filter(task => task.completed);

  return (
    <>
      <Header isLogin={isLogin}/>

      <main className="main">
        <div className="main__wrapper">

          <TaskHeader
            tasks={tasks}
            completeTasks={completeTasks}
          />

          <TaskForm addTask={addTask} />

          <TaskList
            tasks={tasks}
            completeTask={completeTask}
            deleteTask={deleteTask}
            editTask={editTask}
            saveTask={saveTask}
          />
          
          <Footer />

        </div>
      </main>
    </>
  )
}

export default App
