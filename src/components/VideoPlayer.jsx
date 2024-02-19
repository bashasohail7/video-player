import PlayIcon from '../assets/images/icons8-play-48.png'
import PauseIcon from '../assets/images/icons8-pause-52.png'
import BigPlayIcon from '../assets/images/icons8-play-96.png'
import FullScreenIcon from '../assets/images/icons8-full-screen-50.png'
import VolumeON from '../assets/images/icons8-volume-50.png'
import VolumeOFF from '../assets/images/icons8-mute-50.png'
import React, { useEffect, useRef, useState } from 'react';
function VideoPlayer({ videoSrc, isVideoSelected }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(10);
  const [duration, setDuration] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1)
  const [aspectRatio, setAspectRatio] = useState(16 / 9);
  const [volume, setVolume] = useState(1);
  const [hoverTime, setHoverTime] = useState(null);
  const timerIdRef = useRef()
  const seekBarRef = useRef(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  useEffect(() => {
    setPlaybackSpeed(1)
    clearInterval(timerIdRef.current)
    const handleKeyDown = (event) => {
      switch (event.keyCode) {
        case 32: //space bar
          {
            event.preventDefault();
            togglePlay();
          }
          break;
        case 37: // Left arrow for seek backward
          seekBackward();
          break;
        case 39: // Right arrow for seek forward
          seekForward();
          break;
        case 70: // 'F' key for fullscreen
          toggleFullscreen();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [])
  const seekBackward = () => {
    const seekTime = Math.max(0, videoRef.current.currentTime - 10); // Seek 10 seconds backward
    videoRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const seekForward = () => {
    const seekTime = Math.min(videoRef.current.duration, videoRef.current.currentTime + 10); // Seek 10 seconds forward
    videoRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(savePlaybackPosition, 2000); // Save playback position every 10 seconds
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const formattedTime = (time) => {
    if (duration / 3600 >= 1) {
      return time / 3600 + ':' + Math.floor(time / 60).toString().padStart(2, 0) + ':' + Math.floor(time % 60).toString().padStart(2, 0)
    } else if (duration / 60 >= 1) {
      return Math.floor(time / 60).toString().padStart(2, 0) + ':' + Math.floor(time % 60).toString().padStart(2, 0)
    } else {
      return Math.floor(time % 60).toString().padStart(2, 0)
    }
  }
  const savePlaybackPosition = () => {
    // console.log('setting time',videoRef.current.currentTime)
    localStorage.setItem(videoSrc.title, videoRef.current.currentTime); // Save playback position
  };


  useEffect(() => {
    const storedTime = localStorage.getItem(videoSrc.title);
    if (storedTime !== null) {
      setCurrentTime(storedTime);
      videoRef.current.currentTime = storedTime
      // console.log('getting time',storedTime)
    }
    setIsPlaying(false)
    setPlaybackSpeed(1)
    if (isVideoSelected) {
      setIsPlaying(true)
      videoRef.current.play()
    }
  }, [videoSrc])

  const handleSpeedChange = (speed) => {
    setPlaybackSpeed(speed)
    videoRef.current.playbackRate = speed;
  };
  const handleMetadataLoaded = () => {
    setDuration(videoRef.current.duration);
    const { videoWidth, videoHeight } = videoRef.current;
    const aspectRatio = videoWidth / videoHeight;
    setAspectRatio(aspectRatio);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleSeek = (e) => {
    const seekTime = e.target.value;
    videoRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const toggleFullscreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.mozRequestFullScreen) {
      videoRef.current.mozRequestFullScreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.msRequestFullscreen) {
      videoRef.current.msRequestFullscreen();
    }
  }

  const toggleVolume = () => {
    const newVolume = volume === 0 ? 1 : 0;
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
  };
  const handleHoverSeekBar = (e) => {
    const rect = seekBarRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const percentage = offsetX / rect.width;
    const hoverTime = duration * percentage;
    setHoverTime(hoverTime);
  };
  return (
    <>
      <div style={{ position: 'relative' }}>

        <video
          style={{ width: '100%', height: `calc(100% / ${aspectRatio})`, cursor: 'pointer' }}
          onClick={togglePlay}
          ref={videoRef}
          src={videoSrc.sources}
          onLoadedMetadata={handleMetadataLoaded}
          onTimeUpdate={handleTimeUpdate}
        />
        {!isPlaying && (
          <div className="play-icon" onClick={togglePlay}>
            <img src={BigPlayIcon} alt='play icon' />
          </div>
        )}
        <div className="fullscreen-icon" onClick={toggleFullscreen}>
          <img src={FullScreenIcon} width={30} className='fullscreen-img' alt="Fullscreen icon" />
          {/* <h2>Full</h2> */}
        </div>

      </div>
      <div className="controls">
        <section className='controls-leftside'>
          <button onClick={togglePlay}>
            {isPlaying ? <img src={PauseIcon} height={30} alt={'Pause Icon'} /> : <img src={PlayIcon} alt='Play Icon' height={30} />}
          </button>
          <input
            ref={seekBarRef}
            className='seek-bar'
            aria-label='Seek bar'
            type='range'
            min={0}
            max={duration}
            value={currentTime}
            onChange={handleSeek}
            onMouseMove={handleHoverSeekBar} // Call handleHoverSeekBar on mouse move
            onMouseLeave={() => setHoverTime(null)} // Clear hover time when leaving seek bar
          />
          {/* Tooltip for displaying duration */}
          {hoverTime !== null && (
            <div className='tooltip' style={{ left: `${(hoverTime / duration) * 100}%` }}>
              {formattedTime(hoverTime)}
            </div>
          )}
          <span className='time'>{`${formattedTime(currentTime)} / ${formattedTime(duration)}`}</span>
        </section>
        <section className='controls-rightside'>
          {
            volume ?
              <img src={VolumeON} width={28} onClick={toggleVolume} alt="Volume Icon" /> :
              <img src={VolumeOFF} width={28} onClick={toggleVolume} alt="Volume Icon" />

          }
          <select aria-label='playback speed' className='speed' value={playbackSpeed} onChange={(e) => { handleSpeedChange(e.target.value) }}>
            <option value={0.25}>0.25</option>
            <option value={0.50}>0.50</option>
            <option value={0.75}>0.75</option>
            <option value={1}>1X</option>
            <option value={1.25}>1.25</option>
            <option value={1.5}>1.5</option>
            <option value={1.75}>1.75</option>
            <option value={2}>2.0</option>
          </select>
        </section>
      </div>
      <h4 className='playlist-title' >
        {videoSrc.title}
      </h4>
      <p className='video-description'>{videoSrc.description}</p>
    </>
  );
}

export default VideoPlayer;


