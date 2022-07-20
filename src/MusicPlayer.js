import React, {useState} from "react";
import "./musicplayer.css"

function MusicPlayer() {
 const[musicPlaying, setMusicPlaying] = useState(false)


 function playPause () {
   setMusicPlaying(prevState => !prevState)
   console.log(musicPlaying)
 }

 

return (
<div className="container">
 <div className="music-player">
 <div className="album-artwork-container">
 <img className="track-img" src="https://i.ytimg.com/vi/COsjYzaHJoY/hqdefault.jpg" />
 </div>
 <div className="track-info">
  <h2 className="track-title"> Too Deep For The Intro </h2>
  <h3 className="track-artist"> J Cole </h3>
  <div className="process-bar">
  <h2> process </h2>
  </div>
  <div className="music-player-btns">
  <div className="btn-container">
  <img className="prev-btn" src="https://cdn-icons-png.flaticon.com/512/93/93634.png" />
  </div>
    <div className="btn-container">
   <img className={musicPlaying ?"pause-btn" : "play-btn"} onClick={playPause} src={musicPlaying ? "https://cdn-icons-png.flaticon.com/512/16/16427.png" : "https://cdn-icons-png.flaticon.com/512/17/17550.png" } />
  </div>
  <div className="btn-container">
  <img className="next-btn" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Ic7eIu95GwRwL2q2I3IhCpy6km41ftUgLWI5hcJf0RklCbJMmO9lIJhVEdYm2njffEI:https://www.svgrepo.com/show/88210/next.svg&usqp=CAU" />
  </div>
  </div>
 </div>
 </div>
</div>




)



}

export default MusicPlayer
