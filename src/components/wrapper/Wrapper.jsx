import React from 'react';

import './wrapper.scss';

const Wrapper = ({ children, className = '' }) => {
  return (
    <div className = { `wrapper ${className}` }>
      { children }
    </div>
  )
}

export default Wrapper;