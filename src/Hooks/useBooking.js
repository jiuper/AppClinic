import { useState } from "react"

const initialState = [
    {
        userId: 123,
        id: 1,
        doctorId: Date.now() + 6,
        occupation: 'окулист',
        nameDoctor: 'Alex',
        namePatient: 'Kirill Pechan'
    },
    {
        userId: 124,
        id: 2,
        doctorId: 431,
        occupation: 'ортопед',
        nameDoctor: 'Alexsandr',
        namePatient: 'Masha Pechan'
    },
    {
        userId: 125,
        id: 3,
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
