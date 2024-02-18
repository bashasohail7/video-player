import React, { useRef, useState } from 'react';

import Bunny from '../assets/images/BigBuckBunny.jpg'
import Elephant from '../assets/images/ElephantsDream.jpg'
import ForBiggerBlazes from '../assets/images/ForBiggerBlazes.jpg'
import ForBiggerEscapes from '../assets/images/ForBiggerEscapes.jpg'
import ForBiggerFun from '../assets/images/ForBiggerFun.jpg'
import ForBiggerJoyRides from '../assets/images/ForBiggerJoyrides.jpg'
import ForBiggerMeltdowns from '../assets/images/ForBiggerMeltdowns.jpg'
import Sintels from '../assets/images/Sintel.jpg'
import Subaru from '../assets/images/SubaruOutbackOnStreetAndDirt.jpg'
import TearsOfSteel from '../assets/images/TearsOfSteel.jpg'
import Volkswagen from '../assets/images/VolkswagenGTIReview.jpg'
import WeAreGoing from '../assets/images/WeAreGoingOnBullrun.jpg'
import WhatCarCan from '../assets/images/WhatCarCanYouGetForAGrand.jpg'


import { Draggable } from "react-drag-reorder";
export const videos = [
  {
    "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
    "sources": ["https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"],
    "subtitle": "By Blender Foundation",
    "thumb": Bunny,
    "title": "Big Buck Bunny"
  },
  {
    "description": "The first Blender Open Movie from 2006",
    "sources": ["https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"],
    "subtitle": "By Blender Foundation",
    "thumb": Elephant,
    "title": "Elephant Dream"
  },
  {
    "description": "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",
    "sources": ["https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"],
    "subtitle": "By Google",
    "thumb": ForBiggerBlazes,
    "title": "For Bigger Blazes"
  },
  {
    "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
    "sources": ["https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"],
    "subtitle": "By Google",
    "thumb": ForBiggerEscapes,
    "title": "For Bigger Escape"
  },
  {
    "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35.  Find out more at google.com/chromecast.",
    "sources": ["https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"],
    "subtitle": "By Google",
    "thumb": ForBiggerFun,
    "title": "For Bigger Fun"
  },
  {
    "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.",
    "sources": ["https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"],
    "subtitle": "By Google",
    "thumb": ForBiggerJoyRides,
    "title": "For Bigger Joyrides"
  },
  {
    "description": "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when you want to make Buster's big meltdowns even bigger. For $35. Learn how to use Chromecast with Netflix and more at google.com/chromecast.",
    "sources": ["https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"],
    "subtitle": "By Google",
    "thumb": ForBiggerMeltdowns,
    "title": "For Bigger Meltdowns"
  },
  {
    "description": "Sintel is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film.\nThis 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. In addition to that, several crucial technical and creative targets have been realized online, by developers and artists and teams all over the world.\nwww.sintel.org",
    "sources": ["https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"],
    "subtitle": "By Blender Foundation",
    "thumb": Sintels,
    "title": "Sintel"
  },
  {
    "description": "Smoking Tire takes the all-new Subaru Outback to the highest point we can find in hopes our customer-appreciation Balloon Launch will get some free T-shirts into the hands of our viewers.",
    "sources": ["https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"],
    "subtitle": "By Garage419",
    "thumb": Subaru,
    "title": "Subaru Outback On Street And Dirt"
  },
  {
    "description": "Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool Blender. Target was to improve and test a complete open and free pipeline for visual effects in film - and to make a compelling sci-fi film in Amsterdam, the Netherlands.  The film itself, and all raw material used for making it, have been released under the Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org website to find out more about this, or to purchase the 4-DVD box with a lot of extras.  (CC) Blender Foundation - https://www.tearsofsteel.org",
    "sources": ["https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"],
    "subtitle": "By Blender Foundation",
    "thumb": TearsOfSteel,
    "title": "Tears of Steel"
  },
  {
    "description": "The Smoking Tire heads out to Adams Motorsports Park in Riverside, CA to test the most requested car of 2010, the Volkswagen GTI. Will it beat the Mazdaspeed3's standard-setting lap time? Watch and see...",
    "sources": ["https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4"],
    "subtitle": "By Garage419",
    "thumb": Volkswagen,
    "title": "Volkswagen GTI Review"
  },
  {
    "description": "The Smoking Tire is going on the 2010 Bullrun Live Rally in a 2011 Shelby GT500, and posting a video from the road every single day! The only place to watch them is by subscribing to The Smoking Tire or watching at BlackMagicShine.com",
    "sources": ["https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"],
    "subtitle": "By Garage419",
    "thumb": WeAreGoing,
    "title": "We Are Going On Bullrun"
  },
  {
    "description": "The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.",
    "sources": ["https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"],
    "subtitle": "By Garage419",
    "thumb": WhatCarCan,
    "title": "What care can you get for a grand?"
  }
];
function Playlist({ handleClick, selectedVideoTitle }) {
  console.log('selecyedvideo ===>', selectedVideoTitle)
  const [filteredVideos, setFilteredVideos] = useState(videos)
  const onChange = (e) => {
    const filtered = videos.filter(video =>
      video.title.toLowerCase().includes('big')
    );
    setFilteredVideos(filtered);
  };


  const onSelect = (info) => {
    handleClick(info);
  }

  return (
    <div className="playlist" >
      <h2>Playlist</h2>
      <hr />
      {/* <input
        type="text"
        placeholder="Search videos..."
        // value={searchQuery}
        onChange={(e) => onChange(e)}
      /> */}
      <Draggable >

        {videos.map((info, idx) => {
          return (
            <div className={`playlist-item ${selectedVideoTitle == info.title ? 'active-video' : ''}`}
              key={info.title} onClick={() => onSelect(info)}>
              <img src={info.thumb} height={100} width={120} alt={info.title} />
              <h4 className='playlist-title' style={{ alignSelf: 'end', marginLeft: '5px' }}>
                {info.title}
              </h4>
            </div>
          );
        })}
      </Draggable>
    </div>
  );
}


export default Playlist;
