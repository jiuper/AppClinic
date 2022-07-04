import React from 'react'
import {useNavigate } from 'react-router-dom'
import './Modal.css'
export const Modal = ({ page, title, children }) => {

    const navigate = useNavigate()
    
    return (
        <div className='modal'>
            <div className='modal__container'>
                <div className='modal__form'>
                    <span className='modal__close' onClick={() => navigate('/Main')}>
                        <img src='https://cdn-icons-png.flaticon.com/512/748/748122.png' alt="close" />
                    </span>
                    <div className='moodal__title'>
                        <h3>{title}</h3>
                    </div>
                    <div className='modal__head'>
                        {children}
                    </div>
                    <div className='modal__body'>
                        {page}
                    </div>
                </div>
            </div>
        </div>
    )
}
