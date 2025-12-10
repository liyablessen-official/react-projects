// make it a page with drop-down with list of all programs I have done
// on selecting each option in drop-down it should take me to that page
// also add a hint of each program name in drop-down(on hover)


// import Jokes from './components/Jokes'
// import Profile from './components/Profile';
import AlarmClock from './components/AlarmClock';
import Counter from './components/Counter'
import './app.css'
import { BrowserRouter as Router, Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import MusicPlayer from './components/MusicPlayer';
// import ToggleMsg from './components/ToggleMsg';
import ToDoList from './components/ToDoList';
import UsersList from './components/UsersList';
import { useState } from 'react';

function ProgramSelector(){
  const navigate = useNavigate();
  const [code,setCode] = useState("");
  const handleChange = (event) =>{
    const value = event.target.value;
    setCode(value);
    if(value!==""){
      navigate(value);
    }
  };

  return(
    <div className='program-container'>
      <h3 className='app-h3'>React Mini Programs</h3>  
      <p className='app-p'>Select a program from the drop-down below</p>
      <select 
      value={code}
      onChange={handleChange}
      className='app-select'
      >

        <option value="">--- Select ---</option>
        <option value="Counter">Counter</option>
        <option value="alarm-clock">Alarm Clock</option>
        <option value="music-player">Music Player</option>
        <option value="todo-list">To-Do List</option>
        {/* <option value="toggle-message">Toggle Message</option> */}
        <option value="users-list">Users List</option>

      </select>
    </div>
  );

}

export default function App() {
  

  return (
    <div className="App">
      
      <Router>
        <ProgramSelector />
        <Routes> 
          <Route path='/' element="" />
          <Route path='/counter' element={<Counter />} />
          <Route path='/alarm-clock' element={<AlarmClock />} />
          <Route path='/music-player' element={<MusicPlayer />} />
          <Route path='/todo-list' element={<ToDoList />} />
          {/* <Route path='/toggle-message' element={<ToggleMsg />} /> */}
          <Route path='/users-list' element={<UsersList />} />
        </Routes>
      </Router>

{/* <ToggleMsg /> */}
    </div>
  )
  
}

