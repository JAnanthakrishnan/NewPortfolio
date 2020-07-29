import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((state) => ({
      clicked: !state.clicked
    }));
  }
  render() {
    let classname = 'nav-items';
    let iconclass = 'fa fa-bars fa-lg';
    if (this.state.clicked) {
      classname = 'menu';
      iconclass = 'fa fa-times fa-lg';
    } else {
      classname = 'navbar';
      iconclass = 'fa fa-bars fa-lg';
    }
    console.log(classname);
    return (
      <div>
        <div className={classname} id='navbar'>
          <a href='#!' className='icon' id='menu' onClick={this.handleClick}>
            <i className={iconclass}></i>
          </a>
          <ul className='nav-items' id='nav-items'>
            <li className='nav-link'>
              <a href='#!' className='first'>
                Home
              </a>
            </li>
            <li className='nav-link'>
              <a href='#!' className='second'>
                Projects
              </a>
            </li>
            <li className='nav-link'>
              <a href='#!' className='third'>
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
