import React from 'react'

export const Profile = ({ accounts, param }) => {

  return (
    <>
      {
        accounts.filter(e => e.id === Number(param.id))
          .map(
            elem => (
              <div key={elem.id}>
                <div>{elem.name}</div>
                <div>{elem.surname}</div>
                <div>{elem.email}</div>
                <div>{elem.occupation}</div>
              </div>
            )
          )
      }
    </>
  )
}
