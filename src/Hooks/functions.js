export const doctors = [
    'ортопед',
    'хирург',
    'педиатр',
    'окулист',
    'гинеколог',
    'лор'
]

export const handleRemove = (id, booking, setBooking) => {
    setBooking(booking.filter(e => e.id !== id))
}
