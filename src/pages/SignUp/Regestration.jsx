import React, { useState } from 'react'
import { FormRegestration } from '../../common/components/forms/FormRegestration/FormRegestration'

export const Regestration = ({ accounts, setAccounts }) => {

  const [account, setAccount] = useState(
    {
      name: '',
      surname: '',
      age: '',
      login: '',
      password: ''
    }
  )

  return (
    <div className='form_register'>
      <h2>Form for registration new patient</h2>
      <FormRegestration
        account={account}
        setAccount={setAccount}
        accounts={accounts}
        setAccounts={setAccounts}
      />
    </div>
  )
}
