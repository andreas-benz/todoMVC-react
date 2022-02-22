import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addATaskToDB } from '../actions'

function AddTodo () {
  const [newTaskTitle, setNewTaskTitle] = useState('')
  const dispatch = useDispatch()

  const handleInput = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    } else {
      setNewTaskTitle(e.target.value)
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const newTask = {
      title: newTaskTitle,
      status: "in progress"
    }
    dispatch(addATaskToDB(newTask))
    setNewTaskTitle('')
  }

  return (
    <>
      <header className="header">
        <h1>My Mahi List</h1>
        <form type="submit" onSubmit={handleSubmit}>
          <input 
            className="new-todo" 
            type='text' 
            id='newTask' 
            value={newTaskTitle} 
            placeholder="What needs to be done?" 
            autoFocus={true} 
            onChange={e => handleInput(e) }
          />
         </form>
      </header>
    </>
  )
}

export default AddTodo
