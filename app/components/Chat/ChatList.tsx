'use client'

/* Core */
import { useState } from 'react'

/* Instruments */
import {
  chatSlice,
  useSelector,
  useDispatch,
  selectChat,
} from '@/lib/redux'
import styles from './chat.module.css'

export const ChatList = () => {
  const dispatch = useDispatch()

  return (
    <div className='list'>

    </div>
  )
}
