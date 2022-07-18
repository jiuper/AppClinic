import React from 'react'

export const ProfileItems = ({ name, surname, email, occupation, children }) => {
    return (
            <div >
                <div>{name}</div>
                <div>{surname}</div>
                <div>{email}</div>
                <div>{occupation}</div>
                {children}
            </div>
    )
}
