import './App.css'
import {
  AiOutlineLogin,
  AiOutlineLogout,
} from "react-icons/ai";
import {useState} from "react";
import TaskForm from "./components/TaskForm/";
import TaskList from "./components/TaskList/";
import Footer from "./components/Footer/";
import Header from "./components/Header/";


function App() {

const [isLogin, setIsLogin] = useState(true);
const [tasks, setTasks] = useState([]);

function addTask(task) {
  setTasks([...tasks, {...task, completed: false, id: Date.now()}]);
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
      <header className="header">
        <a href="#" className="header__logo">
          <span className="header__logo-part header__logo-part--first">TO-DO</span>
          <span className="header__logo-part header__logo-part--second">APP</span>
        </a>

        {isLogin
          ? (<a href="#" className="header__auth"><AiOutlineLogout /></a>)
          : (<a href="#" className="header__auth"><AiOutlineLogin /></a>)}
      </header>

      <main className="main">
        <div className="main__wrapper">

          <Header tasks={tasks} completeTasks={completeTasks} />

          <TaskForm addTask={addTask} />

          <TaskList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
          
          <Footer />

        </div>
      </main>
    </>
  )
}

export default App
