import React from 'react'
import { NavLink } from 'react-router-dom'
export const Navbar = () => {
  return (
    <>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='Signup'>Sign up</NavLink>
      <NavLink to='Booking'>Booking</NavLink>
    </>
  )
}
