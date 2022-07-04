import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { Main } from './pages/Main/Main';
import { OrderCoupon } from './pages/OrderCoupun/OrderCoupon';
import { SignUp } from './pages/SignUp/SignUp';
import { Header } from './template/Header/Header';

export const App = () => {
  
  return (
    <div className='wrapper' >
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/*' element={<Main />} />
          <Route path='/SignUp/*' element={
            <SignUp />} />
          <Route path='/OrderCoupon/*' element={<OrderCoupon />} />
        </Routes>
      </div>
    </div>
  );
}

