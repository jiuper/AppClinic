import React from 'react'
import { useState } from 'react'
import { Input } from '../../components/Input/Input'
import { Login } from '../../template/Login/Login'
import { Regestration } from '../../template/Login/Regestration'
import { Modal } from '../../template/Modal/Modal'


export const Doctor = ({ accounts, setAccounts }) => {

    const [isActive, setIsActive] = useState('active__no')

    return (
        <div className='doctor__profile'>
            <Login
                accounts={accounts}
                path={'/Doctor/User/'}
            />
            <h2>Регистрация нового специалиста</h2>
            <button onClick={() => setIsActive(null)}>Regestration</button>
            <Modal
                isActive={isActive}
                title={'Welcome for new Doctor'}
            >
                <Regestration
                    accounts={accounts}
                    setAccounts={setAccounts}
                    user=''
                >

                </Regestration>
            </Modal>

        </div>
    )
}
