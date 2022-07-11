import React from 'react'
import { SubmitButton } from '../buttons/SubmitButton/SubmitButton'
import { Input } from '../Input/Input'

export const Seach = () => {
  return (
    <div className='search'>
        <Input/>
        <SubmitButton>Поиск</SubmitButton>
    </div>
  )
}
