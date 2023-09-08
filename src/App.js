import React, { useState } from 'react';
import Context from "./Context";
import NewTaskInput from './Components/NewTaskInput';
import TaskList from './Components/TaskList';

function App() {
  const tasks = [
    // {
    //   id: 1,
    //   text: "Справа № 1",
    //   isChecked: true
    // },
    // {
    //   id: 2,
    //   text: "Справа № 2",
    //   isChecked: false
    // }
  ];

  const [taskList, setTaskList] = useState(tasks);

  const handlerAddNewTask = (id, text) => {
    setTaskList((prevTaskList) => [
      ...prevTaskList,
      {
        id: id,
        text: text,
        isChecked: false

      }
    ]);
  }

  const handlerDeleteTask = (id) => {
    setTaskList((prevTaskList) => {
      return prevTaskList.filter((task) => {
        return task.id !== id;
      });
    });
  }

  const val = {
    taskList,
    handlerAddNewTask,
    handlerDeleteTask
  }
  return (
    <Context.Provider value={val}>
      <div className='wrap'>
        <div className='container'>
          <div className='task-list-container'>
            <div className='task-list-container-header'><h1>Мої справи</h1></div>
            <NewTaskInput />
            <TaskList />
          </div>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
