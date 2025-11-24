import './App.css'
import {useState} from "react";
import TaskForm from "./components/TaskForm/";
import TaskList from "./components/TaskList/";
import Footer from "./components/Footer/";
import TaskHeader from "./components/TaskHeader/";
import Header from "./components/Header/";


function App() {

const [isLogin, setIsLogin] = useState(true);
const [tasks, setTasks] = useState([]);

function addTask(task) {
  setTasks([...tasks, {...task, completed: false, id: crypto.randomUUID()}]);
}

function deleteTask(id) {
  setTasks(tasks.filter((task) => task.id !== id));
}

function completeTask(id) {
  setTasks(tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  ));
}

const activeTasks = tasks.filter(task => !task.completed);
const completeTasks = tasks.filter(task => task.completed);

  return (
    <>
      <Header isLogin={isLogin}/>

      <main className="main">
        <div className="main__wrapper">

          <TaskHeader tasks={tasks} completeTasks={completeTasks} />

          <TaskForm addTask={addTask} />

          <TaskList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
          
          <Footer />

        </div>
      </main>
    </>
  )
}

export default App
