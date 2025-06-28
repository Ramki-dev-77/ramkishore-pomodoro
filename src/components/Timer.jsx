import { useEffect, useState,useRef } from "react";
import '../styles/styles.css';
import play from '../Images/play.svg';
import stop from '../Images/stop.svg';
import pause from '../Images/pause.svg';
import song1 from '../Musics/Idhudhaanaa.mp3';
import song2 from '../Musics/KannumKannum.mp3';
import song3 from '../Musics/AvaEnna.mp3';
import song4 from '../Musics/AdiyaeKolluthey.mp3';
import song5 from '../Musics/Lolita.mp3';

const songs = [
    {
        id:0,
        name : "Haaris Jayaraj - Idhudhaana",
        music : song1
    },
    {
        id:1,
        name : "Haaris Jayaraj - Kannum_Kannum",
        music : song2
    },
    {
        id:2,
        name : "Haaris Jayaraj - Ava_Enna",
        music : song3
    },
    {
        id:3,
        name : "Haaris Jayaraj - Adiyae_Kolluthey",
        music : song4
    },
    {
        id:4,
        name : "Haaris Jayaraj - Lolita",
        music : song5
    },
    {
        id:5,
        name : "Haaris Jayaraj - Idhudhaana",
        music : song1
    },
    {
        id:6,
        name : "Haaris Jayaraj - Kannum_Kannum",
        music : song2
    },
    {
        id:7,
        name : "Haaris Jayaraj - Kannum_Kannum",
        music : song2
    }

];
function Timer(props){
    const[start,setStart] = useState(false);
    const[pausing,setPausing] = useState(false);
    const [seconds,setSeconds] = useState(0);
    const [minutes,setMinutes] = useState(0);
    const [rest,setRest] = useState(false);
    const [isAlert,setIsAlert] = useState(true);
    const intervalRef = useRef(null);
    const alarmRef = useRef(new Audio(props.selectedMusic));



    useEffect(()=>{
        if(minutes === 12 && seconds === 30){
            setMinutes(0);
            setSeconds(0);
            setStart(true);
            if(alarmRef.current){
                alarmRef.current.src = props.selectedMusic;
                alarmRef.current.play();
                setRest(true);
            }

            setTimeout(()=>{
                if(alarmRef.current){
                    setIsAlert(false);
                    alarmRef.current.pause();
                    alarmRef.current.currentTime = 0;
                }
                setSeconds(0);
                setMinutes(0);
                setStart(false);
                setRest(false);
            },180000);                         
        }
    },[props.selectedMusic,seconds,minutes]);

    useEffect(()=>{
        if(seconds === 60){
            setSeconds(0);
            setMinutes(minutes=>minutes+1);
        }
    },[seconds]);

    useEffect(()=>{
        if(start && !pausing){
            intervalRef.current =  setInterval(()=>{
                setSeconds(seconds=> seconds+1);
             },1000);
        }
        return ()=> clearInterval(intervalRef.current);
    },[start,pausing]);

    function HandlePlay(){
        setPausing(false);
        setStart(true);
        setRest(false);
    }

    function HandleStop(){
        setStart(false);
        setMinutes(0);
        setSeconds(0);
        
        if(alarmRef.current){
            alarmRef.current.pause();
            alarmRef.current.currentTime = 0;
        }
    }

    function HandlePause(){
        setPausing(true);
        console.log(intervalRef.current);
        clearInterval(intervalRef.current);
    }

    function HandleAlert(){
        alert("Please choose the song first");
        setIsAlert(false);
    }

    const alignedMinutes = minutes < 10 ? '0'+minutes : minutes;
    const alignedSeconds = seconds < 10 ? '0'+seconds : seconds;

    return(
        <div>
            <div className="Timer">
                
                <div className="TimerContainer">
                    <h1>{alignedMinutes}</h1>
                    <h1>:</h1>
                    <h1>{alignedSeconds}</h1>
                </div>

                <div className="TimerButtons">
                    <button className="TimerPauseButton" title="pause" onClick={HandlePause}>
                        <img src={pause} alt="" height={50} width={50}/>
                    </button>
                    <button className="TimerPlayButton" title="play" onClick={isAlert ? HandleAlert : HandlePlay}>
                        <img src={play} alt="" height={50} width={50}/>
                    </button>
                    <button className="TimerStopButton" title="stop" onClick={HandleStop}>
                        <img src={stop} alt="" height={50} width={50}/>
                    </button>
                </div>
                <br />
                <br />
                <div style={{textAlign:'center'}}>
                    {rest ? <h1>Break Time</h1> : <h1>Focus Time</h1>}
                </div>
            </div>
        </div>
    );
}

export default Timer;
export {songs};