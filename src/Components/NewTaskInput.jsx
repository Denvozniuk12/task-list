import React, {useState, useContext} from 'react';
import { VscAdd } from "react-icons/vsc";
import Context from '../Context';

function NewTaskInput() {
  const [value, setValue] = useState('');
  const val = useContext(Context);
  const handlerAddNewTask = () => {
    if(value !== ''){
      const NewId = val.taskList.length > 0 ? val.taskList[val.taskList.length - 1].id + 1 : 1;
      val.handlerAddNewTask(NewId, value);
      setValue('');
    }
  }
  return (
    <div className='new-task'>
      <input className='new-task-input' type="text" value={value} onChange={(e) => {setValue(e.target.value)}} placeholder='Введіть текст нової справи...'/>
      <span className='add-icon' onClick={handlerAddNewTask}><VscAdd /></span>
    </div>
  );
}

export default NewTaskInput;
