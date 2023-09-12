'use client'

/* Core */
import { useEffect, useState } from 'react'

import styles from './chat.module.css'
import { UserItem } from './UserItem'

export const ChatList = () => {

    const [users, setUsers] = useState([] as UserData[])

    useEffect(() => {
        loadUser()
    }, [])

    const loadUser = async () => {
        const response = await fetch('http://localhost:3000/api/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })

        if (response.ok) {
            const data = await response.json()
            setUsers(data.data)
        }
    }

    return (
        <div className={styles.list}>
            {users.map(item => <UserItem key={item._id} username={item.username} />)}
        </div>
    )
}
