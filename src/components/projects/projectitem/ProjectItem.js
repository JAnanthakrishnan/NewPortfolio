import React from 'react';

class ProjectItem extends React.Component {
  render() {
    return (
      <div className={this.props.projectclass}>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default ProjectItem;
