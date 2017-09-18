import React from 'react';
import UserProfile from './UserProfile';
import UserRepos from './UserRepos';
import PropTypes from 'prop-types';
import { getProfile, getUserRepos } from '../../utils/api';
import Loading from '../Reusable/Loading';
import animate from '@jam3/gsap-promise';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      userInfo: '',
      userRepos: '',
      loading: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    animate.from(this.label, 0.2, { y: -200, delay: 0.1 });
    animate.from(this.input, 0.3, {
      x: -1200,
      opacity: 0.5,
      delay: 0.2
    });
    animate.from(this.button, 0.3, {
      x: -1200,
      opacity: 0.5,
      delay: 0.2
    });
  }

  handleChange(event) {
    this.setState({ user: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      user: null,
      userInfo: '',
      userRepos: '',
      loading: true
    });

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

    this.setState({
      loading: false
    });
  }

  render() {
    let { userInfo, userRepos, loading } = this.state;

    return (
      <div>
        <form className="column centered" onSubmit={this.handleSubmit}>
          <label ref={c => (this.label = c)} className="header" htmlFor="user">
            Enter a Github username
          </label>
          <input
            ref={l => (this.input = l)}
            id="user"
            type="text"
            placeholder="Github Username"
            autoComplete="off"
            onChange={this.handleChange}
          />
          <button
            ref={z => (this.button = z)}
            className="button"
            type="submit"
            disabled={!this.state.user}
          >
            Search
          </button>
        </form>

        <div className="profile">
          {loading ? <Loading speed="250" /> : ' '}
          {userRepos && <UserProfile profile={userInfo} />}
          {userRepos && <UserRepos repos={userRepos} />}
        </div>
      </div>
    );
  }
}

Search.PropTypes = {
  user: PropTypes.string.isRequired,
  userInfo: PropTypes.object.isRequired,
  userRepos: PropTypes.object.isRequired
};

export default Search;
