import { songs } from "./Timer";
import '../styles/styles.css';
// import song1 from '../Musics/Idhudhaanaa.mp3';
// import song2 from '../Musics/KannumKannum.mp3';
// import song3 from '../Musics/AvaEnna.mp3';
// import song4 from '../Musics/AdiyaeKolluthey.mp3';
// import song5 from '../Musics/Lolita.mp3';
import { useState,useEffect,useRef} from "react";

function Musics(props){
    const [fontBold,setFontBold] = useState(false);
    const [selectSong,setSelectSong] = useState(false);
    const [song,setSong] = useState(null);
    const currentAudioRef = useRef(null);
    const[triggerAlert,setTriggerAlert] = useState(false);
    
    useEffect(() => {
    if (selectSong && song) {

      if (currentAudioRef.current) {
        currentAudioRef.current.pause();
      }
      setFontBold(true);

      //create and play the music
      const newAudio = new Audio(song);
    //   newAudio.play();

      //store the current song to useRef hook
      currentAudioRef.current = newAudio;
      setSelectSong(false);
    }
    
  }, [selectSong, song]);

    const HandleSong = (e)=>{
        const path = e.target.getAttribute('value');
        const songId = e.target.getAttribute('id');

        setSong(path);
        setSelectSong(true);

        props.onPlaying(songId);
    }

    return(
        <div className="Music-Container">
            <div className="Music-Heading">
                <h2>Choose Song</h2>
            </div>
            <div className="Music-List">
                    {songs.map((songs)=>{
                        return (
                            <>
                                <div className="Song-Container">
                                    <li 
                                        key={songs.id} 
                                        id={Number(songs.id)}
                                        style={fontBold?{fontWeight:'bolder'}:{fontWeight:'none'}} 
                                        value={songs.music} 
                                        onClick={HandleSong}>
                                        {songs.name}
                                    </li>
                                    <hr />
                                </div> 
                            </>    
                        )
                    })}
            </div>
            
        </div>
    );
}

export default Musics;