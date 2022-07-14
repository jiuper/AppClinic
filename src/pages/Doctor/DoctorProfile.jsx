import React from 'react'
import { useParams } from 'react-router-dom'
import { Profile } from '../../template/Profile/Profile'

export const DoctorProfile = ({accounts}) => {
    const param = useParams()

    return (
        <>
            <Profile>
                {
                    accounts.filter(e => e.id === Number(param.id))
                        .map(
                            elem => (
                                <>
                                    <div key={elem.id}>
                                        <div>{elem.name}</div>
                                        <div>{elem.surname}</div>
                                        <div>{elem.email}</div>
                                    </div>
                                </>
                            )
                        )
                }
            </Profile>
        </>
    )
}
