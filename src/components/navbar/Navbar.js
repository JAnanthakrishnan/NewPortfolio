import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.removeMenu = this.removeMenu.bind(this);
  }
  handleClick() {
    this.setState((state) => ({
      clicked: !state.clicked
    }));
  }
  removeMenu() {
    this.setState({
      clicked: false
    });
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
          <a href='#home' className='icon' id='menu' onClick={this.handleClick}>
            <i className={iconclass}></i>
          </a>
          <ul className='nav-items' id='nav-items'>
            <li className='nav-link'>
              <a href='#home' className='first link' onClick={this.removeMenu}>
                Home
              </a>
            </li>
            <li className='nav-link'>
              <a
                href='#projects'
                className='second link'
                onClick={this.removeMenu}
              >
                Projects
              </a>
            </li>
            <li className='nav-link'>
              <a href='#!' className='third link' onClick={this.removeMenu}>
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
