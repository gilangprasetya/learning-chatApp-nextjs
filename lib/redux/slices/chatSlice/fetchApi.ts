import { request } from '../../../api'

export const fetchLoadChat = async () => {
  const { data } = await request.get('/chat')
  return data
}

export const fetchAddChat = async (message: Message) => {
  const { data } = await request.post('/chat', message)
  return data
}