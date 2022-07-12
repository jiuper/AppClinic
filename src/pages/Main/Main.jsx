import React from 'react'
import { NavLink } from 'react-router-dom'
import './Main.css'
export const Main = () => {

  return (
    <div className='main__nav'>
      <h2>Welcome to Home page</h2>
      <NavLink to='/Booking'>Записаться к специалисту</NavLink>
      <NavLink to='/Doctor'>Войти как доктор</NavLink>
    </div>
  )
}
