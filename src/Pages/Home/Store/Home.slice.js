import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {}
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    }
  }
})

export const { setUser } = homeSlice.actions

export default homeSlice.reducer