import React from 'react';

import './wrapper.scss';

const Wrapper = ({ children }) => {
  return (
    <div className = "wrapper">
      { children }
    </div>
  )
}

export default Wrapper;