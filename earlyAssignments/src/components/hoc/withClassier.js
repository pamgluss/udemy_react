import React from 'react';

const withClassier = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent {...props}/>
    </div>
  );
}

export default withClassier;