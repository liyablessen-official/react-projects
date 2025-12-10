import { useEffect, useState } from "react"
import '../styles/counter.css'
export default function Counter(){
    const [count,setCount] = useState(0);
    const [msg,setmsg] = useState("");
    const [showMsgBox,setShowMsgBox] = useState(false);
    const [txtcolor,settxtcolor] = useState("#2ec4b6");

    const increment = ()=>{
        setCount(count+1);
        setmsg("Value incremented by 1");
        setShowMsgBox(true);
        settxtcolor("#2ec4b6");
        // document.getElementById("popMsg").style.color="#2ec4b6";
    };

    const decrement = ()=>{
        count<=1 ? alert("Count can't be -ve value") : setCount(count-1);
        setmsg("Value decremented by 1");
        // document.getElementById("popMsg").style.color="red";
        setShowMsgBox(true);
        settxtcolor("red");
    };

    return(
        <div>
            <h1 style={{color:"#3f3445", textAlign:"center",marginBottom:"20px"}}>Counter App</h1>
            {showMsgBox &&
            <MessageBox key={count} msg={msg} timeout={1000} onClose={()=>{setShowMsgBox(false)}} textColor={txtcolor}  />
            }
            <div style={{marginTop:"40px"}}>
                <h3 className="counter-h3">{count}</h3>
                <div className="buttons">
                    <div>
                        <button className="changeBtn" onClick={increment}> + </button>
                        <p className="counter-p" style={{color:"#3f3445", fontSize:"0.9rem", fontStyle:"italic"}}>Increment</p>
                    </div>
                    <div>
                        <button className="changeBtn" onClick={decrement}> - </button>
                            <p className="counter-p">Decrement</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

const MessageBox = ({msg,timeout = 3000,onClose,textColor}) =>{
    const [isVisible,setIsVisible] = useState(true);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setIsVisible(false);
        },timeout);
        return()=>clearTimeout(timer);
    },[timeout]);

    if(!isVisible){
        return null;
    }
    return(
        <p className="counter-p" id="popMsg" style={{color : textColor}}>{msg}</p>
    );
}