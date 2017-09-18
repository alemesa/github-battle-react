import React from 'react';

function UserRepos(props) {
  let repos = props.repos;

  return (
    <div className="profileRepos">
      <h4 style={{ width: '100%', textAlign: 'center' }}>Latest Repos</h4>
      <ul className="space-list-items">
        {repos.map((repo, index) => {
          return (
            <li className="repo" key={repo.name}>
              <h3>
                <a href="repo.html_url" target="_blank">
                  {repo.name}
                </a>
              </h3>
              <br />
              <p>{repo.description}</p>
              <br />
              <div className="stats">
                <i className="fa fa-star" aria-hidden="true" />
                Stars: {repo.stargazers_count}
                <i className="fa fa-code-fork" aria-hidden="true" />
                Forks: {repo.forks_count}
              </div>
              <p>{repo.language ? `Main Language: ${repo.language}` : ``}</p>
              <br />
              <a className="button-repo" href={repo.html_url} target="_blank">
                Repo
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UserRepos;
