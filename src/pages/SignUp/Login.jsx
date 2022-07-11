import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Form } from '../../components/Form/Form'
import { Input } from '../../components/Input/Input'
import { handleChange } from './functions'

export const Login = ({ accounts }) => {

  const [user, setUser] = useState({ login: '', password: '' })
  const [id, setId] = useState('')
  
  useEffect(() => {
    setId(accounts.filter(e => e.login === user.login && e.password === user.password).map(elem => elem.id))
  }, [user])
  
  return (
    <>
      <Form
        title='Form login'
      >
        <div className='form__login'>
          <Input
            nameTitle={'Login'}
            value={user}
            valueTitle={user.login}
            setValue={setUser}
            handleChange={handleChange}
          />
          <Input
            nameTitle={'Password'}
            value={user}
            valueTitle={user.password}
            setValue={setUser}
            handleChange={handleChange}
          />
        </div>
        <Link to={`/User/${id}`}>
          login
        </Link>
      </Form>
    </>
  )
}
