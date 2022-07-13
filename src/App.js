import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { Main } from './pages/Main/Main';
import { Booking } from './pages/Booking/Booking';
import { User } from './pages/User/User';
import { SignUp } from './pages/SignUp/SignUp';
import { Header } from './template/Header/Header';
import { Doctor } from './pages/Doctor/Doctor';
import { useUserData } from './Hooks/useUserData';
export const App = () => {


  const [userProfile, setUserProfile, doctorProfile, setDoctorProfile, doctors] = useUserData()

  return (
    <div className='wrapper' >
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/SignUp/*'
            element={
              <SignUp
                accounts={userProfile}
                setAccounts={setUserProfile}
              />} />
          <Route path='/Booking/*'
            element={
              <Booking
                accounts={doctors}
                doctorProfile={doctorProfile}
                setAccounts={setUserProfile}
              />} />
          <Route path='/User/:id'
            element={
              <User
                accounts={userProfile}
                doctorProfile={doctorProfile}
              />} />
          <Route path='/Doctor/*'
            element={
              <Doctor
                accounts={doctorProfile}
                setAccounts={setDoctorProfile}
              />} />
          <Route path='/Doctor/User/:id'
            element={
              <User
                accounts={doctorProfile}
              />} />
        </Routes>
      </div>
    </div>
  );
}
