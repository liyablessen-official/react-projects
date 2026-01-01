import { useEffect, useState } from "react";
import "../styles/backgroundchange.css";

export default function BackgroundChange(){
    const [index,setIndex] = useState(0);
    const backgrounds = [
        "https://wallpaper-house.com/data/out/6/wallpaper2you_128065.jpg",
        "https://wallpapercave.com/wp/wp3519419.jpg",
        "https://getwallpapers.com/wallpaper/full/8/a/6/59243.jpg",
        "https://wallpapercave.com/wp/wp6839672.jpg"
    ];
    const [currentTime,setCurrentTime] = useState(new Date());

    useEffect(()=>{
        const clocktimer = setInterval(()=>{
            setCurrentTime(new Date());
        },1000);

        const timer = setInterval(() => {
            setIndex(prev=>(prev+1) % backgrounds.length);
        }, 3000);

        return ()=> clearInterval(timer,clocktimer);
    },[]);

    return(
        <div className="autobckground-container"
        style={{
            backgroundImage: `url(${backgrounds[index]})`
        }}>
            <div className="autobckground-textcontent">
                <h3>{currentTime.toLocaleTimeString()}</h3>
                <h4>{currentTime.toLocaleDateString()}</h4>
                <p>***** Enjoy your Day *****</p>
            </div>
        </div>
    );
}