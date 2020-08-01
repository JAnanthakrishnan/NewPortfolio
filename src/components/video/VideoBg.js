import React from 'react';
import './VideoBg.css';
import video from './typingFinal.mp4';

class VideoBg extends React.Component {
  render() {
    return (
      <div className='fullscreen-video-wrap'>
        <video autoPlay loop playsInline muted src={video} />
      </div>
    );
  }
}

export default VideoBg;
