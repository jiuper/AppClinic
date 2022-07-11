import React from 'react'
import {NavLink } from 'react-router-dom'
export const Main = () => {

  return (
    <div>
      <span>Welcome to Home page</span>
        <NavLink to='/OrderCoupon'>Order Coupun</NavLink>
    </div>
  )
}
