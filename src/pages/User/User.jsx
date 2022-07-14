import React from 'react'
import { useParams } from 'react-router-dom'
import { Profile } from '../../template/Profile/Profile'

export const User = ({ accounts, booking }) => {

  const param = useParams()

  return (
    <div className='user__profile'>
      <Profile
      >
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
      </Profile>
    </div>
  )
}
