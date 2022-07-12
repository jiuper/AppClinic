import React, { useState } from 'react'
import propTypes from 'prop-types'
import { Form } from '../../components/Form/Form'
import { Input } from '../../components/Input/Input'
import { SubmitButton } from '../../components/buttons/SubmitButton/SubmitButton'
import { addNewAccount, handleChange } from '../../pages/SignUp/functions'

export const Regestration = ({ accounts, setAccounts }) => {

  const [account, setAccount] = useState(
    {
      name: '',
      surname: '',
      email: '',
      login: '',
      password: ''
    }
  )

  return (
    <>
      <Form
        title='Form for registration new patient'
      >
        <div className='form__items'>
          <Input
            value={account}
            valueTitle={account.name}
            nameTitle={'Name'}
            handleChange={handleChange}
            setValue={setAccount}
          />
          <Input
            value={account}
            valueTitle={account.surname}
            nameTitle={'Surname'}
            handleChange={handleChange}
            setValue={setAccount}
          />
          <Input
            value={account}
            valueTitle={account.email}
            nameTitle={'Email'}
            handleChange={handleChange}
            setValue={setAccount}
          />
        </div>
        <div className='form__login'>
          <Input
            value={account}
            valueTitle={account.login}
            nameTitle={'Login'}
            handleChange={handleChange}
            setValue={setAccount}
          />
          <Input
            value={account}
            valueTitle={account.password}
            nameTitle={'Password'}
            handleChange={handleChange}
            setValue={setAccount}
          />
        </div>
        <SubmitButton
          value={account}
          accounts={accounts}
          setValue={setAccounts}
          setAccount={setAccount}
          handleAction={addNewAccount}
        >
          register
        </SubmitButton>
      </Form>
    </>
  )
}

Regestration.propTypes = {
  accounts: propTypes.arrayOf(propTypes.shape({
    id: propTypes.oneOfType([propTypes.number, propTypes.string]),
    name: propTypes.string,
    surname: propTypes.string,
    age: propTypes.string,
    login: propTypes.oneOfType([propTypes.number, propTypes.string]),
    password: propTypes.oneOfType([propTypes.number, propTypes.string])
  })),
  setAccounts: propTypes.func
}

Regestration.defaultProp = {
  accounts: []
}