import React, {useState} from 'react'; 
import { useSelector } from 'react-redux'
import Task from './Task'


function TodoList () {
  
  const tasks = useSelector(globalState => globalState.taskReducer)
  
  return (
    <>
      {/* This section should be hidden by default and shown when there are todos */}
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        
        <ul className="todo-list">
            
          {tasks.map(task => <Task props={task}/>)}

        </ul>
      </section>
    </>
  )
}

export default TodoList