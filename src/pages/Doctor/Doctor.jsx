import React from 'react'
import { useState } from 'react'
import { Login } from '../../template/Login/Login'
import { Regestration } from '../../template/Login/Regestration'
import { Modal } from '../../template/Modal/Modal'
import './Doctor.css'

export const Doctor = ({ accounts, setAccounts }) => {

    const [isActive, setIsActive] = useState('active__no')

    return (
        <div className='doctor__profile'>
                <Login
                    accounts={accounts}
                    path={'/Doctor/DoctorProfile/'}
                />
            <h2>Регистрация нового специалиста</h2>
            <button onClick={() => setIsActive(null)}>Продолжить</button>
            <Modal
                isActive={isActive}
                title={'Регистрация нового специалиста'}
            >
                <Regestration
                    accounts={accounts}
                    setAccounts={setAccounts}
                />
            </Modal>
        </div>
    )
}
