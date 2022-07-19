import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useBooking } from '../../Hooks/useBooking'
import { Profile } from '../../template/Profile/Profile'
import { SelectList } from '../Booking/SelectList'
import './User.css'

export const User = ({ accounts, booking, doctors, doctorProfile, setBooking }) => {

  const param = useParams()
  const [userBooking, setUserBooking] = useState([])
  const { handleAdd } = useBooking()
  return (
    <div className='user__profile'>
      <Profile
        key={accounts}
        accounts={accounts}
        booking={booking}
        param={param}
        setUserBooking={setUserBooking}
        setBooking={setBooking}
      />
      <div className='user__select'>
        <SelectList
          accounts={doctors}
          doctorProfile={doctorProfile}
          userBooking={userBooking}
          setUser={setUserBooking}
        />
        <button onClick={e => handleAdd(userBooking)}>Заказать талон</button>
      </div>
    </div>
  )
}
