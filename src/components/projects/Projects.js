import React from 'react';
import './Projects.css';
import ProjectItem from './ProjectItem';
import githubFinder from './images/githubFinder.png';
import contactKeeper from './images/contactKeeper.png';
import itlogger from './images/itlogger.png';
import memeswithak from './images/memeswithak.png';
import project1 from './images/project1.jpg';
import project2 from './images/project2.jpg';
import project3 from './images/project3.jpg';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      current: null,
      project: -10
    };
  }
  outclick = false;
  projects = [
    {
      name: 'Github Finder',
      description: 'React app to search github users',
      technologies: ['devicon-react-original-wordmark'],
      image: githubFinder,
      github: 'https://github.com/JAnanthakrishnan/Github-Finder',
      live_demo: 'https://githubfinder-codewithak.netlify.app/'
    },
    {
      name: 'Contact Keeper',
      description:
        'A full stack application using the mern stack to keep track of contacts',
      technologies: [
        'devicon-react-original-wordmark',
        'devicon-mongodb-plain-wordmark',
        'devicon-nodejs-plain-wordmark',
        'devicon-express-original-wordmark'
      ],
      image: contactKeeper,
      github: 'https://github.com/JAnanthakrishnan/contact-keeper',
      live_demo: 'https://contactkeeper-codewithak.herokuapp.com/'
    },
    {
      name: 'IT Logger',
      description: 'A react app to keep track of logs',
      technologies: ['devicon-react-original-wordmark'],
      image: itlogger,
      github: 'https://github.com/JAnanthakrishnan/it-logger',
      live_demo: '#!'
    },
    {
      name: 'Meme Generator',
      description: 'A react app to keep track of generate memes',
      technologies: ['devicon-react-original-wordmark'],
      image: memeswithak,
      github: 'https://github.com/JAnanthakrishnan/MemeGenerator',
      live_demo: 'https://memeswithak.netlify.app/#/'
    },
    {
      name: 'To-do List',
      description: 'My first react app for a to-do list ',
      technologies: ['devicon-react-original-wordmark'],
      image: project1,
      github: 'https://github.com/JAnanthakrishnan/React-learn',
      live_demo: '#!'
    },
    {
      name: 'To-do List',
      description: 'My first vue app for a to-do list',
      technologies: ['devicon-vuejs-plain-wordmark'],
      image: project2,
      github: 'https://github.com/JAnanthakrishnan/vue_learn',
      live_demo: '#!'
    },
    {
      name: 'To-do List',
      description: 'My first angular app for a to-do list',
      technologies: ['devicon-angularjs-plain-wordmark'],
      image: project3,
      github: 'https://github.com/JAnanthakrishnan/Angular_learn',
      live_demo: '#!'
    }
  ];
  handleClick = (id, e) => {
    e.preventDefault();
    if (!this.outclick) {
      this.setState((state) => ({
        clicked: !state.clicked,
        current: this.projects[id],
        project: id
      }));
    }
  };
  outsideClick = (e) => {
    this.outclick = true;
    if (this.outclick) {
      setTimeout(() => {
        this.outclick = false;
      }, 200);
    }

    e.preventDefault();
    this.setState((state) => ({
      clicked: !state.clicked,
      current: null,
      project: -10
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
        </div>
        <div className='projectContainer'>
          <h1>
            My <span className='color-secondary'>Works</span>
          </h1>
          <p>Checkout Some of my projects..</p>

          <div className='projectbox'>
            <div
              // className={
              //   this.state.clicked && this.state.project !== 0
              //     ? 'item open'
              //     : 'item '
              // }
              className='item'
            >
              <a
                href='#!'
                className='pimage'
                onClick={(e) => this.handleClick(0, e)}
              >
                <img src={githubFinder} alt='Project' />
              </a>
              <a href={this.projects[0].live_demo} className='btn-light'>
                <i className='fas fa-eye'></i>
                {' Github Finder'}
              </a>
              <a href={this.projects[0].github} className='btn-dark'>
                <i className='fab fa-github'></i>
                {' Github'}
              </a>
            </div>
            <div className='item'>
              <a
                href='#!'
                className='pimage'
                onClick={(e) => this.handleClick(1, e)}
              >
                <img src={contactKeeper} alt='Project' />
              </a>
              <a href={this.projects[1].live_demo} className='btn-light'>
                <i className='fas fa-eye'></i>
                {' Contact Keeper'}
              </a>
              <a href={this.projects[1].github} className='btn-dark'>
                <i className='fab fa-github'></i>
                {' Github'}
              </a>
            </div>
            <div className='item'>
              <a
                href='#!'
                className='pimage'
                onClick={(e) => this.handleClick(2, e)}
              >
                <img src={itlogger} alt='Project' />
              </a>
              <a href={this.projects[2].live_demo} className='btn-light'>
                <i className='fas fa-eye'></i>
                {' IT Logger'}
              </a>
              <a href={this.projects[2].github} className='btn-dark'>
                <i className='fab fa-github'></i>
                {' Github'}
              </a>
            </div>
            <div className='item'>
              <a
                href='#!'
                className='pimage'
                onClick={(e) => this.handleClick(3, e)}
              >
                <img src={memeswithak} alt='Project' />
              </a>
              <a href={this.projects[3].live_demo} className='btn-light'>
                <i className='fas fa-eye'></i>
                {' Meme-generator'}
              </a>
              <a href={this.projects[3].github} className='btn-dark'>
                <i className='fab fa-github'></i>
                {' Github'}
              </a>
            </div>
            <div className='item'>
              <a
                href='#!'
                className='pimage'
                onClick={(e) => this.handleClick(4, e)}
              >
                <img src={project1} alt='Project' />
              </a>
              <a href={this.projects[4].live_demo} className='btn-light'>
                <i className='fas fa-eye'></i>
                {' To do list - React'}
              </a>
              <a href={this.projects[4].github} className='btn-dark'>
                <i className='fab fa-github'></i>
                {' Github'}
              </a>
            </div>
            <div className='item'>
              <a
                href='#!'
                className='pimage'
                onClick={(e) => this.handleClick(5, e)}
              >
                <img src={project2} alt='Project' />
              </a>
              <a href={this.projects[5].live_demo} className='btn-light'>
                <i className='fas fa-eye'></i>
                {' To do list - Vue'}
              </a>
              <a href={this.projects[5].github} className='btn-dark'>
                <i className='fab fa-github'></i>
                {' Github'}
              </a>
            </div>
            <div className='item'>
              <a
                href='#!'
                className='pimage'
                onClick={(e) => this.handleClick(6, e)}
              >
                <img src={project3} alt='Project' />
              </a>
              <a href={this.projects[6].live_demo} className='btn-light'>
                <i className='fas fa-eye'></i>
                {' To do list - Angular'}
              </a>
              <a href={this.projects[6].github} className='btn-dark'>
                <i className='fab fa-github'></i>
                {' Github'}
              </a>
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
