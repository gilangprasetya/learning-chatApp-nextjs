'use client'

import { chatSlice, selectReceiver, useSelector } from '@/lib/redux'
import { useDispatch } from 'react-redux'
import styles from './user.module.css'

export const UserItem = ({ username }: { username: string }) => {

    const dispatch = useDispatch()
    const receiver = useSelector(selectReceiver)

    return (
        <div className={username === receiver ? styles.userSelected : styles.user} onClick={() => dispatch(chatSlice.actions.receiver(username))}>
            <p>{username}</p>
        </div>
    )
}