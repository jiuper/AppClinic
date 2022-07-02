import React from 'react'
import { NavLink } from 'react-router-dom'
export const Navbar = () => {
  return (
    <>
      <NavLink to='Main'>Home</NavLink>
      <NavLink to='Signup'>Sign up</NavLink>
      <NavLink to='OrderCoupon'>Order Coupon</NavLink>
    </>
  )
}
