import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const displayName = 'App';

const propTypes = {
  theme: PropTypes.string
};

const defaultProps = {
  theme: 'base'
};

export default function App({ children }) {
  return (
    <Fragment>
      {children}
    </Fragment>
  );
}

App.displayName = displayName;
App.propTypes = propTypes;
App.defaultProps = defaultProps;
