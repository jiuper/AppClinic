import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Modal.css'
export const Modal = ({ title, isActive, children }) => {

    const navigate = useNavigate()

    return (
        <div className={`modal ${isActive}`}>
            <div className='modal__container'>
                <div className='modal__form'>

                    <div className='moodal__title'>
                        <h3>{title}</h3>
                        <div className='modal__close' onClick={() => navigate(-1)}>
                            <img src='https://cdn-icons-png.flaticon.com/512/748/748122.png' alt="close" />
                        </div>
                    </div>
                    <>
                        {children}
                    </>
                </div>
            </div>
        </div>
    )
}
