import React, { useState } from "react";
import tomato from '../Images/heading-tomato.svg';
import Timer from "./Timer";
import About from "./AboutPomodoro";
import '../styles/styles.css';
import Musics from "./MusicList";
import { songs } from "./Timer";
function Pomodoro(){
    const[songTitle,setSongTitle] = useState(null);
    const[songToPlay,setSongToPlay] = useState(null);

    function selectedSong(id){
        for(let i = 0;i < songs.length;i++){
            if(songs[i].id == id){
                setSongTitle(songs[i].name);
                setSongToPlay(songs[i].music);
            }
        }
    }
    return(
        <>
            <div className="Container">
                <img src={tomato} alt="tomato1" height={75} width={75}/>
                <h1>Mini Pomodoro</h1>
                <img src={tomato} alt="tomato2" height={75} width={75}/>
            </div>
            {songTitle ? <h1 className="RemainderSong" style={{textAlign:'center'}}>Break Song : {songTitle}</h1> : <h1></h1>}
            <div className="Main-Section">
                <Musics onPlaying={selectedSong}/>
                <Timer selectedMusic={songToPlay}/> 
                <About />  
            </div>
        </>
    );
}
export default Pomodoro;