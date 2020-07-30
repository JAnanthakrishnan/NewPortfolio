import React from 'react';
import './Projects.css';
import ProjectItem from './projectitem/ProjectItem';
class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      target: 'project1'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.persist();
    this.setState((state) => ({
      clicked: !state.clicked,
      target: e.target.id
    }));
  }
  render() {
    let projectclass = 'projectitem hide';
    if (this.state.clicked) {
      projectclass = 'projectitem';
    } else projectclass = 'hide';
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
            onClick={this.handleClick}
          >
            <div id='project1' className='linktoproject'>
              Contact Keeper
              <p>React app to keep track of contacts</p>
            </div>
            <ProjectItem
              projectclass={
                this.state.target === 'project1' ? projectclass : 'hide'
              }
              title={'Contact Keeper'}
              description={
                'A simple full stack react app to keep track of contacts'
              }
            />
          </div>
          <div
            className='projectTwo projectsListItem'
            onClick={this.handleClick}
          >
            <div id='project2' className='linktoproject'>
              Github Finder
              <p>React app to search github users</p>
            </div>
            <ProjectItem
              projectclass={
                this.state.target === 'project2' ? projectclass : 'hide'
              }
              title={'Github Finder'}
              description={
                'React app to search github users using the github api'
              }
            />
          </div>
          <div
            className='projectOne projectsListItem'
            onClick={this.handleClick}
          >
            <div id='project1' className='linktoproject'>
              Contact Keeper
              <p>React app to keep track of contacts</p>
            </div>
            <ProjectItem
              projectclass={
                this.state.target === 'project1' ? projectclass : 'hide'
              }
              title={'Contact Keeper'}
              description={
                'A simple full stack react app to keep track of contacts'
              }
            />
          </div>
          <div
            className='projectTwo projectsListItem'
            onClick={this.handleClick}
          >
            <div id='project2' className='linktoproject'>
              Github Finder
              <p>React app to search github users</p>
            </div>
            <ProjectItem
              projectclass={
                this.state.target === 'project2' ? projectclass : 'hide'
              }
              title={'Github Finder'}
              description={
                'React app to search github users using the github api'
              }
            />
          </div>
          <div
            className='projectOne projectsListItem'
            onClick={this.handleClick}
          >
            <div id='project1' className='linktoproject'>
              Contact Keeper
              <p>React app to keep track of contacts</p>
            </div>
            <ProjectItem
              projectclass={
                this.state.target === 'project1' ? projectclass : 'hide'
              }
              title={'Contact Keeper'}
              description={
                'A simple full stack react app to keep track of contacts'
              }
            />
          </div>
          <div
            className='projectTwo projectsListItem'
            onClick={this.handleClick}
          >
            <div id='project2' className='linktoproject'>
              Github Finder
              <p>React app to search github users</p>
            </div>
            <ProjectItem
              projectclass={
                this.state.target === 'project2' ? projectclass : 'hide'
              }
              title={'Github Finder'}
              description={
                'React app to search github users using the github api'
              }
            />
          </div>
          <div
            className='projectOne projectsListItem'
            onClick={this.handleClick}
          >
            <div id='project1' className='linktoproject'>
              Contact Keeper
              <p>React app to keep track of contacts</p>
            </div>
            <ProjectItem
              projectclass={
                this.state.target === 'project1' ? projectclass : 'hide'
              }
              title={'Contact Keeper'}
              description={
                'A simple full stack react app to keep track of contacts'
              }
            />
          </div>
          <div
            className='projectTwo projectsListItem'
            onClick={this.handleClick}
          >
            <div id='project2' className='linktoproject'>
              Github Finder
              <p>React app to search github users</p>
            </div>
            <ProjectItem
              projectclass={
                this.state.target === 'project2' ? projectclass : 'hide'
              }
              title={'Github Finder'}
              description={
                'React app to search github users using the github api'
              }
            />
          </div>
          <div
            className='projectOne projectsListItem'
            onClick={this.handleClick}
          >
            <div id='project1' className='linktoproject'>
              Contact Keeper
              <p>React app to keep track of contacts</p>
            </div>
            <ProjectItem
              projectclass={
                this.state.target === 'project1' ? projectclass : 'hide'
              }
              title={'Contact Keeper'}
              description={
                'A simple full stack react app to keep track of contacts'
              }
            />
          </div>
          <div
            className='projectTwo projectsListItem'
            onClick={this.handleClick}
          >
            <div id='project2' className='linktoproject'>
              Github Finder
              <p>React app to search github users</p>
            </div>
            <ProjectItem
              projectclass={
                this.state.target === 'project2' ? projectclass : 'hide'
              }
              title={'Github Finder'}
              description={
                'React app to search github users using the github api'
              }
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
