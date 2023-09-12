'use client'

import { chatSlice } from '@/lib/redux'
import { useDispatch } from 'react-redux'
import styles from './user.module.css'

export const UserItem = ({ username }: { username: string }) => {

    const dispatch = useDispatch()

    return (
        <div className={styles.user} onClick={() => dispatch(chatSlice.actions.receiver(username))}>
            <p>{username}</p>
        </div>
    )
}