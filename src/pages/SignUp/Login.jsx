import React from 'react'
import { SubmitButton } from '../../components/buttons/SubmitButton/SubmitButton'
import { Form } from '../../components/Form/Form'
import { Input } from '../../components/Input/Input'

export const Login = () => {
  return (
    <>
      <Form
        title='Form login'
      >
        <div className='form__login'>
          <Input
          nameTitle={'Login'}
          />
          <Input 
          nameTitle={'Password'}
          />
        </div>
        <SubmitButton >login</SubmitButton>
      </Form>
    </>
  )
}
