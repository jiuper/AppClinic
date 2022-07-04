import React from 'react'
import propTypes from 'prop-types'
import { Input } from '../../Input/Input'
import { SubmitButton } from '../../buttons/SubmitButton/SubmitButton'
import './FormRegestration.css'
import { handleChange, addNewAccount } from '../../../../pages/SignUp/functions'

export const FormRegestration = ({ account, setAccount, accounts, setAccounts }) => {


  return (
    <div className='formReg'>
      <div>
        <span>Name:</span>
        <Input
          value={account}
          valueTitle={account.name}
          nameTitle={'name'}
          handleChange={handleChange}
          setValue={setAccount}
        />
        <span>Surname:</span>
        <Input
          value={account}
          valueTitle={account.surname}
          nameTitle={'surname'}
          handleChange={handleChange}
          setValue={setAccount}
        />
        <span>Age:</span>
        <Input
          value={account}
          valueTitle={account.age}
          nameTitle={'age'}
          handleChange={handleChange}
          setValue={setAccount}
        />
      </div>
      <div>
        <span>Login</span>
        <Input
          value={account}
          valueTitle={account.login}
          nameTitle={'login'}
          handleChange={handleChange}
          setValue={setAccount}
        />
        <span>Password</span>
        <Input
          value={account}
          valueTitle={account.password}
          nameTitle={'password'}
          handleChange={handleChange}
          setValue={setAccount}
        />
      </div>
      <SubmitButton
        value={account}
        accounts={accounts}
        setValue={setAccounts}
        addNewAccount={addNewAccount}
      >
        register
      </SubmitButton>

    </div>
  )
}
