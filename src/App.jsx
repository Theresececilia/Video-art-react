import React from 'react';
import './App.css';

let cloudPath = 'https://static-assets.codecademy.com/Courses/Learn-p5/projects/cloud.mp4';
let starsPath = 'https://static-assets.codecademy.com/Courses/Learn-p5/projects/stars.mp4';
let staticPath = 'https://static-assets.codecademy.com/Courses/Learn-p5/projects/static.mp4';
let humanPath = 'https://static-assets.codecademy.com/Courses/Learn-p5/projects/human.mp4';

function App() {
  
  return (
    <>
    <video id="video" className='background' src={starsPath} loop autoPlay muted></video>
    <div className='background-layer'></div>
    <div className="App">
      <div className='square'>
      <video id="video" src={cloudPath} loop autoPlay muted></video>
      </div>
      <div className='square'>
      <video id="video" src={staticPath} loop autoPlay muted></video>
      </div>
      <div className='square'>
      <video id="video" src={cloudPath} loop autoPlay muted></video>
      </div>
      <div className='square'>
      <video id="video" src={staticPath} loop autoPlay muted></video>
      </div>
      <div className='square bigger'>
      <video id="video" src={humanPath} loop autoPlay muted></video>
      </div>
      <div className='square'>
      <video id="video" src={staticPath} loop autoPlay muted></video>
      </div>
      <div className='square'>
      <video id="video" src={cloudPath} loop autoPlay muted></video>
      </div>
      <div className='square'>
      <video id="video" src={staticPath} loop autoPlay muted></video>
      </div>
      <div className='square'>
      <video id="video" src={cloudPath} loop autoPlay muted></video>
      </div>
    </div>
    </>
  )
}

export default App



