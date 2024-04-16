import React, { useEffect } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { setTodos } from './store/todoSlice'




function App() {
  const todos = useSelector((state => state.todos))
  const dispatch = useDispatch()


  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem("todos"))
    if(storedTodos&& storedTodos.length>0){
      dispatch(setTodos(storedTodos));
    }
  },[])
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
