import React, { useState } from "react"

let initialState = [
    {
        userId: Date.now() + 1,
        doctorId: Date.now() + 6,
        occupation: 'окулист',
        nameDoctor: 'Alex',
        namePatient: 'Kirill Pechan'
    },
    {
        userId: Date.now() + 2,
        doctorId: Date.now() + 6,
        occupation: 'окулист',
        nameDoctor: 'Alex',
        namePatient: 'Kirill Pechan'
    }
]

export const useBooking = (arr = initialState) => {
    const [booking, setBooking] = useState(arr)
    console.log(booking)
    const handleAdd = (note) => {
        setBooking([...booking, note])
    }

    return {
        booking,
        setBooking,
        handleAdd
    }
}
