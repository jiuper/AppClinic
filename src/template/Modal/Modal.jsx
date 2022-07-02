import React, { useState } from 'react'
import { SubmitButton } from '../../common/components/buttons/SubmitButton/SubmitButton'
import { Login } from '../../pages/SignUp/Login'
import { Regestration } from '../../pages/SignUp/Regestration'
import './Modal.css'
export const Modal = ({setValue}) => {

    const [page, setPage] = useState('')

    return (
        <div className='modal'>
            <div className='modal__container'>
                <div className='modal__form'>
                    <span className='modal__close' onClick={e => setValue('/*')}>
                        <img src='https://cdn-icons-png.flaticon.com/512/748/748122.png' alt="close" />
                    </span>
                    <div className='modal__head'>
                        <div className='moodal__title'>
                            <h3>Welcome</h3>
                        </div>

                        <div className='modal__buttons'>
                            <SubmitButton value={<Regestration />} setValue={setPage}>
                                Sign Up
                            </SubmitButton>
                            <SubmitButton value={<Login />} setValue={setPage}>
                                Sign In
                            </SubmitButton>
                        </div>
                    </div>
                    <div className='modal__body'>
                        {page}
                    </div>
                </div>
            </div>
        </div>
    )
}
