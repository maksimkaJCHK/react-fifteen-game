import React from 'react';

import './moves.scss';

const Moves = ({ count }) => {
  return (
    <div className = "moves">
      <div className="moves-title">
        Moves
      </div>

      <div className="moves-numb">
        { count }
      </div>
    </div>
  )
}

export default Moves;