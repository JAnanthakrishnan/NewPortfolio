import React from 'react';
import './Projects.css';
import ProjectItem from './ProjectItem';
import project1 from './images/project1.jpg';
import project2 from './images/project2.jpg';
class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      current: null
    };
  }
  projects = [
    {
      name: 'Contact Keeper',
      description: 'A full stack application using the mern stack',
      technologies: [
        'devicon-react-original',
        'devicon-mongodb-plain-wordmark',
        'devicon-nodejs-plain-wordmark',
        'devicon-express-original-wordmark'
      ],
      image: project1,
      github: 'https://github.com/JAnanthakrishnan/contact-keeper',
      live_demo: 'https://contactkeeper-codewithak.herokuapp.com/'
    },
    {
      name: 'Github Finder',
      description: 'React app to search github',
      technologies: ['react'],
      image: project2,
      github: 'https://github.com/JAnanthakrishnan/contact-keeper',
      live_demo: 'https://contactkeeper-codewithak.herokuapp.com/'
    }
  ];
  handleClick = (id, e) => {
    e.preventDefault();
    this.setState((state) => ({
      clicked: !state.clicked,
      current: this.projects[id]
    }));
  };
  outsideClick = () => {
    this.setState((state) => ({
      clicked: !state.clicked,
      current: null
    }));
  };

  render() {
    return (
      <section id='projects'>
        <div className={this.state.clicked ? 'wrapper blur' : 'wrapper'}>
          <div className='box'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className='scrolldown'></div>
        </div>
        <h1>Hey.. Checkout some of my projects</h1>
        <div className='projectsList'>
          <div
            className={
              this.state.clicked ? 'projectsListItem open' : 'projectsListItem'
            }
            onClick={(e) => this.handleClick(0, e)}
          >
            <div id='project1' className='linktoproject'>
              Contact Keeper
              {/* <p>React app to keep track of contacts</p> */}
            </div>
          </div>
          <div
            className={
              this.state.clicked ? 'projectsListItem open' : 'projectsListItem'
            }
            onClick={(e) => this.handleClick(1, e)}
          >
            <div id='project1' className='linktoproject'>
              Github Finder
              {/* <p>React app to search github</p> */}
            </div>
          </div>
        </div>
        {this.state.clicked && (
          <ProjectItem info={this.state} outsideClick={this.outsideClick} />
        )}
      </section>
    );
  }
}

export default Projects;
