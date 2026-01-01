// auto saves text in localstorage and load it back when page mounts again
// set array limit as 10
// also include code to change background automatically

import { useEffect, useState } from 'react';
import '../styles/autoSave.css'

export default function AutoSave(){
    
    const [text,setText] = useState("");
    const [msgArray,setmsgArray] = useState([]);
    
    useEffect(()=>{
        const savedText = localStorage.getItem("autosavetext");
        const savedArray = localStorage.getItem("autosavedarray")!== null ? JSON.parse(localStorage.getItem("autosavedarray")) : JSON.parse("[]");
        if(savedText){
            setText(savedText);
        }
        if(Array.isArray(savedArray)){
            setmsgArray(savedArray);
        }

        
    },[]);

    useEffect(()=>{
        localStorage.setItem("autosavetext", text);
    },[text]);

    useEffect(()=>{
        if(msgArray.length>0){
            localStorage.setItem("autosavedarray",JSON.stringify(msgArray));
        }
    },[msgArray]);

    const handleClick = (newtext) =>{
        if (!newtext.trim()) return;
        setmsgArray(prev=>{
            const updatedArray = [...prev,newtext];
            return updatedArray.slice(-10); //return only the latest 10 msgs
        });
        setText("");
    }

    return(
        <div>
            <h3 className='autosave-h3'>Comment Box</h3>
            <div className="autosave-container">
                <p className='autosave-msg'>Data is automatically saved !!!</p>
                <div className="autosave-text-wrap">
                    <textarea 
                    name="maintext" 
                    id="maintext" 
                    cols="30" rows="10" 
                    placeholder='Start typing....'
                    value={text}
                    onChange={(e)=>setText(e.target.value)}
                    />
                    <button className="autosave-post-btn" onClick={()=>handleClick(text)}>
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/send-white-icon.png" alt="post button" />
                    </button>
                </div>
                {msgArray.length>0 &&
                    <div className="autosaved-post-container">
                        <h4 className='autosave-h4'>Latest 10 saved messages</h4>
                        {msgArray.map((msg,index)=>
                            <ul key={index}>
                                <li>{msg}</li>
                            </ul>
                        )}
                    </div>
                } 
            </div>
        </div>
    );
}