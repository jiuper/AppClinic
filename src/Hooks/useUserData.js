import { useState } from "react"

const initialState = [
    {
        id: 123,
        name: 'Kirill',
        surname: 'Pechan',
        email: 'asdsadsadmail.rt',
        login: '2',
        password: '2'
    },
    {
        id: 124,
        name: 'Masha',
        surname: 'Pechan',
        email: 'asds3adsadmail.rt',
        login: '4',
        password: '4'
    },
    {
        id: 125,
        name: 'Masha',
        surname: 'Pechan',
        email: 'asasd3adsadmail.123t',
        login: 'Masha',
        password: '213119f'
    },
]

export const useUserData = (arr = initialState) => {
    const [userProfile, setUserProfile] = useState(arr)

    return {
        userProfile,
        setUserProfile,
    }
}









