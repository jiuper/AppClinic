import React, { useState } from 'react'
import propTypes from 'prop-types'
import { Form } from '../../components/Form/Form'
import { Input } from '../../components/Input/Input'
import { SubmitButton } from '../../components/buttons/SubmitButton/SubmitButton'
import { addNewAccount, handleChange } from '../../pages/SignUp/functions'
import { useEffect } from 'react'

export const Regestration = ({ accounts, setAccounts }) => {

  const [account, setAccount] = useState(
    {
      name: '',
      surname: '',
      email: '',
      login: '',
      password: '',
    }
  )

  return (
    <>
      <Form
        title='Регистрация'
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
          setValue={setAccounts}
          accounts={accounts}
          setAccount={setAccount}
          handleAction={addNewAccount}
        >
          Продолжить
        </SubmitButton>
      </Form>
    </>
  )
}

Regestration.propTypes = {
  setAccounts: propTypes.func,
  children: propTypes.oneOfType([propTypes.string, propTypes.number])
}

Regestration.defaultProp = {
  setAccounts: propTypes.func,
  children: ''
}