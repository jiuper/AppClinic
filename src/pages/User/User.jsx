import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Profile } from '../../template/Profile/Profile'
import { SelectList } from '../Booking/SelectList'
import './User.css'

export const User = ({ accounts, booking, doctors, doctorProfile, setBooking }) => {

  const param = useParams()
  const [userBooking, setUserBooking] = useState([])

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
        <button onClick={e => {setBooking(userBooking)}}>Заказать талон</button>
      </div>
    </div>
  )
}
