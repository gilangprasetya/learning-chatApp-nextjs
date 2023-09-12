'use client'

import { Login } from '../Login'
import { ChatForm } from './ChatForm'
import { ChatList } from './ChatList'
import styles from './chat.module.css'

export const Chat = () => {

  const token = localStorage.getItem('user')

  if (!token) {
    return (
      <Login />
    )
  } else {
    return (
      <div className={styles.chatBox}>
        <ChatList />
        <ChatForm />
      </div>
    )
  }
}
