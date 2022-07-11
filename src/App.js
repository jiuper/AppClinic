import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { Main } from './pages/Main/Main';
import { Booking } from './pages/Booking/Booking';
import { User } from './pages/User/User';
import { SignUp } from './pages/SignUp/SignUp';
import { Header } from './template/Header/Header';

export const App = () => {

  const [accounts, setAccounts] = useState([
    {
      id: Date.now() + 1,
      name: 'Kirill',
      surname: 'Pechan',
      email: 'asdsadsadmail.rt',
      login: 'admin',
      password: 'admin'
    },
    {
      id: Date.now() + 2,
      name: 'Masha',
      surname: 'Pechan',
      email: 'asds3adsadmail.rt',
      login: 'MashaP',
      password: '213119fg'
    }
  ])


  return (
    <div className='wrapper' >
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/SignUp/*' element={
            <SignUp
            accounts={accounts}
            setAccounts={setAccounts}
            />} />
          <Route path='/Booking/*' element={<Booking />} />
          <Route path='/User/:id' 
          element={
          <User
          accounts={accounts}
          />}/>
        </Routes>
      </div>
    </div>
  );
}

