import React from 'react'
import propTypes from 'prop-types'

export const SubmitButton = ({ children, value, setValue, accounts, addNewAccount }) => {
    
    return (
        <button onClick={() => addNewAccount(value,accounts, setValue)}>
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
