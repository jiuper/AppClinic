import React from 'react'
import { Select } from './Select'

export const SelectList = ({ accounts, doctorProfile, setUser }) => {
    return (
        <>
            {
                accounts.map(elem => (
                    <Select
                    doctorProfile={doctorProfile}
                    setUser={setUser}
                    key={elem}
                    name={elem}
                    />
                ))
            }
        </>
    )
}
