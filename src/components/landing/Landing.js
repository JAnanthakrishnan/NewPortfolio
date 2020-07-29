import React from 'react';
import VideoBg from '../video/VideoBg';
import './Landing.css';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: ['PROGRAMMER', 'DEVELOPER', 'DESIGNER'],
      index: 0
    };
  }
  componentDidMount() {
    this.TimerID = setInterval(() => this.UpdateCurrent(), 3000);
  }
  componentWillUnmount() {
    clearInterval(this.TimerID);
  }
  UpdateCurrent() {
    this.setState((state) => ({
      index: (state.index + 1) % state.elements.length
    }));
  }
  render() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById('navbar').style.top = '1rem';
        document.getElementById('ak_logo').style.top = '1rem';
      } else {
        document.getElementById('navbar').style.top = '-100px';
        document.getElementById('ak_logo').style.top = '-100px';
      }
      prevScrollpos = currentScrollPos;
    };
    return (
      <div className='landing'>
        <VideoBg />
        <div className='container'>
          <div className='welcome'>
            <div className='line'></div>
            <h3>Welcome</h3>
          </div>
          <div className='caption'>
            <h1>J ANANTHAKRISHNAN</h1>
            <h1 className='dynamic'>{this.state.elements[this.state.index]}</h1>
          </div>
          <p>"Code and Develop"</p>
        </div>
      </div>
    );
  }
}

export default Landing;