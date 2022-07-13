import React from 'react'
import propTypes from 'prop-types'

export const SubmitButton = ({ children, value, setValue,setAccount, handleAction }) => {
    
    return (
        <button onClick={() => handleAction(value, setValue, setAccount)}>
            {children}
        </button>
    )
}


