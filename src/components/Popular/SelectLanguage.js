import React from 'react';
import PropTypes from 'prop-types';

// stateless functional component
function SelectLanguage(props) {
  const languages = [
    'All',
    'Javascript',
    'Ruby',
    'Java',
    'CSS',
    'Python',
    'PHP',
    'Shell'
  ];

  return (
    <ul className="languages">
      {languages.map(lang => (
        <li
          className={lang === props.selectedLanguage ? 'selected' : ''}
          onClick={props.onSelect.bind(null, lang)}
          key={lang}
        >
          {lang}
        </li>
      ))}
    </ul>
  );
}

// PropTypes for SelectedLanguage
SelectLanguage.PropTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default SelectLanguage;
