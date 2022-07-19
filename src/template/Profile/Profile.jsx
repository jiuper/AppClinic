import React, { useEffect, useState } from 'react'
import { ProfileItems } from './ProfileItems'


export const Profile = ({ accounts, booking, param, setUserBooking, setBooking }) => {

  const [user, setUser] = useState([])
  const [bookingDoctor, setBookingDoctor] = useState([])
  
  useEffect(() => {
    setUser(accounts.filter(e => e.id === +param.id))
    setBookingDoctor(booking.filter(e => (e.userId === +param.id) || (e.doctorId === +param.id)))
    setUserBooking(
      {
        userId: accounts.find(e => e.id === +param.id)?.id,
        namePatient: accounts.find(e => e.id === +param.id)?.name
      })
  }, [accounts, param.id, booking, setUserBooking])


  return (
    <>
      {
        user.map(elem =>
          <ProfileItems
            key={elem.id}
            name={elem.name}
            surname={elem.surname}
            email={elem.email}
            occupation={elem.occupation}
          />
        )
      }
      {
        bookingDoctor.map(elem =>
          <ProfileItems
            key={elem.nameDoctor}
            name={elem.nameDoctor}
            surname={elem.namePatient}
            email={elem.email}
            occupation={elem.occupation}
          >
            <button >remove</button>
          </ProfileItems>
        )
      }

    </>
  )
}
