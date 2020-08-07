import React from 'react';

const ProjectItem = (props) => {
  const { clicked, current } = props.info;
  return (
    <div className='projectitem'>
      <img src={current['image']} alt={current['name']} />
      <h3>{current['name']}</h3>
      <ul className='technologies'>
        {current['technologies'].map((tech) => (
          <li className='technologyitem'>
            <i className={tech}></i>
          </li>
        ))}
      </ul>
      <div className='hosting'>
        <a href={current['github']}>
          <i className='devicon-github-plain'></i>
        </a>
        {current['live_demo'].length > 0 ? (
          <a href={current['live-demo']}>
            <i className='fa fa-link'></i>
          </a>
        ) : null}
      </div>

      <p>{current['description']}</p>
    </div>
  );
};

export default ProjectItem;
