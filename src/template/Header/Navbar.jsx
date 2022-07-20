import React from 'react'
import { NavLink } from 'react-router-dom'
export const Navbar = () => {
  return (
    <>
      <NavLink to='Booking'>Талоны</NavLink>
      <NavLink to='Doctor'>Войти как врач</NavLink>
      <NavLink to='Signup'>Войти</NavLink>
    </>
  )
}
