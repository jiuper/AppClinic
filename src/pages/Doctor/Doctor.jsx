import React from 'react'
import { useParams } from 'react-router-dom'
import { Login } from '../../template/Login/Login'
import { Profile } from '../../template/Profile/Profile'

export const Doctor = ({ accounts }) => {

    const param = useParams()

    return (
        <div className='doctor__profile'>
            <Login
                accounts={accounts}
            />

            <Profile
                accounts={accounts}
                param={param}
            />
        </div>
    )
}
