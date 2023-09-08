import React, { useState, useContext } from "react";
import {VscTrash} from "react-icons/vsc";
import Context from "../Context";

function Task(props) {
    const { task } = props;
    const [isCheckedState, setIsCheckedState] = useState(task.isChecked);
    const value = useContext(Context);
    
    const handlerChangeCheckedState = () => {
        setIsCheckedState(() => !isCheckedState);
    };
    
    const handlerDeleteTask = () => {
        const shouldDelete = window.confirm("Ви впевнені, що хочете видалити це завдання?");
        if (shouldDelete) {
            value.handlerDeleteTask(task.id);
        }
    };

    return (
      <div id={`task-${task.id}`} className="task">
        <div className={isCheckedState ? "checked" : ""}>
            <input className="task-input" type="checkbox" checked={isCheckedState} onChange={(handlerChangeCheckedState)} />
            <span className="task-text">{task.text}</span>
        </div>
        <span className="delete-icon" onClick={handlerDeleteTask}>
            <VscTrash />
        </span>
      </div>
    );
  }
  
  export default Task;
  