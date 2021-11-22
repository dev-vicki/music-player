import React from "react";
import {playAudio} from '../util';

const LibrarySong = ({song, songs, setCurrentSong, id, audioRef, isPlaying, setSongs}) => {
  const songSelectHandler = () => {
    const selectedSong = songs.filter((state) => state.id === id);
    setCurrentSong(selectedSong[0]);
    // add active state
    const newSongs = songs.map((song) => {
      if(song.id === id){
        return{...song,active:true,}
      }else{
        return{...song,active:false,}
      }
    })
    setSongs(newSongs)
    //checking if the song is playing
    playAudio(isPlaying, audioRef);

  }
  return (
    <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected': ""}`}>
      <img src={song.cover} alt={song.name}></img>
      <div className="song-description">
        <h2>{song.name}</h2>
        <h3>{song.artist}</h3>
      </div>
    </div>
  );
};

export default LibrarySong;
