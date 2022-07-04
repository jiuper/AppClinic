const store = {
    patient: [
        {
            id: Date.now(),
            name: 'Kirill',
            surname: 'Pechan',
            login: 'Jiuper',
            password: '213119Fg'
        },
        {
            id: Date.now(),
            name: 'Masha',
            surname: 'Pechan',
            login: 'MashaP',
            password: '213119fg'
        }
    ],

    doctor: [
        {
            id: Date.now(),
            name: 'Kirill',
            surname: 'Pechan',
            login: 'Jiuper',
            password: '213119Fg'
        },
        {
            id: Date.now(),
            name: 'Masha',
            surname: 'Pechan',
            login: 'MashaP',
            password: '213119fg'
        }
    ],

    orderCoupon: [
        {
            id: Date.now(),
            name: 'Kirill',
            surname: 'Pechan',
            doctor: 'surgeon',
            date: '21.01.23'
        },
        {
            id: Date.now(),
            name: 'Kirill',
            surname: 'Pechan',
            doctor: 'surgeon',
            date: '21.03.23'
        }
    ]
}

export default store