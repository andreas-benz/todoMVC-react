import React, { useEffect } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './Footer'
import {getAllTasksThunk} from '../actions'
import { useDispatch, useSelector  } from 'react-redux'


function App () {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getAllTasksThunk())
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
