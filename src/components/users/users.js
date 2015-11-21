import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { userActions } from 'modules/users';


@connect(state => ({
  users: state.users
}), userActions)

export class Users extends Component {
  static propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    users: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUserList() {
    const { list } = this.props.users;

    return list.map((user, index) => {
      return (
        <div key={index}>{user.name}</div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Users</h2>
        {this.renderUserList()}
      </div>
    );
  }
}
