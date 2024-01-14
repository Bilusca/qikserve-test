import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AppConfig } from './entities'

export const appConfig = createSlice({
  name: 'appConfig',
  initialState: {
    config: {} as AppConfig,
  },
  reducers: {
    setAppConfig: (state, action: PayloadAction<AppConfig>) => {
      state.config = action.payload
    },
  },
})

export const { setAppConfig } = appConfig.actions

export default appConfig.reducer
