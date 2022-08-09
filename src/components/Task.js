import React, { useState } from "react";
import {  useDispatch } from "react-redux";
import { editTask, deleteTask } from "../todoSlice";
import './style.css';
const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [text, setText] = useState({
    id: task.id,
    description: task.description,
    done: task.done,
  });
  return (
    <div className={`todo-item ${task.done ? "done" : "undone"}`}>
      <>
        <h2>{task.id}</h2>
        <h2>{task.description}</h2>
        <h2> {task?.done?"Is done":"Not done"}</h2>
        {console.log(task.done)}
        <button  onClick={() => setShow(!show)}>EditTask</button>
        {show ? (
          <div className="edit">
            <input
              defaultValue={task.description}
              type="text"
              placeholder="description"
              onChange={(e) =>
                setText({ ...text, description: e.target.value })
              }
            />
            <input
              type="checkbox"
             defaultChecked={task.done}
              onChange={(e) => setText({ ...text, done: e.target.checked })}
            />
            <label> is done</label>
            <button style={{ witdh:50,margin:5}} onClick={() => {dispatch(editTask(text));setShow(false)}}>Sauvgarder</button>
            <button style={{ witdh:50,margin:5}} onClick={() => {setShow(false)}}>Annuler</button>
          </div>
        ) : null}
        <button style={{ witdh:50,margin:5}} onClick={() => {dispatch(deleteTask(task.id));setShow(false)}}>supprimer</button>
      </>
    </div>
  );
};

export default Task;
