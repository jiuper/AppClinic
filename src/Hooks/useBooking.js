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
        doctorId: 431,
        occupation: 'ортопед',
        nameDoctor: 'Alexsandr',
        namePatient: 'Masha Pechan'
    }
]

export const useBooking = (arr = initialState) => {
    
    const [booking, setBooking] = useState(arr)

    return {
        booking,
        setBooking,
    }
}
