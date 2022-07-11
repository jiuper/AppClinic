import React from 'react'
import { useParams } from 'react-router-dom'
import { Profile } from './Profile'

export const User = ({ accounts }) => {
  
  const param = useParams()
  
  return (
    <div className='user__profile'>
      <Profile
      accounts={accounts}
      param={param}
      />
    </div>
  )
}
