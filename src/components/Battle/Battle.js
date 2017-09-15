import React from 'react';
import PlayerInput from './PlayerInput';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import animate from '@jam3/gsap-promise';
import { findDOMNode } from 'react-dom';

function PlayerPreview(props) {
  return (
    <div>
      <div className="column">
        <img src={props.avatar} alt={props.username} className="avatar" />
        <h2 className="username">@{props.username}</h2>
      </div>
      <button className="reset" onClick={props.onReset.bind(null, props.id)}>
        Reset
      </button>
    </div>
  );
}

PlayerPreview.PropTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount() {
    animate.from(this.first, 0.4, {
      x: 2200,
      opacity: 0.5,
      delay: 0.2
    });
    animate.from(this.second, 0.4, {
      x: -2200,
      opacity: 0.5,
      delay: 0.2
    });
  }

  handleSubmit(id, username) {
    this.setState(function() {
      var newState = {};
      newState[id + 'Name'] = username;
      newState[id + 'Image'] =
        'https://github.com/' + username + '.png?size=200';
      return newState;
    });
  }

  handleReset(id) {
    this.setState(function() {
      var newState = {};
      newState[id + 'Name'] = '';
      newState[id + 'Image'] = null;
      return newState;
    });
  }

  render() {
    let {
      playerOneName,
      playerTwoName,
      playerOneImage,
      playerTwoImage
    } = this.state;

    let match = this.props.match;

    return (
      <div>
        <div className="row">
          {!playerOneName && (
            <PlayerInput
              ref={a => (this.first = findDOMNode(a))}
              id="playerOne"
              label="Player One"
              onSubmit={this.handleSubmit}
            />
          )}

          {playerOneImage !== null && (
            <PlayerPreview
              avatar={playerOneImage}
              username={playerOneName}
              onReset={this.handleReset}
              id="playerOne"
            />
          )}

          {!playerTwoName && (
            <PlayerInput
              ref={b => (this.second = findDOMNode(b))}
              id="playerTwo"
              label="Player Two"
              onSubmit={this.handleSubmit}
            />
          )}

          {playerTwoImage !== null && (
            <PlayerPreview
              avatar={playerTwoImage}
              username={playerTwoName}
              onReset={this.handleReset}
              id="playerTwo"
            />
          )}
        </div>
        {playerOneImage &&
        playerTwoImage && (
          <Link
            className="button"
            to={{
              pathname: `${match.url}/results`,
              search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`
            }}
          >
            Battle
          </Link>
        )}
      </div>
    );
  }
}

export default Battle;
