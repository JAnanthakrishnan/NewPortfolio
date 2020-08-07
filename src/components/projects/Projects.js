import React from 'react';
import './Projects.css';
class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }
  projects = [
    {
      name: 'Contact Keeper',
      description: 'A full stack application using the mern stack',
      technologies: ['react', 'mongodb', 'nodejs']
    },
    {
      name: 'Github Finder',
      description: 'React app to search github',
      technologies: ['react']
    }
  ];
  handleClick = (id, e) => {
    e.preventDefault();
    console.log(this.projects[0]);
    this.setState((state) => ({
      clicked: !state.clicked
    }));
    console.log(this.state.clicked);
  };

  render() {
    return (
      <section id='projects'>
        <div className='wrapper'>
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
            className='projectOne projectsListItem'
            onClick={(e) => this.handleClick(0, e)}
          >
            <div id='project1' className='linktoproject'>
              Contact Keeper
              <p>React app to keep track of contacts</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
