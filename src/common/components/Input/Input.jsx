import React, { useState } from 'react'
import propTypes from 'prop-types'

export const Input = () => {
    const [value, setValue] = useState('')
  return (
    <input value={value} onChange={e => setValue(e.target.value)} />
  )
}


Input.defaultTypes = {
    value: '',
}