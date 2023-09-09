import React, { useState } from 'react';
import Context from "./Context";
import NewTaskInput from './Components/NewTaskInput';
import TaskList from './Components/TaskList';

function App() {
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('todolist')) || []);

  const handlerAddNewTask = (id, text) => {
    const newTaskList = taskList.map((task) => task);
    newTaskList.push({
      id: id,
      text: text,
      isChecked: false

    });
    setTaskList(newTaskList);
    localStorage.setItem('todolist', JSON.stringify(newTaskList));
  }

  const handlerDeleteTask = (id) => {
    const newTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(newTaskList);
    localStorage.setItem('todolist', JSON.stringify(newTaskList));
  }

  const handlerTaskChecked = (id) => {
    const newTaskList = taskList.map((task) => task.id === id ? {...task, isChecked: !task.isChecked} : task);
    setTaskList(newTaskList);
    localStorage.setItem('todolist', JSON.stringify(newTaskList));
  }

  const val = {
    taskList,
    handlerAddNewTask,
    handlerDeleteTask,
    handlerTaskChecked
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
