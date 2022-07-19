import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Profile } from '../../template/Profile/Profile'

export const DoctorProfile = ({ accounts, booking, setBooking }) => {
  const [userBooking, setUserBooking] = useState([])
  const param = useParams()

  return (
    <div>
      <Profile
        key={accounts}
        accounts={accounts}
        booking={booking}
        param={param}
        setUserBooking={setUserBooking}
        setBooking={setBooking}
      />
    </div>
  )
}
