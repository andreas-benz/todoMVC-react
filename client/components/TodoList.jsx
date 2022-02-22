import React, {useState} from 'react'; 
import { useSelector, useDispatch } from 'react-redux'
import Task from './Task'
import {updateATaskInDB, deleteATaskInDB} from '../actions'


function TodoList () {
  const dispatch = useDispatch()

  const tasks = useSelector(globalState => globalState.taskReducer)
  
  const [isCompletedAll, setIsCompletedAll] = useState(false);
  
  //following does not work. should set toggle-all button on checked=false if some of available tasks are in progress

  // const [toggleIsChecked, SetToggleChecked] = useState(false);

  // const toggleChecked = () => {
  //   const numberOfTasks = tasks.length
  //   console.log(numberOfTasks)

  //   tasks.filter(task => task.status === "completed").length == tasks.length ? SetToggleChecked(true) : SetToggleChecked(false)
  // }

  const toggleAll = () => {
    !isCompletedAll ? completeAll() : uncompleteAll()
  }

  const completeAll = () => {
    tasks.map(task => dispatch(updateATaskInDB({...task, status: "completed"})))
    setIsCompletedAll(true)
  }

  const uncompleteAll = () => {
    console.log("uncompleted")
    tasks.map(task => dispatch(updateATaskInDB({...task, status: "in progress"})))
    setIsCompletedAll(false)
  }

  return (
    <>
      {/* This section should be hidden by default and shown when there are todos */}
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" onClick={toggleAll}/>
        <label htmlFor="toggle-all">Mark all as complete</label>
        
        <ul className="todo-list">
            
          {tasks.map(task => <Task key={task.t_id} props={task}/>)}

        </ul>
      </section>
    </>
  )
}

export default TodoList