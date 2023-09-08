import React, { useContext } from "react";
import Context from "../Context";
import Task from "./Task";

function TaskList() {
    const value = useContext(Context);
    return (
      <div className="task-list-container-body">
        {value.taskList && (value.taskList.map((element) => {
            return (<Task key={element.id} task={element} />)
        }))}
      </div>
    );
  }
  
  export default TaskList;
  