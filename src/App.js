import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { Main } from './pages/Main/Main';
import { OrderCoupon } from './pages/OrderCoupun/OrderCoupon';
import { SignUp } from './pages/SignUp/SignUp';
import { Header } from './template/Header/Header';

export const App = () => {

  const [pageId, setPageId] = useState('/SignUp/*')
  
  return (
    <div className='wrapper' >
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/*' element={<Main />} />
          <Route path={pageId} element={
          <SignUp
          setValue={setPageId} 
          />} />
          <Route path='/OrderCoupon/*' element={<OrderCoupon />} />
        </Routes>
      </div>
    </div>
  );
}

