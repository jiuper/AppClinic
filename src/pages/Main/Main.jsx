import React from 'react'
import { NavLink } from 'react-router-dom'
import './Main.css'
export const Main = () => {

  return (
    <div className='main__wrapper'>
      <h1>Запись к врачам в наших медцентрах по всей Беларуси</h1>
      <div className='blog'>
        <div className='blog__title'>
          BLOG
        </div>
        <div className='blog__body'>
          <div className='body__left'></div>
          <div className='body__right'>
            <div>
              В Беларуси регистрируют новый штамм омикрона
            </div>
            <div>
              Эндокринные дизрапторы: что разрушает наши гормоны?
            </div>
          </div>
        </div>
        <div className='blog__footer'>
          Читать блог
        </div>
      </div>
      <div className='main__items'>
        <div className='item'>
          <h2>Заказ талонов к врачу</h2>
          <span>Прямая запись к врачам в поликлиниках прямо на сайте!</span>
          <NavLink to='/Booking'>Заказать талон</NavLink>
        </div>
        <div className='item'>
          <h2>Личный кабинет</h2>
          <span>Добавление пациентов в профиль, управление талонами и уведомлениями.</span>
          <NavLink to='/Signup'>Зарегистрироваться</NavLink>
        </div>
      </div>
    </div>
  )
}
