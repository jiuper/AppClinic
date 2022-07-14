import React from 'react'
import { useParams } from 'react-router-dom'
import { Profile } from '../../template/Profile/Profile'
import { SelectList } from '../Booking/SelectList'

export const DoctorProfile = ({ accounts, booking, doctors }) => {
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
                <div>
                    <span>Пациенты</span>
                    {
                        booking.filter(e => e.doctorId === Number(param.id))
                            .map(
                                elem => (
                                    <>
                                        <div key={elem.doctorId}>
                                            <div>{elem.namePatient}</div>
                                        </div>
                                    </>
                                )
                            )
                    }
                </div>
                <div className='user__select'>
                    <SelectList
                        accounts={doctors}
                        doctorProfile={accounts}
                    />
                </div>

            </Profile>
        </>
    )
}
