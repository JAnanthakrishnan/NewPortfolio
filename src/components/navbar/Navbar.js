import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

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
          <a href='#!' className='icon' onClick={this.handleClick}>
            <i className={iconclass}></i>
          </a>
          <ul className='nav-items' id='nav-items'>
            <li className='nav-link'>
              <Link
                to='home'
                smooth={true}
                spy={true}
                hashSpy={true}
                activeClass='active'
                duration={500}
                delay={10}
                isDynamic={true}
                className='first link'
                onClick={this.removeMenu}
              >
                Home
              </Link>
            </li>
            <li className='nav-link'>
              <Link
                to='projects'
                smooth={true}
                spy={true}
                hashSpy={true}
                activeClass='active'
                duration={500}
                delay={10}
                isDynamic={true}
                className='second link'
                onClick={this.removeMenu}
              >
                Projects
              </Link>
            </li>
            <li className='nav-link'>
              <Link
                to='about'
                smooth={true}
                spy={true}
                hashSpy={true}
                activeClass='active'
                duration={500}
                delay={10}
                isDynamic={true}
                className='third link'
                onClick={this.removeMenu}
              >
                About
              </Link>
            </li>
            <li className='nav-link'>
              <Link
                to='contact'
                smooth={true}
                spy={true}
                hashSpy={true}
                activeClass='active'
                duration={500}
                delay={10}
                isDynamic={true}
                className='fourth link'
                onClick={this.removeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
