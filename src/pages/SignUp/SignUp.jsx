import React, { useState } from 'react'
import { SubmitButton } from '../../common/components/buttons/SubmitButton/SubmitButton'
import { Modal } from '../../template/Modal/Modal'
import { Login } from './Login'
import { Regestration } from './Regestration'
import { selectButton } from './functions'

export const SignUp = () => {

  const [accounts, setAccounts] = useState([
    {
      id: Date.now(),
      name: 'Kirill',
      surname: 'Pechan',
      login: 'Jiuper',
      password: '213119Fg'
    },
    {
      id: Date.now(),
      name: 'Masha',
      surname: 'Pechan',
      login: 'MashaP',
      password: '213119fg'
    }
  ])

  const [page, setPage] = useState(<Regestration
    accounts={accounts}
    setAccounts={setAccounts}
  />)

  return (
    <div className='signUp'>
      <Modal
        page={page}
        title={'Welcome'}
      >
        <div className='modal__buttons'>
          <SubmitButton
            value={
              <Regestration
                accounts={accounts}
                setAccounts={setAccounts}
              />}
            setValue={setPage}
            addNewAccount={selectButton}
            accounts={''}
          >

            Sign Up
          </SubmitButton>
          <SubmitButton
            value={<Login />}
            setValue={setPage}
            addNewAccount={selectButton}
            accounts={''}
          >
            Sign In
          </SubmitButton>
        </div>
      </Modal>
    </div>
  )
}
