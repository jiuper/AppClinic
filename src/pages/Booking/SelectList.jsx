import React from 'react'
import { Select } from './Select'

export const SelectList = ({ accounts, doctorProfile, setUser, userBooking }) => {
    return (
        <>
            {
                accounts.map(elem => (
                    <Select
                        doctorProfile={doctorProfile}
                        userBooking={userBooking}
                        setUser={setUser}
                        key={elem}
                        name={elem}
                    />
                ))
            }
        </>
    )
}
