import React from 'react'
import { useSelector } from 'react-redux'
import './style.css';
const Taskheader = () => {
    const task=useSelector((state)=>state.todo.todoList)
    const undoneTasks = task.filter((t) => t.done === false);

    return (
      <div className="header">
        <h1>React Todo List</h1>
        <p>
          Tâches à faire : <strong>{undoneTasks.length}</strong>
        </p>
      </div>)
}

export default Taskheader