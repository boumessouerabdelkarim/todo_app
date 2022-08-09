import React from 'react'
import Task from './Task'
import { useSelector } from 'react-redux'
import './style.css'
const Tasklist = ({fil}) => {
    const tasks=useSelector((state)=>state.todo.todoList);
    console.log(fil)
    
  return (
    <>
    <div className='tasks'>
      <h1> Liste des taches</h1>:
 {tasks?.filter(el=>fil==="all" ? el : fil==="true" ? el.done===true : el.done===false ).map((el)=><Task key={el.id} task={el}/>)}
 </div>
  </>
  )
}

export default Tasklist