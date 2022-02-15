import React from 'react'
import { useSelector } from 'react-redux'


function TodoList () {
  
  const tasks = useSelector(globalState => globalState.taskReducer)

  return (
    <>
{/* This section should be hidden by default and shown when there are todos */}
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
            {/* These are here just to show the structure of the list items */}
            {/* List items should get the class `editing` when editing and `completed` when marked as completed */}
          
          {tasks.map((Task) =>           
            <li>
              <div className="view">
                <input className="toggle" type="checkbox" checked />
                <label>{Task.title}</label>
                <button className="destroy"></button>
              </div>
              <input className="edit" value="Create a TodoMVC template" />
            </li>)}
          
           {/*<Fruit key={oneFruit.id} fruit={oneFruit} />)}
          <li className="completed">
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>Buy a unicorn</label>
              <button className="destroy"></button>
            </div>
            <input className="edit" value="Rule the web" />
          </li>
           */}

        </ul>
      </section>
    </>
  )
}

export default TodoList