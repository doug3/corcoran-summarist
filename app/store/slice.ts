import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AppState {
  isLoggedIn: boolean
  user: {
    id?: string
    email?: string
    name?: string
  } | null
}

const initialState: AppState = {
  isLoggedIn: false,
  user: null,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ id: string; email: string; name: string }>) => {
      state.isLoggedIn = true
      state.user = action.payload
    },
    logout: (state) => {
      state.isLoggedIn = false
      state.user = null
    },
    setUser: (state, action: PayloadAction<{ id: string; email: string; name: string }>) => {
      state.user = action.payload
    },
  },
})

export const { login, logout, setUser } = appSlice.actions
export default appSlice.reducer