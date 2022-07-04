import React, { useState } from 'react'
import { SubmitButton } from '../../common/components/buttons/SubmitButton/SubmitButton'
import { Modal } from '../../template/Modal/Modal'
import { Login } from './Login'
import { Regestration } from './Regestration'

export const SignUp = ({ setValue }) => {
  
  const [page, setPage] = useState(<Regestration />)

  return (
    <div className='signUp'>
      <Modal
        page={page}
        title={'Welcome'}
      >
        <div className='modal__buttons'>
          <SubmitButton value={<Regestration />} setValue={setPage}>
            Sign Up
          </SubmitButton>
          <SubmitButton value={<Login />} setValue={setPage}>
            Sign In
          </SubmitButton>
        </div>
      </Modal>
    </div>
  )
}
