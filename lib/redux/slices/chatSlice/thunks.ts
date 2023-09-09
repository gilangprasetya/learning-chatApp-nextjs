/* Instruments */
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import { fetchGetChat } from './fetchApi'
import { selectCount } from './selectors'
import { chatSlice } from './chatSlice'
import type { ReduxThunkAction } from '@/lib/redux'

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const incrementAsync = createAppAsyncThunk(
  'counter/fetchGetChat',
  async (amount: number) => {
    const response = await fetchGetChat()

    // The value we return becomes the `fulfilled` action payload
    return response.data
  }
)

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOddAsync =
  (amount: number): ReduxThunkAction =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState())

    if (currentValue % 2 === 1) {
      dispatch(chatSlice.actions.incrementByAmount(amount))
    }
  }
