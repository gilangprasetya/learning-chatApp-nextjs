/* Core */
import { NextResponse } from 'next/server'

const chatList: Message[] = [
  {
    id: '1',
    chat: 'Kerja dulu'
  },
  {
    id: '2',
    chat: 'Coding dulu'
  },
  {
    id: '3',
    chat: 'Mangstap'
  }
]

export async function GET(req: Request, res: Response) {

  // simulate IO latency
  await new Promise((r) => setTimeout(r, 500))

  return NextResponse.json({ data: chatList })
}

export async function POST(req: Request, res: Response) {
  const body = await req.json()
  const { id = '0', chat = '' } = body

  chatList.push({ id, chat })
  // simulate IO latency
  await new Promise((r) => setTimeout(r, 500))

  return NextResponse.json({ id, chat })
}