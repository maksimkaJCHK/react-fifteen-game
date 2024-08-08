import React from 'react';

import './wrapper.scss';

const Wrapper = ({ children, className = '', onClick = (e) => e }) => {
  return (
    <div 
      className = { `wrapper ${className}` }
      onClick = { onClick }
    >
      { children }
    </div>
  )
}

export default Wrapper;