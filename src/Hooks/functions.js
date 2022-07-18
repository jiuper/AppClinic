export const doctors = [
    'ортопед',
    'хирург',
    'педиатр',
    'окулист',
    'гинеколог',
    'лор'
]

export const handleRemove = (id, booking, setBooking) => {
    booking = booking.filter(e => e.userId !== id)
}
