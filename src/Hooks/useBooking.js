export const userBooking = () => {

    const booking = [
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

    const setBooking = (newUser) => {
        booking.push(newUser)
    }

    return [booking, setBooking]
}
