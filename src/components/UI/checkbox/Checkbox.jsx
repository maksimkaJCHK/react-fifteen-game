import React from 'react';

import './checkbox.scss';

const Checkbox = ({
  val,
  label,
  curState,
  onChange = (e) => e,
}) => {
  const idItem = 'id-' + val;

  return (
    <div className = "checkbox">
      <input
        id = { idItem }
        type = "checkbox"
        value = { val }
        onChange = { onChange }
        checked = { curState === val }
      />
      <label htmlFor = { idItem }>
        { label }
      </label>
    </div>
  )
}

export default Checkbox;