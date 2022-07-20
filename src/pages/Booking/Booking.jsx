import React, { useState } from 'react'
import { Form } from '../../components/Form/Form'
import { SelectList } from './SelectList'
import './Booking.css'

export const Booking = ({ doctors, doctorProfile }) => {

  const [user, setUser] = useState()

  console.log(user)
  return (
    <>
      <h2>Booking Coupon</h2>
      <Form>
        <div className='booking__form'>
          <SelectList
            accounts={doctors}
            doctorProfile={doctorProfile}
            setUser={setUser}
          />
        </div>
      </Form>
    </>
  )
}
