import { useState } from "react"

let initialState = [
    {
        userId: 123,
        doctorId: Date.now() + 6,
        occupation: 'окулист',
        nameDoctor: 'Alex',
        namePatient: 'Kirill Pechan'
    },
    {
        userId: 124,
        doctorId: Date.now() + 6,
        occupation: 'окулист',
        nameDoctor: 'Alex',
        namePatient: 'Kirill Pechan'
    }
]

export const useBooking = (arr = initialState) => {
    
    const [booking, setBooking] = useState(arr)

    return {
        booking,
        setBooking,
    }
}
