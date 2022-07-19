import { useState } from "react"

const initialArray = [
    {
        id: Date.now() + 6,
        name: 'Alex',
        surname: 'Pechan',
        occupation: 'окулист',
        email: 'asdsadsadmail.rt',
        login: 'admin',
        password: 'admin'
    },
    {
        id: Date.now() + 5,
        name: 'Natasha',
        surname: 'Pechan',
        occupation: 'хирург',
        email: 'asds3adsadmail.rt',
        login: 'MashaP',
        password: '213119fg'
    },
    {
        id: Date.now() + 8,
        name: 'Alexw',
        surname: 'Pechasdan',
        occupation: 'хирург',
        email: 'asds3adsadmail.rt',
        login: 'MashaP',
        password: '213119fg'
    },
    {
        id: 431,
        name: 'Alexsandr',
        surname: 'Pean',
        occupation: 'ортопед',
        email: 'ad3adsadmail.123t',
        login: '1',
        password: '1'
    },

]

export const useDoctorProfile = (arr = initialArray) => {
    const [doctorProfile, setDoctorProfile] = useState(arr)

    return {
        doctorProfile,
        setDoctorProfile,
    }
}
