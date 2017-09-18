import React from 'react';

function UserProfile(props) {
  let profile = props.profile;
  let date = new Date(profile.created_at);
  let readableMonth = date.toLocaleString('en-us', { month: 'long' });

  return (
    <div className="profileInfo">
      <div>
        <img className="avatar" src={profile.avatar_url} alt={profile.login} />
      </div>
      <div>
        <h3>
          {profile.name} <a href={profile.html_url}>{profile.login}</a>{' '}
        </h3>
        <h4>
          <i className="fa fa-map-marker" aria-hidden="true" />
          {profile.location}
        </h4>
        <h5>{profile.company}</h5>
        {profile.bio}
      </div>
      <div>
        <h2>Website {profile.blog}</h2>
        <p>
          <i className="fa fa-code-fork" aria-hidden="true" /> Repos:
          {profile.public_repos}
        </p>
        <p>
          <i className="fa fa-sticky-note-o" aria-hidden="true" /> Gists:{' '}
          {profile.public_gists}
        </p>
        <p>
          <i className="fa fa-users" aria-hidden="true" /> Followers:{' '}
          {profile.followers}
        </p>
        <p>
          <i className="fa fa-users" aria-hidden="true" /> Following:{' '}
          {profile.following}
        </p>
        <h4>
          <i className="fa fa-calendar" aria-hidden="true" /> Member since:{' '}
          {readableMonth}, {date.getFullYear()}
        </h4>
      </div>
    </div>
  );
}

export default UserProfile;
