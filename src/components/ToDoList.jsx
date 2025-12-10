import { useEffect, useRef, useState } from 'react';
import '../styles/todoList.css';
export default function ToDoList(){
    const [newTaskIsVisible, setNewTaskIsVisible] = useState(false);
    const [newTask,setNewTask] = useState("");
    const [tasks,setTasks] = useState([]);
    const buttonRef = useRef(null);
    // const inputRef = useRef(null);

    // useEffect(() => {
    //     inputRef.current?.focus();
    // }, []);

    const addTask =() => {
        setNewTaskIsVisible(true);
    }
    const addingNewTask = () =>{
        setNewTaskIsVisible(false);
        if(newTask.trim()==="") return; 
        setTasks(prev=>[...prev,{
            id:Date.now(),
            taskname:newTask,
            ischecked:false
        }]);
        setNewTask("");
    }
    const strikeOutTask =(selectedId) =>{
        setTasks(prev => prev.map(
            task=> task.id === selectedId ? {...task, ischecked : !task.ischecked }: task
        ));

    }
    const deleteTask = (oldtask) =>{
        setTasks(
            prev => prev.filter(item=>item.id !==oldtask)
        );
    }

    return(
        <div className='todo-list-main-container'>
            <h3 className='todo-h3'>To-Do List</h3>
            <div className="todo-container">
                {(tasks.length === 0 && !newTaskIsVisible) &&
                    <p id="no-item-text">***** No tasks till now *****</p>
                }
                <div id="newTask-container" style={{visibility: newTaskIsVisible ? "visible" : "hidden"}}>
                    <input type='text' 
                    id='task-name' 
                    value={newTask}
                    placeholder='Enter new task...'
                    // ref={inputRef}
                    
                    onChange={(event)=>{
                        setNewTask(event.target.value);
                        
                    }}
                    
                    onKeyDown={(event)=>{
                        if(event.key=='Enter'){
                            event.preventDefault();
                            buttonRef.current.click();
                        }
                    }}

                    />
                    <button ref={buttonRef} onClick={addingNewTask} className='newTask-btn'>Add Task</button>
                </div>
                
                <ul className='todo-list'>
                    {tasks.map(item=>{
                        return(
                        <li className="todo-list-item" key={item.id}>
                            <button onClick={()=>strikeOutTask(item.id)} className='icon-btn'>
                                
                                
                                <img src={
                                    item.ischecked ? 'https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/check-mark-box-icon.png' : 'https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/square-line-icon.png'
                                } 
                                className='icons' 
                                alt='checked icon' /> 
                                {/* <img src= className='icons' alt='unchecked icon' /> */}

                                
                                {/* <img src='https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/square-line-icon.png' className='icons' id={`checkbox-icon${item.id}`} /> */}
                            </button>
                            <p className="task-text" 
                            id={item.id} 
                            key={item.id}
                            style={{textDecorationLine: item.ischecked ? "line-through" : "none" }} >
                                {item.taskname}
                            </p>
                            <button onClick={()=>deleteTask(item.id)} className='icon-btn'>
                                <img src='https://uxwing.com/wp-content/themes/uxwing/download/user-interface/recycle-bin-icon.png' className='delete-icon icons' />
                            </button>
                        </li>)

                    })}
                </ul>
            </div>

            <button className='addTask-btn' onClick={addTask}>
                <img className='todo-img' src='https://uxwing.com/wp-content/themes/uxwing/download/user-interface/add-round-outline-white-icon.png' />
            </button>
        </div>
    );
}