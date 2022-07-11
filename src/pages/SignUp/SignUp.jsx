import React, { useEffect, useState } from 'react'
import { SubmitButton } from '../../components/buttons/SubmitButton/SubmitButton'
import { Modal } from '../../template/Modal/Modal'
import { Login } from './Login'
import { Regestration } from './Regestration'
import { selectButton } from './functions'
export const SignUp = ({ accounts, setAccounts, handleId,users }) => {

  const [page, setPage] = useState(<Regestration
    accounts={accounts}
    setAccounts={setAccounts}
  />)

  useEffect(() => {
    setPage(<Regestration
      accounts={accounts}
      setAccounts={setAccounts}
    />)
  }, [accounts])

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
            handleAction={selectButton}
            accounts={''}
          >
            Sign Up
          </SubmitButton>
          <SubmitButton
            value={
            <Login 
            accounts={accounts} 
            />}
            setValue={setPage}
            handleAction={selectButton}
            accounts={''}
          >
            Sign In
          </SubmitButton>
        </div>
      </Modal>
    </div>
  )
}
