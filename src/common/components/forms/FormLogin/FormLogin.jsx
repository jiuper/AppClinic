import React from 'react'
import { SubmitButton } from '../../buttons/SubmitButton/SubmitButton'
import { Input } from '../../Input/Input'

export const FormLogin = () => {
    return (
        <>
            <div>
                <span>Login</span>
                <Input />
                <span>Password</span>
                <Input />
            </div>
            <SubmitButton >login</SubmitButton>
        </>
    )
}
