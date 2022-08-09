import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { addTask } from "../todoSlice";
import './style.css';
const Addtask = () => {
  const taskId = Math.random();
  const [text, setText] = useState({
    id: taskId,
    description: "",
    isDone: false,
  });
  const dispatch = useDispatch();

  return (
    <div className="tasks">
      <h1>ajouter une tache</h1>
      <div className="task">
        <h3> description de tache</h3>
        <input style={{padding:25,width:"40vw",margin:10}}
          type="text"
          placeholder="Ajouter une tâche"
          onChange={(e) => setText({ ...text, description: e.target.value })}
        />

        <button style={{margin:5}} onClick={() => dispatch(addTask(text))}>Ajouter</button>
      </div>
    </div>
  );
};

export default Addtask;
