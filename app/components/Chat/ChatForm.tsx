'use client'

/* Core */
import { useCallback, useState } from 'react'

/* Instruments */
import {
  chatSlice,
  useDispatch,
} from '@/lib/redux'
import styles from './chat.module.css'

export const ChatForm = () => {
  const dispatch = useDispatch()

  const [chat, setChat] = useState('')

  const send = useCallback((event: any) => {
    event.preventDefault()
    dispatch(chatSlice.actions.addChat({ id: Date.now().toString(), chat }))
    setChat('')
  }, [chat])

  return (
    <form onSubmit={send}>
      <input type="text" name="chat" onChange={event => setChat(event.target.value)} />
      <button type="submit">send</button>
    </form>
  )
}
