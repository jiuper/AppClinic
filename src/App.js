import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { Login } from './pages/Login/Login';
import { Main } from './pages/Main/Main';
import { OrderCoupon } from './pages/OrderCoupun/OrderCoupon';
import { Regestration } from './pages/Regestration/Regestration';
import { Header } from './template/Header/Header';

export const App = () => {
  return (
    <div className='wrapper' >
      <Header />
      <Routes>
        <Route path='/*' element={<Main />} />
        <Route path='/Login/*' element={<Login />} />
        <Route path='/Regestration/*' element={<Regestration />} />
        <Route path='/OrderCoupon/*' element={<OrderCoupon />} />
      </Routes>
    </div>
  );
}

