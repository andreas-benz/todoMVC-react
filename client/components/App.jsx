import React, { useEffect } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'

function App () {
  useEffect(() => {

  }, [])

  return (
    <>
      <AddTodo />
      <TodoList />
      <Footer />
    </>
  )
}

export default App
