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
import { DoctorProfile } from './pages/Doctor/DoctorProfile';
import { useBooking } from './Hooks/useBooking';
import { useDoctorProfile } from './Hooks/useDoctorProfile';
import { doctors } from './Hooks/functions';
export const App = () => {


  const { userProfile, setUserProfile } = useUserData()
  const [doctorProfile, setDoctorProfile] = useDoctorProfile()
  const { booking, setBooking } = useBooking()
  
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
                booking={booking}
                doctors={doctors}
                doctorProfile={doctorProfile}
                setBooking={setBooking}
              />} />
          <Route path='/Doctor/*'
            element={
              <Doctor
                accounts={doctorProfile}
                setAccounts={setDoctorProfile}
              />} />
          <Route path='/Doctor/DoctorProfile/:id'
            element={
              <DoctorProfile
                accounts={doctorProfile}
                doctors={doctors}
                booking={booking}
              />} />
        </Routes>
      </div>
    </div>
  );
}
