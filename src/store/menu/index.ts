import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Menu, Section } from './entities'

export const menuStore = createSlice({
  name: 'menuStore',
  initialState: {
    menu: {} as Omit<Menu, 'sections'>,
    sections: [] as Section[],
  },
  reducers: {
    setMenu: (state, action: PayloadAction<Menu>) => {
      const { sections, ...rest } = action.payload

      state.menu = rest
      state.sections = sections
    },
  },
})

export const { setMenu } = menuStore.actions

export default menuStore.reducer
