function Header({ tasks, completeTasks }) {
  return (
    <div className="main__header">
      <div className="main__header-title">
        <h2 className="main__title">Выполнено задач</h2>
        <h3 className="main__subtitle">
        {completeTasks.length === 0
          ?  "ты сможешь"
          :  completeTasks.length === tasks.length
              ? "ты все сделал"
              : "так держать"
        }
        </h3>
      </div>

      <div className="main__tasks-count">
        {completeTasks.length}/{tasks.length}
      </div>
    </div>
  )
}

export default Header;
    