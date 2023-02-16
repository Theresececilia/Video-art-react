import React from 'react'
import Sketch from "react-p5";
import './App.css'

let cloudPath = 'https://static-assets.codecademy.com/Courses/Learn-p5/projects/cloud.mp4';
let starsPath = 'https://static-assets.codecademy.com/Courses/Learn-p5/projects/stars.mp4';
let staticPath = 'https://static-assets.codecademy.com/Courses/Learn-p5/projects/static.mp4';
let humanPath = 'https://static-assets.codecademy.com/Courses/Learn-p5/projects/human.mp4';

let cloudVideo, starsVideo, staticVideo, humanVideo;
let videos;
let outsideVideos;

let margin = 20;
let numOfScreensTall = 4;
let numOfScreensWide = 4;

let counter = 1;

function App() {
  

  return (
    <div className="App">
      <div className='square first'>
      <video id="video" src={cloudPath} loop autoPlay muted></video>
      </div>
      <div className='square first'>
      <video id="video" src={cloudPath} loop autoPlay muted></video>
      </div>
      <div className='square first'>
      <video id="video" src={cloudPath} loop autoPlay muted></video>
      </div>
      <div className='square first'>
      <video id="video" src={cloudPath} loop autoPlay muted></video>
      </div>
      <div className='square first'>
      <video id="video" src={humanPath} loop autoPlay muted></video>
      </div>
      <div className='square first'>
      <video id="video" src={cloudPath} loop autoPlay muted></video>
      </div>
      <div className='square first'>
      <video id="video" src={cloudPath} loop autoPlay muted></video>
      </div>
      <div className='square first'>
      <video id="video" src={cloudPath} loop autoPlay muted></video>
      </div>
      <div className='square first'>
      <video id="video" src={cloudPath} loop autoPlay muted></video>
      </div>
    </div>
  )
}


/*
export default (props) => {
const setup = (p5, canvasParentRef) => {
  // use parent to render the canvas in this ref
  // (without that p5 will render the canvas outside of your component)
  p5.createCanvas(600, 500).parent(canvasParentRef);
  
  // Load videos
  cloudVideo = p5.createVideo(cloudPath);
  starsVideo = p5.createVideo(starsPath);
  staticVideo = p5.createVideo(staticPath);
  humanVideo = p5.createVideo(humanPath);
 
  // Populate videos array
videos = [cloudVideo, starsVideo, staticVideo, humanVideo];
  
// Iterate over videos to loop, mute, and hide each one
 for(let i = 0; i < videos.length; i++) {
   let video = videos[i];
   video.volume(0);
   video.loop();
   video.hide();
 }
  
};

const draw = (p5) => {
  p5.background(0);
  
  // Calculate the width and height for each "screen" in the grid
  let w = (p5.width - margin * (numOfScreensWide + 1)) / numOfScreensWide;
  let h = (p5.height - margin * (numOfScreensWide + 1)) / numOfScreensWide;
  
  // Create a 4x4 grid of screens with a margin of 20px
  for (let i = 0; i < numOfScreensWide; i++) { 
    for (let j = 0; j < numOfScreensTall; j++) {
    
      // Calculate current x, y position where this "screen" should be drawn
      let x = margin + i * (w + margin);
      let y = margin + j * (h + margin);
      
      // Draw a white rectangle to demonstrate where this "screen" is
      p5.fill(255);
      p5.rect(x, y, w, h);
      
      // TODO: Fill this "screen" with a video, according to its (i,j) position
      if (i === 1 && j === 1) {
        image(humanVideo, x, y, w, h, 0, 0,
         humanVideo.width / 2, humanVideo.height / 2);
      } else if (i === 1 && j === 2) {
        image(humanVideo, x, y, w, h, 0, humanVideo.height / 2,
         humanVideo.width / 2, humanVideo.height / 2);
      } else if (i === 2 && j === 1) {
        image(humanVideo, x, y, w, h, humanVideo.width / 2, 0,
         humanVideo.width / 2, humanVideo.height / 2);
      } else if (i === 2 && j === 2) {
        image(humanVideo, x, y, w, h, humanVideo.width / 2,
         humanVideo.height / 2, humanVideo.width / 2,
          humanVideo.height / 2);
      } else {
        let selectedIndex = (i * j + counter) % outsideVideos.length;
        let selectedVideo = outsideVideos[selectedIndex];
        image(selectedVideo, x, y, w, h);
      }
    }
  }
}

// TODO: Make videos on the outside change when mouse is clicked
function mouseClicked(_p5, event) {
console.log(event)
counter++;
};

return <Sketch setup={setup} draw={draw} />;
};

*/


export default App
