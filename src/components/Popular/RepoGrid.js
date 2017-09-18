import React from 'react';
import PropTypes from 'prop-types';

import animate from '@jam3/gsap-promise';

// stateless functional component
class RepoGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: this.props
    };
  }

  componentDidMount() {
    animate.staggerFrom(
      '.popular-item',
      0.5,
      {
        x: -1500,
        opacity: 0.5,
        delay: 0.2
      },
      0.035
    );
  }
  render() {
    let repos = this.state.repos;

    return (
      <ul className="popular-list">
        {repos.repos.map((repo, index) => {
          return (
            <li
              key={repo.name}
              //className={`popular-item ${index % 2 ? 'to-right' : 'to-left'}`}
              className="popular-item"
            >
              <div className="popular-rank">#{index + 1}</div>
              <ul className="space-list-items">
                <li>
                  <img
                    className="avatar"
                    src={repo.owner.avatar_url}
                    alt={`Avatar for ${repo.owner.login}`}
                  />
                </li>

                <li>
                  <a href={repo.html_url} target="_blank">
                    {repo.name}
                  </a>
                </li>
                <li>@{repo.owner.login}</li>
                <li>{repo.stargazers_count} stars</li>
              </ul>
            </li>
          );
        })}
      </ul>
    );
  }
}

RepoGrid.PropTypes = {
  repos: PropTypes.array.isRequired
};

export default RepoGrid;
