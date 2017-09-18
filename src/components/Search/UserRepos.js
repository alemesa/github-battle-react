import React from 'react';

function UserRepos(props) {
  let repos = props.repos;

  return (
    <div className="profileRepos">
      {repos.map((repo, index) => {
        return (
          <li key={repo.name}>
            {repo.name}
            {repo.description}
            <i className="fa fa-star" aria-hidden="true" />
            {repo.stargazers_count}
            <i className="fa fa-eye" aria-hidden="true" />
            {repo.watchers_count}
            <i className="fa fa-code-fork" aria-hidden="true" />
            {repo.forks_count}
            {repo.language}
            {index + 1} {repo.name}
            <a className="button-repo" href={repo.html_url} target="_blank">
              Repo
            </a>
          </li>
        );
      })}
    </div>
  );
}

export default UserRepos;
