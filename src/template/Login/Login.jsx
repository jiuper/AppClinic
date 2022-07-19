import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Form } from '../../components/Form/Form'
import { Input } from '../../components/Input/Input'
import { handleChange } from '../../pages/SignUp/functions'

export const Login = ({ accounts, path }) => {

  const [user, setUser] = useState({ login: '', password: '' })
  const [id, setId] = useState('')

  useEffect(() => {
    setId(accounts.filter(e => e.login === user.login && e.password === user.password).map(e => e.id))
  }, [accounts, user])
  console.log(id)
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
        <Link to={`${path}${id}`}>
          login
        </Link>
      </Form>
    </>
  )
}
