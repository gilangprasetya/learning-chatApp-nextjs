'use client'

import { Login } from '../Login'
import { ChatForm } from './ChatForm'
import { ChatList } from './ChatList'
import styles from './chat.module.css'
import { UserList } from '../User/UserList'
import { useSelector, selectReceiver } from '@/lib/redux'
import { io } from "socket.io-client";
import { useEffect } from 'react'

// connect to socket server
const socket = io('http://localhost:3001', {
  // path: "/api/socketio",
});

export const Chat = () => {

  const token = localStorage.getItem('user')
  const receiver = useSelector(selectReceiver)

  useEffect((): any => {

    // log socket connection
    socket.on("connect", () => {
      console.log("SOCKET CONNECTED!", socket.id);
    });

    // update chat on new message dispatched
    socket.on("message", (message: string) => {

    });

    // socket disconnet onUnmount if exists
    if (socket) return () => socket.disconnect();
  }, []);

  if (!token) {
    return (
      <Login />
    )
  } else {
    return (
      <div className={styles.allChat}>
        <UserList />
        <div className={styles.chatBox}>
          <ChatList />
          <ChatForm />
        </div>
      </div>
    )
  }
}
