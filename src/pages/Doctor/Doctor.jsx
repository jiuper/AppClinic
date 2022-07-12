import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Login } from '../../template/Login/Login'
import { Profile } from '../../template/Profile/Profile'

export const Doctor = ({ accounts }) => {

    const param = useParams()

    return (
        <>
            <Login
                accounts={accounts}
            />

            <Profile
                accounts={accounts}
                param={param}
            />
        </>
    )
}
