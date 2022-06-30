import React from 'react'
import {NavLink} from 'react-router-dom'
export const Navbar = () => {
  return (
    <>
        <NavLink to='Main'>Home</NavLink>
        <NavLink to='Regestration'>Regestration</NavLink>
        <NavLink to='Login'>Login</NavLink>
        <NavLink to='OrderCoupon'>Order Coupon</NavLink>
    </>
  )
}
