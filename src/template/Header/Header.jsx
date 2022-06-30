import React from 'react'
import { Logotip } from './Logotip'
import './Header.css'
import { Navbar } from '../Navbar/Navbar'

export const Header = () => {
    return (
        <div className='header'>
            <div className='header__logo'>
                <Logotip />
            </div>
            <div className='header__nav'>
                <Navbar />
            </div>
        </div>
    )
}
