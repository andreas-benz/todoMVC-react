import React from 'react'

function AddTodo (props) {
  return (
    <>
      <header className="header">
        <h1>My Mahi List</h1>
        <input className="new-todo" placeholder="What needs to be done?" autoFocus={true} />
      </header>
    </>
  )
}

export default AddTodo
