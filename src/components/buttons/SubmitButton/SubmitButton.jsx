import React from 'react'
import propTypes from 'prop-types'

export const SubmitButton = ({ children, value, setValue, accounts,setAccount, handleAction }) => {
    
    return (
        <button onClick={() => handleAction(value,accounts, setValue, setAccount)}>
            {children}
        </button>
    )
}


