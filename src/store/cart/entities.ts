export interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  modifier?: {
    id: number
    price: number
    name: string
  }
}
