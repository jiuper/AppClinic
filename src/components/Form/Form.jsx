import React from 'react'
import './Form.css'
export const Form = ({ children, title }) => {
    return (
        <div className='form'>
            <div className='form__head'>
                <h2>{title}</h2>
            </div>
            <div className='form__body'>
                {children}
            </div>
        </div>
    )
}
