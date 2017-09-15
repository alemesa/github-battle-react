import React from 'react';
import queryString from 'query-string';
import { battle } from '../utils/api';

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
    battle([players.playerOneName, players.playersTwoName]).then(results =>
      console.log(results)
    );
  }

  render() {
    let { winner, loser, error, loading } = this.state;

    if (loading === true) {
      return <p>Loading</p>;
    }

    return <div>Results</div>;
  }
}

export default Results;
