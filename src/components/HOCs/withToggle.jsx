import React from 'react';
import PropTypes from 'prop-types';

// Babel Defect: Move propTypes definition here, because babel sets it as read-only inside 'function withToggle'.
const propTypes = {
  toggled: PropTypes.bool,
};

function withToggle(WrappedComponent) {
  const displayName = `WithToggle(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  const defaultProps = {
    toggled: false,
  };

  class WithToggle extends React.Component {
    constructor(props) {
      super(props);

      this.handleClick = this.handleClick.bind(this);

      this.state = { isToggled: props.toggled };
    }

    handleClick(event) {
      const { onClick } = this.props;

      // Call a passed in handler if any.
      if (onClick) {
        onClick(event);
      }

      this.setState(prevState => ({ isToggled: !prevState.isToggled }));
    }

    render() {
      const { onClick, ...rest } = this.props;
      const { isToggled } = this.state;

      return <WrappedComponent {...rest} onClick={this.handleClick} toggled={isToggled} />;
    }
  }

  WithToggle.displayName = displayName;
  WithToggle.propTypes = propTypes;
  WithToggle.defaultProps = defaultProps;

  return WithToggle;
}

export default withToggle;
