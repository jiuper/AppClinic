import React from 'react'
import propTypes from 'prop-types'

export const SubmitButton = ({ children, value, setValue }) => {
    return (
        <button onClick={e => setValue(value)}>
            {children}
        </button>
    )
}

SubmitButton.propTypes = {
    value: propTypes.object
}

SubmitButton.defaultTypes = {
    value: '',
    children: 'Fuck'
}
