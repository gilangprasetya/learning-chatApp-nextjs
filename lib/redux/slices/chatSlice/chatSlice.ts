/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

/* Instruments */
import { addChatAsync, loadChatAsync } from './thunks'

const initialState: ChatSliceState = {
  value: [],
  status: 'idle',
  room: '',
  receiver: '',
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    add: (state, action: PayloadAction<Message>) => {
      state.value.push(action.payload)
    },
    room: (state, action: PayloadAction<string>) => {
      state.room = action.payload
    },
    receiver: (state, action: PayloadAction<string>) => {
      state.receiver = action.payload
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(loadChatAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(loadChatAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.value = action.payload
      })
      .addCase(loadChatAsync.rejected, (state, action) => {
        state.status = 'failed'
        state.value = []
      })
  },
})

export interface ChatSliceState {
  value: Message[]
  status: 'idle' | 'loading' | 'failed'
  room: string
  receiver: string
}
