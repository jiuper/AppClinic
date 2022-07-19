import React, { useState } from 'react'

export const Select = ({ doctorProfile, name, setUser, userBooking }) => {

    const [id, setId] = useState([])
    const useName = () => {
        setId(doctorProfile.filter(e => e.occupation === name)
            .map(elem =>
                <div key={elem.name} onClick={(e) => { setUser({ ...userBooking,doctorId: elem.id, occupation: elem.occupation, nameDoctor: elem.name }) }}>
                    {elem.name}
                </div>
            ))
    }

    return (
        <>
            <div className='option' onClick={useName}>
                <span>{name}</span>
                {id}
            </div>
        </>
    )
}
