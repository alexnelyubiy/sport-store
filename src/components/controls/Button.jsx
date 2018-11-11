import React from 'react';
import PropTypes from 'prop-types';
import { withStyle } from 'components/HOCs';

const displayName = 'Button';

const propTypes = {
  onClick: PropTypes.func,
  style: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.string,
};

const defaultProps = {
  onClick: undefined,
  style: {},
  children: '',
};

function Button({ onClick, style, children }) {
  return (
    <button type="button" onClick={onClick} style={style}>
      {children}
    </button>
  );
}

Button.displayName = displayName;
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default withStyle(Button, (theme, { accent }) => ({
  backgroundColor: accent ? theme.colorAccent : theme.colorDefault,
}));
