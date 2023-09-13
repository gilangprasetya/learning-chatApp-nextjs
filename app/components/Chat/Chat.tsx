'use client'

import { Login } from '../Login'
import { ChatForm } from './ChatForm'
import { ChatList } from './ChatList'
import styles from './chat.module.css'
import { UserList } from '../User/UserList'
import { useDispatch, useSelector } from 'react-redux'
import { selectChats, selectReceiver } from '@/lib/redux'

export const Chat = () => {

  const token = localStorage.getItem('user')
  const receiver = useSelector(selectReceiver)
  

  if (!token) {
    return (
      <Login />
    )
  } else {
    return (
      <div className={styles.allChat}>
        <div className={styles.kiri}>
          <UserList />
        </div>
        <div className={styles.chatBox}>
          <ChatList />
          <ChatForm />
        </div>
      </div>
    )
  }
}
