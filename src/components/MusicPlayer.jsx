// Features to be added:
// * progress bar on hover
// * song details on hover
// * restart song on hover

import '../styles/musicPlayer.css';
// import myAudio from '../running-night-393139.mp3';
import song1 from '../music/running-night-393139.mp3'
import song2 from '../music/tell-me-the-truth-260010.mp3'
import song3 from '../music/vlog-beat-background-349853.mp3'
import { useEffect, useRef, useState } from 'react';

export default function MusicPlayer(){

    const mySongs = [
        {
            id: song1, 
            songimg:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NEA0ODg0QDRASEg0NDQ0NDQ8NDg0OFREWFxURFhYYHTQgGBomHhUVITEiJSkrLi4uFx8zODM1NygtLisBCgoKDg0OFxAPFjEZHhkrKzcrKzcrKy43KzcrKystLTctLS0rLS0rLTcrLSs3LS0tLS03Ny03LS0rKy03LSstLf/AABEIAMgAyAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAwECBAUGB//EAEcQAAICAQIDBQYCBAoIBwAAAAECAAMRBBIFITEGE0FRYRQiMnGBkaHBB3Kx0RUjM1Jic7O04fAkJUKCkrLD8SY1NkZUdIP/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAjEQACAgIDAAIDAQEAAAAAAAAAAQIRAyESMUETUSJhcQQy/9oADAMBAAIRAxEAPwD446xZlmMWTOubRBFhLZn0LsrwHhLcM9v11Ltte4WPXbaDsDqq4VW9Zn7V9m+HewDiXDS6oGCuljMwZS5To3vKwaBfZTgeHXEYigz136R+A6TQLoTpajX3qXtZm17NxUV4+I+s6/HOyugo1/B9PXSy16hmGoU3WMXA29CTlZWD+0I8b+z573UahM9p2p7M0aXV8OFSEabUPVU6Gx3Is70BwHPMbkabT2Y0H8Lto+5buPZO/FffWZ73z353TpjKK2hHikzwOYZnsrezOnr4xVo2QnS2q9tSd4wOzuHO3f1yrpNvA+zGgu1vF6LKWavTvUtCi6xSgO7OSDlpT5UL8LPAZhme47G9l9Lr9BZY6H2gvqKqrRY6qjBENeVB2nDGYeAcD093DuJ6m6o9/R3grPeOvdstQOCoODgzfIgfCzyuYMZ7fhHAuG6bQ1a/iQezviO7rUvhQxOwBUILMQrHJMw9tuz+mop0mu0Jcae/ChHLMFJTcrKW54IDDaZnkXRvidWePssiWcmeo7A8I0+t1dlOpQ2IKLbQodq/fDoAcqfWdKnsppk402itrZtM1duopXvHUmvutyDcDk7WDCcuSbbKRx6s8AYT6HwPsxoLm4+LKSw0ttyaXFzr3aql5GcH3vgWI7JdnOH+wvxPiQayvcVSpWcAKHCZO3mWZuUgU4HgpInu+2HZvQew18U4aHSksEdGLlcFiuRu5hg4xiK/SP2f0egXQnTVGs2rebSbXs3FUqI+I8vigXZuB4oH6y6WGfQu0PAuEaC7hTW0utFqahtUFsttZ2FFZTHPIw7zongfZwaQa/uLvZydobvNRvz3hTmu/wAxKK0b47PmiWRgMbxs6T2m72IOumyvcizdvA2Ddndz+KJr6ec7MU2zlnGmWzCEmWJmBhnMQwmtlwBEXDnPMyRo6os+qdlKtM/AXXVWNVQX1HfWVjLqO+qIIwpiu3/c8P4bRw2hXZLS1gtdgw2o3eNkjqxLLOVw/jWkXgmo0LXY1LG0rTss5g3VMPeC7egk8Z43pNZwjTUWX41lHdgVlLcuEzV8e3b8BUzJPiX5I6H6XBleG/1eo/5aZ2u04/1p2e/Xs/bXOXbxfgvFqNJ7fqG0t1K4dMum4lVVwGCEMrbFPmJm4t2r0mo4nw65GK6bTMM3FGG7ccswTG7aMKBKqmBv2z0+uxrn1Wmxm3Ravh2rp/UK1Mf+sIkf+oD/APRnnaO0mnq4xdqltzpbkSmy0K+NooQBtpG73XSbF7SaD+GPa/aAKPZBT3vd3fyvlt27o6g0Dmn6d3S41tmk1Q526PVcR0l/9XttUH+xMT2Z/wDMu0H9ZR+yyec7KdpdPptXxLvrdun1Fl11dm12HeC0leQGRuRpt4H2j0FWu4xdZqAtd71NQ/d3HvAN2eQXIm4tG5p+k9juIex8Ht1PXu9TuYeaF9Orj7Gdri2gGn0vHimO7vV9XWV6EvQA/wB2GZ4rhvFtMnBtVo3txqHsLJVtc7lL0H4gNvRGnW03anSvwmzTXXbdSNPdplQpYe8xyrO4Lt5rC4sCmurGcdVG4RwRbW2VmzQi1x1Ss12hmnK7X8A0+m0em1Gl1eo1FdlqrULXBq7so5DKoUYPKbeF8Y4ZrdBTodfc2majbsdcgMFyEYMFIztbBVpze3PH9JZTpNDoSbKaMMbSGAYhNqqCwy3ViTM7WgOmmy/6Jx/rBwf/AI9o+9tM9lwk+2voNdy7yg8S0Oqx8mC/iFb/APSfPv0dcY0+i1rXaq0VV9y6ByruN5sQgYUGdLsL2o02kt16ai7u6LXbUUuUdh3gcjGAMjchkJO2PjdRSZ2uzH8p2q/r9R/Z6ucv/wBrr+uP79DgXaPQVP2gNmpCjU23tpT3dx71WS8A8l5fGvWI7J8d4dZw9uF8QtNCgsa7QGwylxYOYB2sHiDWiO0fZrQ08Ms1ei12p1FQdBWrWDuHzbtY7Ng5gz1fbNuEhNH/AAmlje4/cd13n8yrfnaZ5Ptdxvh6aCvhfDrDegYNZaQ2MBi+MkDcxYyn6SOOaTWpoRpbu+Na3i0BHTaWSkD4lHlNEDaR0P0uEbeF7em3UbfPZto2yLD/AOGav11/v1k536Q+N6TWpw5dNd3xqSxbQEdNhKUgfEozzWF3G9H/AAEmh74HUhgTTss6e1M/xbdvwxrF1bPIghhGIMTEj4mxDkTpwzUjlmqGZhIhOiydCruqzPf8X2mh+ZWZ7/jM48xaAwjB/GXtXIBhaOQl6TkSkYq+Irfolf2y7V8pWxcH8RH1nIE0I3aZm/StL5EZKCvBjJeF1sR1ZEJMMRhSAIu25V8cn0HKGrYr7vTz9ZhM5s2bi6RaEL2x51B+X0Eg27uv3EWVPkR64lDy6TmeSXpXihsE6w5MMjl5iCib0D0S5i5LyzDlA9tmIr8YZltOOchl5kQpfjZvSDIDfWXVciVE2zEvX4iP0vOLqbHI8xNNNeMy+KP5WhJPVF8QloTsJGcEcplsPvH5y4xEjrPOySui8UbrR7sivkR6xhHKVxgCdbjuyN6LOmcSFGM/hLk4iWs8xGdLYFbLs/LMFfmZmc49ZQPIvPTH4G5Wz+UuJmQ5M0rLwlYjVHo17Gi2uvUNqcd6i2LUqZZcjOCZy9VwqnTsAvvHxJnsNLxGoabR196pfuq1dQwLVnbjmJ5TjPEqS52ZY8gcCFxik20dMaVFdiOpXaD5ZHiJw9RpCmcjHjOpTrkY4wQfUiV4wP4vd8h9DOSaTVndOMZQv6OJSeePQ/hHVjqYtAOX1P2j6x7rfOTxLZwT6EOvKS45CMuHJYMPdz9IXHtC30Kp6j5x+oXmDE0jkfoZtdciPijcGgSlTMynB/z0lL0wfxl2GD9I4JuAhUOSaBdbFKm4TTX0EpUmCY2XxwrYkpEGEmEqKc9l2xa9ZLHMos8qT3o6kdJOYliIjT3AdZqDA9Oc9HHJNHPJCnXMSw9YxkYmLKKPHMnN34GIlxKYjGMWZyS7LIYpmlSR6xCNLBjLwkkib2eq4FpO/ra5rVX2R0t27AXeraSU39cHGAJ5+/TFTuB255HHrN/Z3XMrW05Ud/W1OXJVVfBKNkTLrbDnY6hehV1LHcBK5NpMvj4cWn2Tp0rTGMsepJk8Vs3IwH9E/YylTDHUHyIlrSMEH5fPMlKmtHTj1Bo4gM6NNeEweRPMibfZVWssqgEYJIHOZUszGwY67Zx54uNIVcmdokWLhTH4yZW/4TKygqbIJ9GTTDmZtXpMWl+Kb8Rf8/8AyNk7EvXky1QwIyKsPkfpKNKOxP0X3iG4TDZZ9JIf/GS+dWPwZuBhEJb9ISymmJTMRMqJZpUTymdKHVjMcoK+kzqcTVXZnrOnE0TkDuT6eczkzWUGIgJzj5Iy0LFopjl+Ept5zQByH3iwvvCSlDodMFrOYCMHTPlK2dciO1SANrfmPAjmCOoInZ4tUl6V6kGpC3uPWFbKWLyPjgKeonEXkMmMJ6g9OWRn1lk/xpi3T0QXFfkT5LLVZPvt9B5Tp6buLKu4Naq6lmDhQGsQnOcjqwPL5bZgapkO08xnkZN42lZ0Qyq6Z19KQF58upJnnnuG5ygwpLFR5AmaNZrcr3a8h/tEeI8pgiSnvRXPkU0omhLfpHWD3TMUsrHz+YjLK6pnHw3ojTfEJ0pzahhlM6Up/n6YMnYq2ZWJjbmx15+QmcnMGWezRRWz7QQfSDmCGc2uRTw0K6+X3hISE6oy0SdGYygjlXOYpRznC/C6LiMr5eshV5mMUc5WOhexyEY5SrNj08JVgBI6/wCM6PktUT40xReXB95ZVFGecljggiRT9Y49V5n1i1wDjr6/LmZooszlvLBMQ522EeXIfYy06pNE120Q3PA8zg/IHJMYRnn6qM/LxlKkztz05ADzzzl1br6ksPQwL9hYixuXyziXd8jqx9DFOev1/bGg5AGc5IHKInbY30LK4kYxmN9fr9+gimH7vrFaoJO3p9z9syWXAzLKMnPoPvKag9B9IdJWb2ioM1UWcsfaYgY9eWIMc2mGStBZzJlUX95mhk5YlQmAZR423ZPlozsORP2lq0zGWpy+ktWOSxVD8huWhAJU/thHXAH84QSTT0zJpiA2IteskmQsgUHFv3QD9IrMMxrFoYzypMrmRBYUicwzIzCCzUbqvdrz/O3AnyHIAxeoPvE+gJP0jXO0Bf6IAJ6gxbLkL8sHHoZ1S64kl3Y2o8s+ij5MIvrk9MZP3XGJCHJI6Z2n5HOIy5sAY5DmMehhu1/DdMzWHP1J+wAl0Pw8scmP5RLeH1/bGVY5/Ln95GL2UfQxDy+QyPXESOfp6+cu55/t9OUF8PQZjvehUSDgn5LkTPacmMdvyiW6yWSXg8UWQS6mLEYsEQmuo5H3EtMiuR6Ro5+M6o5dURcNl7OhlEb3RBkxn5ExIIwIkp7sPHRa1swi2MiQk7Y6RWEMQxEGDMiGIQMwQhAzGCP0aZJPTaM59egiBNlA2rnz8c45SmJXL+Am9Be/h9vEDP5SKXOwjqd2AIixx0+oBl9Ifi8Oan8JTncxa/EaEwMZ58skfPwkO+R5eBEGP1lAep+Q/bC3WkKtiz9vH8TLoev+6Iljz/4R+EZV4/7slF7KMa5wD45PM+cXmWc/WJJzHkxUgJlAecsxlU6yDeyiL9JIPrj0kcvn6CWH2lEAk9P3SFMC3/f5SJvQMfv6+PIiJUQgpxM3YCp8ZMnEIrQbKyMyWEqIGEtmGYSJjE5kZhImsxetdxA8+U23KAPsAT5CU4fo3chhhVGMFgcO/gi+ZnaXh2mWwK7taNrEuMLuYDw/mrmdOKD49dgcG2ebcSdI2Cczo8S0iqNycvNc55ec5Oef4SE1xlY8oNaZoPMgZ5c8keULn8AOQ+0UGkO3L98PPQiRA+0ehHPPn98RdNTufcQv+qpM2V8Pt55XZ1PvH8hNCL+hnFsyMf3ymZou0+w4bn0II5CUyPL79YXF3sXoQxgqHy/KPBkZicf2GwIOPAeglCB5ZlyYpj9YzMi3+RAmVBk5i2YnMJEmYBIeEriE1sxrHc4AYMG5kkcx1wABI7uk9HI+axTiLlXOtOKFSv0eaF8LFkHTHzB+RiYzT172RN23cVXcegzBcX4Gn9kGhvKP4fplZ/40hUUM7Anbv2jIQepll0vIst6bchcksnvH/ZII5dOvST7FqeQxk8soGUuvjkrnkD1zCoK7oNs9FXrk31YKsKqLHJGMd66flvwB/RnLS7daR0xsB+vOc40XZI7otgBjtXd7p8cjliI70j0+RIlZZf1Q0ZNHWo/jS7Hod2PlONZXjPjgnJjRqWxt3EDwGeUrvH7+UhJqSHnk5JaK6alrXCJ1PieigcyT6Cd7QaWqpTZjefeUO4xgD4mA8AOk4+n1BqDhMDcACxB3BeuBHjiDe4CoKqFAQHAIHPn8zzMbFxjt9iqVM7h1Xujd7q4yAeQAPiQIjvFcZX7+c5Gq1bXEbuS5BYA53GRdrW6L7oHICUeRHRDMktjOLNzQfM/Sc/dz+0LbCx3E5PnKTmnO2Qm+TbGEwzKZgDByEosTK5hCBsJIhIhMYJMiEBiZMrCazG0pnP1JiTp38jGMT8vQSu8jxxOuSi+ySbFMhHhIBIIPToQfUR/fN8/nDvfNQZPjHxjWxRtOHH84hjy8Rnp95sXifLDJn3VUjdhWxXsyeWc48jM2UPh9pBRfOFOUema0+0a0sR6xSu8YY2BjtJB6YwDzHrE8U/lN3M5RCdwwxIXBJHrjMSavWTT7jo5RbArKxR8lHAOdpxzx4GCcm400FVZ7BeymnS3hqtvcOl9XEF3EGvWppu/2AjoAtlY+dbTnp2L1RrosNlK957KrbheoqbUVF6QzGvad3T3SdpbDST224gzO1rLfm46hFt3laWKXIyVgN7qlben9FYgdqbf9HY6bTtbSKdtz+0MzmmnuqiVL7AVG08lGWVSZz0y1xJ4ZwJV4lptDqiGBspXUrS53ISm5684+Nehx4zfrOyNdOny16i6zWUVUWuxFI0NldxqvIUE4fZkTkL2gu9sq1/d1G5O7ZuTBbrUTabHAPxN1OOrQ4N2l1Ok27dthFumvDWl2YdzVdUlYw2Qu25unMeE2zKjrU9i7O71CsyNYPYb6tQDbXTVpHF5tusVlDKq91zyuYcN7HXMdHdbtemy3h/fVoLltXT6i1FRt5TZ72V5KxYbpmHbXVAoa66a9nsgCL37KyUPcwrbc5Lq3fMGDHnKp2qt/0VhpqA+nfSvVafaC22hs1VkF9u0AKuQNxCwqw6OrZ2Jq7u3ZaGsu1eir4YzNhDor7Nq32YHMEsq+hrsnG4f2S1GoRbe9prrNVmoZ2F77ETUdxzWtC3x+QIAmfhnaLU6TkmGIs0lqG3c4qOnuNtaoM8lLNzE7C9qq0bT2VaSutqEYadB7QtdVjXG0kMtwb4iw5kgiFRbsGmYl7N99Xp7Fs0+kq9nrtt1Oovtat7H1VtKnATKljWeQBAVckzgW1lGdCVYqzKSjh0JBxkMOTDyI6z0Ffaa7G2yjT6lCgR6rq3Fbkaq3UCw7HBDb7nGByKzz9tm9mfCruZmKooRFyc4CjoB4CBJgloWZEsZWFiBDEIQGCEDCYwQhCYxu9pU9VlSaz5iEJ1/I32ScEuiprHgfvKmsyYQ8UzWVIlcQhJNBTIhCEQIZMN0ITWGg3ekjAkwgMSqiXIAhCNWh4dgJMIRSpDNECTCC9k5kqJZlkQj1ok3sqVkYhCI0MmGJEIQUEIQhAY//2Q==", 
            name:"Running Night",
            artist:"Lionel Richie",
            album:"Can't Slow Down (1983)"
        },
        {
            id: song2, 
            songimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyj4t2Uu8NcVWmiPZOrUDEQYytD2vsWSiXeAsUyrnsjZqwMJ1IIz-Ro0uYgFd1lx1SHDg&usqp=CAU", 
            name:"Tell Me The Truth",
            artist:"Artist: Jason Aldean",
            album:"Album: Wide Open (2009)"
        },
        {
            id: song3, 
            songimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG6WpQJSVfpgaptEPbd9Apa9vPHs09pBwbBdE7EYdy5GAwfyj-DqQRs2SAcjZTN1GEwjs&usqp=CAU", 
            name:"Vlog Beat Background",
            artist:"Artist: Tunetank",
            album:"Album: Can't Slow Down (1983)"
        }
    ];
    // console.log("first song: "+mySongs[0].id);
    const [index, setIndex] = useState(0);
    const [currentTime,setCurrentTime] = useState(0);
    const [duration,setDuration] = useState(0);

    const [isPlaying,setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const handlePlayPause = () =>{
        if(audioRef.current){
            if(isPlaying){
                audioRef.current.pause();
            }
            else{
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    }

    useEffect(()=>{
        const audio = audioRef.current;
        const setAudioData = () => {
            setCurrentTime(audio.currentTime);
            setDuration(audio.duration);
        };

        const updateTime = () =>{
            setCurrentTime(audio.currentTime);
        };

        audio.addEventListener('loadeddata',setAudioData);
        audio.addEventListener('timeupdate',updateTime);

        return()=>{
            audio.removeEventListener('loadeddata',setAudioData);
            audio.removeEventListener('timeupdate',updateTime);
        };
    },[]);

    const handleSeek = (event) =>{
        const audio = audioRef.current;
        audio.currentTime = event.target.value;
        setCurrentTime(event.target.value);
    };

    const formatTime = (time) =>{
        const minutes = Math.floor(time/60);
        const seconds = Math.floor(time%60);

        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    useEffect(()=>{
        if(audioRef.current){
            audioRef.current.load();
            if(isPlaying){
                audioRef.current.play();
            }
        }
    },[index]);

    // console.log(mySongs.length);
    const nextSong = ()=>{
        // index < mySongs.length-1 ? setIndex(index+1) : setIndex(0);
        setIndex(prevIndex => prevIndex < mySongs.length-1 ? prevIndex+1 : 0);
        
    };

    const prevSong = ()=>{
        // index > 0 ? setIndex(index-1) : setIndex(mySongs.length-1);
        setIndex(prevIndex => prevIndex > 0 ? prevIndex-1 : mySongs.length-1);
        
    };

    const progressPercentage =
  duration ? (currentTime / duration) * 100 : 0;

    return(
        <div>
            <h3 className='music-h3'>Music Player</h3>
            <div className="musicbox">
                <audio ref={audioRef} src={mySongs[index].id} preload="metadata" />
                <img src={mySongs[index].songimg} id="thumbnail" />
                <div className="songInfo">
                    <ul className='music-ul'>
                        <li className='music-li'><b>Artist: </b>{mySongs[index].artist}</li>
                        <li className='music-li'><b>Album: </b>{mySongs[index].album}</li>
                    </ul>
                    
                </div>
                <h3 id="musicName">{mySongs[index].name}</h3>

                {/* Progress bar */}
                <div className='progressBar-conatiner'>
                    <span className='playbackTime'>{formatTime(currentTime)}</span>
                    <input type='range' id="progressBar" 
                    min="0" max={duration||0} 
                    value={currentTime} 
                    onChange={handleSeek}
                    style={{
                        background: `linear-gradient(to right, #34073D ${progressPercentage}%, #deb4c3 ${progressPercentage}%)`
                      }}
                       />
                    <span className='playbackTime'>{formatTime(duration)}</span>
                </div>

                <div className="btn-container">
                    {/* prev btn */}
                    <button className='musicBox-btn' onClick={prevSong}>
                        <img className='musicBox-btn-icon' src="https://uxwing.com/wp-content/themes/uxwing/download/controller-and-music/play-previous-white-icon.svg" />
                    </button>
                    {/* play pause btn */}
                    <button className='musicBox-btn' onClick={handlePlayPause}>
                        {isPlaying ? <img className='musicBox-btn-icon' src="https://uxwing.com/wp-content/themes/uxwing/download/controller-and-music/pause-button-round-white-icon.svg" /> :<img className='btn-icon' src="https://uxwing.com/wp-content/themes/uxwing/download/controller-and-music/play-button-round-white-icon.svg" /> }
                    </button>
                    {/* next btn */}
                    <button className='musicBox-btn' onClick={nextSong}>
                        <img className='musicBox-btn-icon' src="https://uxwing.com/wp-content/themes/uxwing/download/controller-and-music/play-next-white-icon.svg" />
                    </button>
                </div>
                {/* <audio ref={audioRef} src={mySongs[index].id} /> */}
                {/* {console.log(mySongs[index].id)} */}
            </div>
        </div>
    );
}