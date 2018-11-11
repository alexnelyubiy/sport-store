import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext, * as themes from 'themes';

const displayName = 'App';

const propTypes = {
  theme: PropTypes.string
};

const defaultProps = {
  theme: 'base'
};

export default function App({ children, theme }) {
  return (
    <ThemeContext.Provider value={themes[theme]}>
      {children}
    </ThemeContext.Provider>
  );
}

App.displayName = displayName;
App.propTypes = propTypes;
App.defaultProps = defaultProps;
