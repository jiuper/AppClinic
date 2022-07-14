import React from 'react'
import { useParams } from 'react-router-dom'
import { Profile } from '../../template/Profile/Profile'
import { SelectList } from '../Booking/SelectList'
import './User.css'
export const User = ({ accounts, booking, doctors, doctorProfile }) => {

  const param = useParams()

  return (
    <div className='user__profile'>
      <Profile
      >
        <div>
          {
            accounts.filter(e => e.id === Number(param.id))
              .map(
                elem => (
                  <>
                    <div key={elem.id}>
                      <div>{elem.name}</div>
                      <div>{elem.surname}</div>
                      <div>{elem.email}</div>
                    </div>
                  </>
                )
              )
          }
          {
            booking.filter(e => e.userId === Number(param.id))
              .map(
                elem => (
                  <>
                    <div key={elem.userId}>
                      <div>{elem.doctor}</div>
                      <div>{elem.occupation}</div>
                    </div>
                  </>
                )
              )
          }
        </div>

        <div className='user__select'>
          <SelectList
            accounts={doctors}
            doctorProfile={doctorProfile}
          />
          <button>Заказать талон</button>
        </div>

      </Profile>
    </div>
  )
}
