import { request } from '../../../api'

export const fetchGetChat = async () => {
  const data = await request.get('/chat')

  return data
}