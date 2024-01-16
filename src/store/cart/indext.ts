import { createSlice } from '@reduxjs/toolkit'
import { Item, ItemModifier } from '../menu/entities'
import { CartItem } from './entities'

interface CartState {
  cart: CartItem[]
  summary: {
    subTotal: number
    total: number
  }
}

export const cartStore = createSlice({
  name: 'cartStore',
  initialState: {
    cart: [],
    summary: {
      subTotal: 0,
      total: 0,
    },
  } as CartState,
  reducers: (create) => ({
    addToCart: create.preparedReducer(
      (item: Item, quantity: number, modifier?: ItemModifier) => {
        const preparedObject: { payload: CartItem } = {
          payload: {
            name: item.name,
            id: item.id,
            price: item.price,
            quantity,
          },
        }

        if (modifier && Object.keys(modifier).length) {
          preparedObject.payload = {
            ...preparedObject.payload,
            id: modifier.id,
            price: modifier.price,
            modifier,
          }
        }

        return preparedObject
      },
      (state, action) => {
        if (
          state.cart.findIndex((item) => action.payload.id === item.id) !== -1
        ) {
          const index = state.cart.findIndex(
            (item) => action.payload.id === item.id,
          )
          state.cart[index].quantity += action.payload.quantity
        } else {
          state.cart.push(action.payload)
        }

        state.summary = {
          total: state.cart.reduce(
            (accumulator, item) => accumulator + item.price * item.quantity,
            0,
          ),
          subTotal: state.cart.reduce(
            (accumulator, item) => accumulator + item.price * item.quantity,
            0,
          ),
        }
      },
    ),
    updateQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id)

      if (!item) return

      switch (action.payload.mutate) {
        case 'plus':
          item.quantity++
          break
        case 'minus':
          item.quantity--
      }

      if (item.quantity === 0) {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id)
      }

      state.cart.filter((item) => item.id !== action.payload.id).push(item)

      state.summary = {
        total: state.cart.reduce(
          (accumulator, item) => accumulator + item.price * item.quantity,
          0,
        ),
        subTotal: state.cart.reduce(
          (accumulator, item) => accumulator + item.price * item.quantity,
          0,
        ),
      }
    },
  }),
})

export const { addToCart, updateQuantity } = cartStore.actions

export default cartStore.reducer
