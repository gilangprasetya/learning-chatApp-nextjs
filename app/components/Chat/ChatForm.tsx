'use client'

/* Core */
import { useCallback, useState } from 'react'

/* Instruments */
import {
  useDispatch,
  addChat,
  chatSlice,
  addChatAsync,
} from '@/lib/redux'
import styles from './chat.module.css'

export const ChatForm = () => {
  const dispatch = useDispatch()

  const [chat, setChat] = useState('')

  const send = useCallback((event: any) => {
    event.preventDefault()
    const id = Date.now().toString()
    const message: Message = { id, chat }
    dispatch(chatSlice.actions.add(message)) // add to inteface
    dispatch(addChatAsync(message)) // add to backend
    setChat('')
  }, [chat])

  return (
    <form onSubmit={send}>
      <div className={styles.divForm}>
        <input className={styles.input} type="text" name="chat" value={chat} onChange={event => setChat(event.target.value)} />
        <button className={styles.button} type="submit">send</button>
      </div>
    </form>
  )
}
