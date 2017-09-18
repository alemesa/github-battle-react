import React from 'react';
import UserProfile from './UserProfile';
import UserRepos from './UserRepos';
import PropTypes from 'prop-types';
import { getProfile, getUserRepos } from '../../utils/api';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      userInfo: '',
      userRepos: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ user: event.target.value });
    console.log('changing');
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      user: null,
      userInfo: '',
      userRepos: ''
    });
    console.log('submitting');

    getProfile(this.state.user).then(
      function(info) {
        this.setState(function() {
          return { userInfo: info };
        });
      }.bind(this)
    );

    getUserRepos(this.state.user).then(
      function(repos) {
        this.setState(function() {
          return { userRepos: repos };
        });
      }.bind(this)
    );
  }

  render() {
    let { user, userInfo, userRepos } = this.state;

    return (
      <div>
        <form className="column" onSubmit={this.handleSubmit}>
          <label className="header" htmlFor="user">
            Enter a Github username
          </label>
          <input
            id="user"
            type="text"
            placeholder="Github Username"
            autoComplete="off"
            onChange={this.handleChange}
          />
          <button className="button" type="submit" disabled={!this.state.user}>
            Search
          </button>
        </form>

        {userRepos && <UserProfile profile={userInfo} /> && (
          <UserRepos repos={userRepos} />
        )}
      </div>
    );
  }
}

Search.PropTypes = {
  user: PropTypes.string.isRequired
};

export default Search;
