import React from 'react';
import './VideoBg.css';
import video from './sea.mp4';

const VideoBg = () => {
  return (
    <div className='fullscreen-video-wrap'>
      <video autoPlay loop playsInline muted src={video} />
    </div>
  );
};

export default VideoBg;
