import React from 'react';
import PropTypes from 'prop-types';

class PlayerInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    let value = event.target.value;

    this.setState({ username: value });
  }
  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.props.id, this.state.username);
  }
  render() {
    return (
      <form className="column" onSubmit={this.handleSubmit}>
        <label className="header" htmlFor="username">
          {this.props.label}
        </label>
        <input
          id="username"
          placeholder="Github Username"
          type="text"
          value={this.state.username}
          autoComplete="off"
          onChange={this.handleChange}
        />
        <button
          className="button"
          type="submit"
          disabled={!this.state.username}
        >
          Submit
        </button>
      </form>
    );
  }
}

PlayerInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

PlayerInput.defaultProps = {
  label: 'Username'
};

export default PlayerInput;
