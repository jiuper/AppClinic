export const useUserData = () => {

    const userProfile = [
        {
            id: Date.now() + 1,
            name: 'Kirill',
            surname: 'Pechan',
            email: 'asdsadsadmail.rt',
            login: '2',
            password: '2'
        },
        {
            id: Date.now() + 2,
            name: 'Masha',
            surname: 'Pechan',
            email: 'asds3adsadmail.rt',
            login: 'MashaP',
            password: '213119fg'
        },
        {
            id: Date.now() + 3,
            name: 'Masha',
            surname: 'Pechan',
            email: 'asasd3adsadmail.123t',
            login: 'Masha',
            password: '213119f'
        },
    ]

    const setUserProfile = (newUser) => {
        userProfile.push(newUser)
    }
    return [userProfile, setUserProfile]

}









