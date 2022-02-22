import React, {useState} from 'react'; 
import { useSelector, useDispatch } from 'react-redux'
import {updateATaskInDB, deleteATaskInDB} from '../actions'

function Task (props) {
  const taskProp = props.props
  const taskGS = useSelector(globalState => globalState.taskReducer.find(task => task.t_id === Number(taskProp.t_id)))
  const dispatch = useDispatch()

  //Inline editing:
  const [isEditing, setEditing] = useState(false);
  const [TaskTitle, setTaskTitle] = useState(taskProp.title)


  const handleChange = (e) => {
  taskGS.status === "completed" ? dispatch(updateATaskInDB({...taskGS, status: "in progress"})) : dispatch(updateATaskInDB({...taskGS, status: "completed"}))
  };

  const handleDelete = (e) => {
    e.preventDefault()
    dispatch(deleteATaskInDB(taskProp.t_id))
  }

  const handleKeyDownTaskTitle = (e) => {
    setTaskTitle(e.target.value)
    if (e.key === 'Enter') {
      handleUpdate()}
  };

const handleUpdate = (e) => {
  setEditing(false)
  dispatch(updateATaskInDB({...taskGS, title: TaskTitle}))
}
return (
    <>
      <li className={(taskGS.status === "completed") ? 'completed' : ""}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={(taskGS.status === "completed") ? true : false} onChange={handleChange}/>

          <label>
            {isEditing ? (
              <div
                onKeyDown={e => handleKeyDownTaskTitle(e)}
                
              >
                <input
                  type="text"
                  name="pageTitle"
                  className="editing"
                  placeholder={TaskTitle}
                  value={TaskTitle}
                  onChange={e => setTaskTitle(e.target.value)}
                />

              </div>
            ) : (
              <div
                onClick={() => setEditing(true)}
              >
                {TaskTitle}
              </div>
            )}
          </label>
              
          <button className="destroy" onClick={handleDelete}></button>
        </div>
        <input className="edit" readOnly="Create a TodoMVC template"  />
      </li>
    </>
  )
}

export default Task