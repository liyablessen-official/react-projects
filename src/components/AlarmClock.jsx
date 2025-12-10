

import '../styles/alarmClock.css'
import { useState,useEffect,useRef } from 'react'
import myAudio from '../running-night-393139.mp3'

export default function AlarmClock(){
    const [currentTime,setCurrentTime] = useState(new Date());
    const audioRef = useRef(null);
    const [isPlaying,setIsPlaying] = useState(false);//set it to false
    const [alarmTime,setAlarmTime] = useState('00:00:00');

    useEffect(()=>{
        const timer = setInterval(()=>{
            setCurrentTime(new Date());
        },1000);

        return()=>{
            clearInterval(timer);
        };       
    },[]);//runs only once
    
    useEffect(()=>{

        if(currentTime.toLocaleTimeString("en-US", {
            hour12: false}) === alarmTime){
            setIsPlaying(true);
            if(audioRef.current){
                audioRef.current.muted = false;
                audioRef.current.play();
            }
        }

    },[currentTime]);//runs every second

    const handlePlayPause = () =>{
        if(audioRef.current){
            if(isPlaying){
                audioRef.current.pause();
            }
            setIsPlaying(!isPlaying);
        }
    }

    const handleAlarmTime = (event)=>{
        setAlarmTime(event.target.value);
        console.log({alarmTime});
    }

    return(
        <div style={{textAlign:"center"}}>
            <h3 className='alarm-h3'>Alarm Clock</h3>
            <label className='alarm-label' >Enter alarm time(24hr)</label>
            <input type='text' id="alarmTime" value={alarmTime} onChange={handleAlarmTime}/>
            <div className='alarm-container'>
                <h5 id="mydate">{currentTime.toLocaleDateString()}</h5>
                <div className='clockDisplay'>
                    <h5 id="myTime">{currentTime.toLocaleTimeString()}</h5>
                </div>

                
                <audio ref={audioRef} src={myAudio} muted />
                {isPlaying && 
                    <button onClick={handlePlayPause} id="stopbtn">Stop
                    </button>
                }
                
            </div>
        </div>
    )
}
