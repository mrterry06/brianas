import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { projectActions } from 'modules/projects';


@connect(state => ({
  projects: state.projects
}), projectActions)

export class Projects extends Component {
  static propTypes = {
    fetchProjects: PropTypes.func.isRequired,
    projects: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.fetchProjects();
  }

  renderProjectList() {
    const { list } = this.props.projects;

    return list.map((project, index) => {
      return (
        <div key={index}>{project.name}</div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Projects</h2>
        {this.renderProjectList()}
      </div>
    );
  }
}
