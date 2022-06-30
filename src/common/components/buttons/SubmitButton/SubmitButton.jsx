import React from 'react'
import propTypes from 'prop-types'

export const SubmitButton = ({ children, value }) => {
    return (
        <button>
            {children}
        </button>
    )
}

SubmitButton.propTypes = {
    value: propTypes.string
}

SubmitButton.defaultTypes = {
    value: '',
    childer: 'Fuck'
}
