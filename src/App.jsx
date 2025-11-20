import './App.css'
import {
  AiOutlineLogin,
  AiOutlineLogout,
} from "react-icons/ai";
import {useState} from "react";
import TaskForm from "./components/TaskForm/";
import TaskList from "./components/TaskList/";


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

          <div className="main__header">
            <div className="main__header-title">
              <h2 className="main__title">Выполнено задач</h2>
              {completeTasks.length === 0
            ?  (<h3 className="main__subtitle">ты сможешь</h3>)
            :  (<h3 className="main__subtitle">так держать</h3>)}
            </div>

            {/* Счётчик задач */}
            <div className="main__tasks-count">
              {completeTasks.length}/{tasks.length}
            </div>
          </div>

          <TaskForm addTask={addTask} />

          <TaskList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
          
          <footer className="footer">
            <div className="main__footer">
              <a href="https://damirmedia.ru">
                <img
                  className="footer__logo"
                  src="https://damirmedia.ru/logo.png"
                  alt="Логотип разработчика DamirMedia"
                  width="140"
                  loading="lazy"
                />
              </a>
            </div>
          </footer>

        </div>
      </main>
    </>
  )
}

export default App
