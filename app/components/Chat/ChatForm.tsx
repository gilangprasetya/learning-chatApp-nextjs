'use client'

/* Core */
import { useCallback, useState } from 'react'

/* Instruments */
import {
  useDispatch,
  addChat,
} from '@/lib/redux'
import styles from './chat.module.css'

export const ChatForm = () => {
  const dispatch = useDispatch()

  const [chat, setChat] = useState('')

  const send = useCallback((event: any) => {
    event.preventDefault()
    dispatch(addChat(chat))
    setChat('')
  }, [chat])

  return (
    <form onSubmit={send}>
      <input type="text" name="chat" onChange={event => setChat(event.target.value)} />
      <button type="submit">send</button>
    </form>
  )
}
