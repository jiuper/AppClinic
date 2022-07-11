import React from 'react'
import propTypes from 'prop-types'


export const Input = ({ value, valueTitle, nameTitle,handleChange, setValue  }) => {

  return (
    <div className='item'>
      <span>{nameTitle}</span>
      <input value={valueTitle} onChange={(e) => handleChange(e.target.value, value, nameTitle, setValue)} />
    </div>
    
  )
}


