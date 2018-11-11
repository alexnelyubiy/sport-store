import React from 'react';

function withError(WrappedComponent, handleError) {
  const displayName = `WithError(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  class WithError extends React.Component {
    componentDidCatch(error, info) {
      handleError(error, info);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  WithError.displayName = displayName;

  return WithError;
}

export default withError;
