import React from 'react'
import Task from './Task'
import { useSelector } from 'react-redux'
import './style.css'
const Tasklist = () => {
    const tasks=useSelector((state)=>state.todo.todoList);
    console.log(tasks)
    
  return (
    <>
    <div className='tasks'>
      <h1> Liste des taches</h1>
 {tasks.map((el)=><Task key={el.id} task={el}/>)}
 </div>
  </>
  )
}

export default Tasklist