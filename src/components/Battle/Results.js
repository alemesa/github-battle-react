import React from 'react';
import queryString from 'query-string';
import { battle } from '../../utils/api';
import { Link } from 'react-router-dom';
import Player from './Player';
import Loading from '../Reusable/Loading';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true
    };
  }

  componentDidMount() {
    let players = queryString.parse(this.props.location.search);

    battle([players.playerOneName, players.playerTwoName]).then(
      function(players) {
        if (players === null) {
          return this.setState(function() {
            return {
              error:
                'Looks like there was an error. Check that both users exist on Github.',
              loading: false
            };
          });
        }

        this.setState(function() {
          return {
            error: null,
            winner: players[0],
            loser: players[1],
            loading: false
          };
        });
      }.bind(this)
    );
  }

  render() {
    let { winner, loser, error, loading } = this.state;

    if (loading === true) {
      return <Loading speed="200" />;
    }

    if (error) {
      return (
        <div>
          <p>{error}</p>
          <Link to="/battle">Reset</Link>
        </div>
      );
    }

    return (
      <div className="row">
        <Player label="Winner" score={winner.score} profile={winner.profile} />
        <Player label="Loser" score={loser.score} profile={loser.profile} />
      </div>
    );
  }
}

export default Results;
