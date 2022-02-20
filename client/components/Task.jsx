import React, {useState} from 'react'; 
import { useSelector, useDispatch } from 'react-redux'
import {updateATaskInDB} from '../actions'


function Task (props) {
  const taskProp = props.props
  const taskGS = useSelector(globalState => globalState.taskReducer.find(task => task.t_id === Number(taskProp.t_id)))
  const dispatch = useDispatch()

  const handleChange = (e) => {
  taskGS.status === "completed" ? dispatch(updateATaskInDB({...taskGS, status: "in progress"})) : dispatch(updateATaskInDB({...taskGS, status: "completed"}))
  };

return (
    <>
      <li className={(taskGS.status === "completed") ? 'completed' : 'in progress'}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={(taskGS.status === "completed") ? true : false} onChange={handleChange}/>
          <label>{taskProp.title}</label>
          <button className="destroy"></button>
        </div>
        <input className="edit" value="Create a TodoMVC template" />
      </li>
    </>
  )
}

export default Task