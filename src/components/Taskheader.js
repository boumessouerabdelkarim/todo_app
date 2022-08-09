import React from 'react'
import { useSelector } from 'react-redux'
import './style.css';
const Taskheader = ({setFil}) => {
    const task=useSelector((state)=>state.todo.todoList)
    const undoneTasks = task.filter((t) => t.done === false);

    return (
      <div className="header">
        <h1>React Todo List</h1>
        <p>
          <h2>Tâches à faire :</h2> <strong>{undoneTasks.length}</strong>
        </p>
        <div className='task' >
          <h2>filter par</h2>
          <select 
          onChange={(e) => {setFil(e.target.value)}} style={{width:"40vw",padding:25, fontSize:20}} name="done"  >
          <option value="all">All</option>
        <option value={true}>Is done</option>
        <option value={false}>Not done</option>
        
      </select>
    </div>
      </div>)
}

export default Taskheader