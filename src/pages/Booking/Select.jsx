import React, { useState } from 'react'

export const Select = ({ doctorProfile, name, setUser }) => {

    const [id, setId] = useState('')

    const useName = () => {
        setId(doctorProfile.filter(e => e.occupation === name)
            .map(elem =>
                <span key={elem.name} onClick={(e) => { setUser([elem.occupation, elem.name]) }}>
                    {elem.name}
                </span>
            ))
    }

    return (
        <>
            <div className='option' onClick={useName}>
                <span>{name}</span>
                <div>
                    {id}
                </div>
            </div>
        </>
    )
}
