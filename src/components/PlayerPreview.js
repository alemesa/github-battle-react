import React from 'react';
import PropTypes from 'prop-types';

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

export default PlayerPreview;
