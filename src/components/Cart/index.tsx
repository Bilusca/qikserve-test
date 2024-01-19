import { useSelector } from 'react-redux'
import { CartItem } from './CartItem'
import { RootState } from '@/store'
import { formatCurrency } from '@/utils/numberFormat'
import { cn } from '@/utils/cn'

export function Cart({ className = '' }: { className?: string }) {
  const cartStore = useSelector((state: RootState) => state.cartStore)

  return (
    <section
      className={cn(
        'w-[20rem] bg-[rgb(248,249,250)] lg:bg-white shadow-[0px_2px_14px_0px_rgba(0,0,0,0.15)] h-fit lg:sticky top-16',
        className,
      )}
    >
      <header className="w-full px-6 py-4 bg-white lg:bg-[#f8f9fa] border-b">
        <p className="tracking-[0.5px] text-2xl lg:text-right text-center font-bold w-full">
          Carrinho
        </p>
      </header>
      <div className="px-4 py-2 bg-white">
        {cartStore.cart.length ? (
          cartStore.cart.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <div className="p-6">
            <span>Seu carrinho está vazio</span>
          </div>
        )}
      </div>
      {cartStore.cart.length ? (
        <footer className="w-full bg-[#f8f9fa] relative">
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
          <div className="lg:hidden flex flex-col items-center justify-center w-full fixed bottom-0 p-6 pt-2 backdrop-blur-sm">
            <button className="bg-primary-colour hover:bg-primary-colour-hover p-4 font-semibold text-white rounded-full w-full mx-auto">
              Checkout now
            </button>
          </div>
        </footer>
      ) : null}
    </section>
  )
}
