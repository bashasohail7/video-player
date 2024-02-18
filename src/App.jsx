import React, { useState } from 'react';
import VideoPlayer from './components/VideoPlayer';
import Playlist from './components/Playlist';
import './App.css';
import { videos } from './components/Playlist';
function App() {
  const [state, setState] = useState(videos[0])
  const[isVideoSelected,setIsVideoSelcted]=useState(false)
  const handleClick = (src) => {
    setState(src)
    setIsVideoSelcted(true)
  }
  return (
    <div className="app">
      <div className='video-player-container'>
        <VideoPlayer videoSrc={state} desc={videos[0].description} isVideoSelected={isVideoSelected} />
      </div>
      <div className='playlist-container'>
        <Playlist handleClick={handleClick} selectedVideoTitle={state.title}  />
      </div>
    </div>
  );
}

export default App;
