import React from 'react'
import { Logotip } from './Logotip'
import './Header.css'
import { Navbar } from './Navbar'

export const Header = () => {
    return (
        <header className='header'>
            <div className={`${'header__items'} ${'container'}`}>
                <div className='header__logo'>
                    <Logotip />
                </div>
                <div className='header__nav'>
                    <Navbar />
                </div>
            </div>

        </header>
    )
}
