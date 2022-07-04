import React from 'react'
import propTypes from 'prop-types'

export const Input = ({ value, valueTitle, nameTitle, setValue, handleChange }) => {

  return (
    <input value={valueTitle} onChange={(e) => handleChange(e.target.value, value, nameTitle, setValue)} />
  )
}


Input.defaultTypes = {
  value: '',
}