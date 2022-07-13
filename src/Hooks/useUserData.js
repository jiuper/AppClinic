export const useUserData = () => {

    const store = {
        userProfile: [
            {
                id: Date.now() + 1,
                name: 'Kirill',
                surname: 'Pechan',
                email: 'asdsadsadmail.rt',
                occupation: '',
                doctor: '',
                login: '2',
                password: '2'
            },
            {
                id: Date.now() + 2,
                name: 'Masha',
                surname: 'Pechan',
                email: 'asds3adsadmail.rt',
                occupation: '',
                doctor: '',
                login: 'MashaP',
                password: '213119fg'
            },
            {
                id: Date.now() + 3,
                name: 'Masha',
                surname: 'Pechan',
                email: 'asasd3adsadmail.123t',
                occupation: '',
                doctor: '',
                login: 'Masha',
                password: '213119f'
            },
        ],
        doctorProfile: [
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
                id: Date.now() + 5,
                name: 'Alex',
                surname: 'Pechasdan',
                occupation: 'хирург',
                email: 'asds3adsadmail.rt',
                login: 'MashaP',
                password: '213119fg'
            },
            {
                id: Date.now() + 4,
                name: 'Alexsandr',
                surname: 'Pean',
                occupation: 'ортопед',
                email: 'ad3adsadmail.123t',
                login: '1',
                password: '1'
            },
        ],
        doctors: 
        [
            'ортопед',
            'хирург',
            'педиатр',
            'окулист',
            'гинеколог',
            'лор'
        ]
    }

    const setUserProfile = (newUser) => {
        store.userProfile.push(newUser)
    }

    const setDoctorProfile = (newUser) => {
        store.doctorProfile.push(newUser)
    }


    return [store.userProfile, setUserProfile, store.doctorProfile, setDoctorProfile, store.doctors]
}