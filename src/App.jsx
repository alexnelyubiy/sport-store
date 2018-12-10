import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { base } from 'themes';

const displayName = 'App';

const propTypes = {
  theme: PropTypes.string
};

const defaultProps = {
  theme: 'base'
};

export default function App({ children, theme }) {
  return (
    <Fragment>
      <ThemeProvider theme={base}>
        {children}
      </ThemeProvider>
    </Fragment>
  );
}

App.displayName = displayName;
App.propTypes = propTypes;
App.defaultProps = defaultProps;
