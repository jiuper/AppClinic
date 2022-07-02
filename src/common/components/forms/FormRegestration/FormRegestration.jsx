import React from 'react'
import propTypes from 'prop-types'
import { Input } from '../../Input/Input'
import { SubmitButton } from '../../buttons/SubmitButton/SubmitButton'
import './FormRegestration.css'
export const FormRegestration = () => {
  return (
    <div className='formReg'>
      <form >
        <fieldset>
          <div>
            <span>Name:</span>
            <Input />
            <span>Surname:</span>
            <Input />
            <span>Age:</span>
            <Input />
          </div>
          <div>
            <span>Login</span>
            <Input />
            <span>Password</span>
            <Input />
          </div>
          <SubmitButton >register</SubmitButton>
        </fieldset>

      </form>

    </div>
  )
}
