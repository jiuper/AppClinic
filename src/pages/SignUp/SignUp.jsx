import React, { useState } from 'react'
import { Modal } from '../../template/Modal/Modal'
import { Login } from '../../template/Login/Login'
import { Regestration } from '../../template/Login/Regestration'

export const SignUp = ({ accounts, setAccounts }) => {

  const [page, setPage] = useState('1')

  return (
    <div className='signUp'>
      <Modal
        page={page}
        title={'Welcome'}
      >
        <div className='modal__head'>
          <div className='modal__buttons'>
            <button onClick={() => setPage('0')}>Sign Up</button>
            <button onClick={() => setPage('1')}>Sign In</button>
          </div>
        </div>
        <div className='modal__body'>
          {
            page === '0'
              ? <Regestration
                accounts={accounts}
                setAccounts={setAccounts}
                user={''}
              />
              : <Login
                path={/User/}
                accounts={accounts}
              />
          }
        </div>
      </Modal>
    </div>
  )
}
