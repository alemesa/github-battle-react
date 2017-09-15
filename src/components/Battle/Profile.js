import React from 'react';
import PropTypes from 'prop-types';
import PlayerPreview from './PlayerPreview';

// stateless functional component
function Profile(props) {
  let info = props.info;
  return (
    <PlayerPreview username={info.login} avatar={info.avatar_url}>
      <ul className="space-list-items">
        {info.name && <li>{info.name}</li>}
        {info.location && <li>{info.location}</li>}
        {info.company && <li>{info.company}</li>}
        <li>Followers: {info.followers}</li>
        <li>Following: {info.following}</li>
        <li>Public Repos: {info.public_repos}</li>
        {info.blog && (
          <li>
            <a href={info.blog}>{info.blog}</a>
          </li>
        )}
      </ul>
    </PlayerPreview>
  );
}

Profile.PropTypes = {
  info: PropTypes.object.isRequired
};

export default Profile;
