import { useSelector } from 'react-redux'
import { CartItem } from './CartItem'
import { RootState } from '@/store'
import { formatCurrency } from '@/utils/numberFormat'

export function Cart() {
  const cartStore = useSelector((state: RootState) => state.cartStore)

  return (
    <section className="w-[20rem] bg-white shadow-[0px_2px_14px_0px_rgba(0,0,0,0.15)] h-fit sticky top-16">
      <header className="w-full px-6 py-4 bg-[#f8f9fa]">
        <strong className="tracking-[0.5px] text-2xl">Carrinho</strong>
      </header>
      <div className="px-4 py-2">
        {cartStore.cart.length ? (
          cartStore.cart.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <div className="p-6">
            <span>Seu carrinho está vazio</span>
          </div>
        )}
      </div>
      {cartStore.cart.length ? (
        <footer className="w-full bg-[#f8f9fa]">
          <div className="flex px-6 py-4 justify-between items-center border-b border-t border-[rgba(218,218,218,1)]">
            <small className="font-normal">Sub total:</small>
            <strong className="font-medium">
              {formatCurrency(cartStore.summary.subTotal)}
            </strong>
          </div>
          <div className="flex px-6 py-4 justify-between items-center">
            <span className="text-2xl font-light">Total:</span>
            <strong className="text-2xl font-bold">
              {formatCurrency(cartStore.summary.total)}
            </strong>
          </div>
        </footer>
      ) : null}
    </section>
  )
}
