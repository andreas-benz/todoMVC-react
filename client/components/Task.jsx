import React, {useState} from 'react'; 
import { useSelector } from 'react-redux'


function Task () {

  const tasks = useSelector(globalState => globalState.taskReducer)

  return (
    <>
      <li className="in_progress">
        <div className="view">
          <input className="toggle" type="checkbox" checked />
          <label>{Task.title}</label>
          <button className="destroy"></button>
        </div>
        <input className="edit" value="Create a TodoMVC template" />
      </li>
    </>
  )
}

export default Task


/*
These are here just to show the structure of the list items
List items should get the class `editing` when editing and `completed` when marked as completed



  {/*<Fruit key={oneFruit.id} fruit={oneFruit} />)}
  <li className="completed">
  <div className="view">
  <input className="toggle" type="checkbox" />
  <label>Buy a unicorn</label>
  <button className="destroy"></button>
  </div>
  <input className="edit" value="Rule the web" />
  </li>

  */