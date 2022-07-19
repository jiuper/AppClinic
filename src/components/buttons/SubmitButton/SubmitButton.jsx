import React from 'react'
import propTypes from 'prop-types'

export const SubmitButton = ({ children, value, setValue, setAccount, handleAction, accounts }) => {

    return (
        <button onClick={() => handleAction(value, setValue, setAccount, accounts)}>
            {children}
        </button>
    )
}


