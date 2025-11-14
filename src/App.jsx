import './App.css'
import {
  AiOutlineClose,
  AiOutlineLogin,
  AiOutlineLogout,
  AiOutlinePlus
} from "react-icons/ai";
import {useState} from "react";
import {FiEdit} from "react-icons/fi";


function App() {
const [isLogin, setIslogin] = useState(true);
const [count, setCount] = useState(1);

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
              {count === 0
            ?  (<h3 className="main__subtitle">ты сможешь</h3>)
            :  (<h3 className="main__subtitle">так держать</h3>)}
            </div>

            {/* Счётчик задач */}
            <div className="main__tasks-count">
              {count}/3
            </div>
          </div>

          <div className="main__body">
            <label className="main__label">
              <input
                className="main__input"
                type="text"
                placeholder="напишите задачу"
              />
            </label>

            <button className="main__btn" type="button">
              <AiOutlinePlus />
            </button>
          </div>

          {/* Список задач */}
          <ul className="main__tasks-list">
            <li className="main__task">
              <button
                className="main__task-complete"
                type="button"
              >
              </button>
              <span className="main__task-text">Первая задача</span>
              <div className="main__task-buttons">
                <button className="main__task-edit">
                  <FiEdit />
                </button>
                <button className="main__task-remove">
                  <AiOutlineClose />
                </button>
              </div>
            </li>

            <li className="main__task">
              <button
                className="main__task-complete main__task-complete--done"
                type="button"
              >
              </button>
              <span className="main__task-text">Вторая задача</span>
              <div className="main__task-buttons">
                <button className="main__task-edit">
                  <FiEdit />
                </button>
                <button className="main__task-remove">
                  <AiOutlineClose />
                </button>
              </div>
            </li>
          </ul>
          
          <footer className="footer">
            <div className="main__footer">
              <a href="https://damirmedia.ru">
                <img
                  className="footer__logo"
                  src="https://damirmedia.ru/logo.png"
                  alt="Логотип разработчика DamirMedia"
                  width="140"
                  lenght="70"
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
