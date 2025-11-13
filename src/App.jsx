import './App.css'
import {
  AiOutlineLogin,
  AiOutlineLogout,
  AiOutlinePlus
} from "react-icons/ai";


function App() {


  return (
    <>
      <header className="header">
        <a href="#" className="header__logo">
          <span className="header__logo-part header__logo-part--first">TO-DO</span>
          <span className="header__logo-part header__logo-part--second">APP</span>
        </a>

        <div className="header__auth">
          <AiOutlineLogout />
          <AiOutlineLogin />
        </div>
      </header>

      <main className="main">
        <div className="main__wrapper">

          <div className="main__header">
            <div className="main__header-title">
              <h2 className="main__title">
                Выполнено задач
              </h2>
              <h3 className="main__subtitle">
                так держать
              </h3>
            </div>
            <div className="main__tasks">
              1/3
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


        </div>
      </main>
    </>
  )
}

export default App
