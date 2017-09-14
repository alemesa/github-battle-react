import React, { Component } from 'react';
import Popular from '../components/Popular.js';
import { ReactRouter, Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Popular />
      </div>
    );
  }
}

export default App;
