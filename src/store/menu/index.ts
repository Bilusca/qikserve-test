import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Menu } from './entities'

export const menuStore = createSlice({
  name: 'menuStore',
  initialState: {
    menu: {} as Menu,
  },
  reducers: {
    setMenu: (state, action: PayloadAction<Menu>) => {
      state.menu = action.payload
    },
  },
})

export const { setMenu } = menuStore.actions

export default menuStore.reducer
