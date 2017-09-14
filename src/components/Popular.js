import React from 'react';
import SelectLanguage from '../components/SelectLanguage';
import RepoGrid from '../components/RepoGrid';
import { fetchPopularRepos } from '../utils/api';

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All', // default state
      repos: null
    };

    // Explicit bound
    // New function where this function is bind to this keyword
    this.updateLanguage = this.updateLanguage.bind(this);
    // make the this inside the updateLanguage() is bound to the state
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(lang) {
    this.setState({
      selectedLanguage: lang,
      repos: null
    });

    fetchPopularRepos(lang).then(
      function(repos) {
        console.log(repos);
        this.setState(function() {
          return { repos: repos };
        });
      }.bind(this)
    );
  }

  /* With arrow function you don't need to pass to .map() a second argument .this because it already binds */

  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />

        {//don't call it until repos are loaded
        !this.state.repos ? (
          <p>LOADING!</p>
        ) : (
          <RepoGrid repos={this.state.repos} />
        )}
      </div>
    );
  }
}

export default Popular;
