import React, { useState } from 'react'
import { Form } from '../../components/Form/Form'
import { SelectList } from './SelectList'
import './Booking.css'
import { Regestration } from '../../template/Login/Regestration'

export const Booking = ({ accounts, doctorProfile, setAccounts }) => {
  
  const [user, setUser] = useState([])
  return (
    <>
      <h2>Booking Coupon</h2>
      <Form>
        <div className='booking__form'>
          <SelectList
            accounts={accounts}
            doctorProfile={doctorProfile}
            setUser={setUser}
          />
          <Regestration
            user={user}
            setAccounts={setAccounts}
          />
        </div>
      </Form>
    </>
  )
}
