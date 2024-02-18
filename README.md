# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

To run this web application locally, first clone this project then run the command "npm install" in project directory and then run the command "npm run dev".
This is a video player app. It has majorly two components 1.Playlist.jsx and 2.VideoPlayer.jsx 

This app has functionalities like :
Video Player Component(No external library has been used):

Implement a video player with essential functionalities:
Play/Pause toggle.
Seek functionality.
Timer displaying current playback time and duration.
Autoplay.
Speed selector for playback speed adjustment.


Playlist Component:

Develop a playlist component to display and manage videos.
Allow users to reorder videos in the playlist(External library react-reorder has been used).
Clicking on a video in the playlist will load and play that video in the video player.


Bonus Functionalitites:

Implement additional features such as fullscreen mode, volume control, thumbnail previews, for the playlist.
Make the application responsive for various screen sizes.
Add keyboard shortcuts for keyboard warriors.
Videos should continue playing from where users left-off.

Note: as I am using exteranl library for reordering, the Draggable componnet has some caveats which hampering state updates.
