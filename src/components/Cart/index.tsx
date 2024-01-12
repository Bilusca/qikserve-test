import { CartItem } from './CartItem'

export function Cart() {
  return (
    <section className="w-[20rem] bg-white shadow-[0px_2px_14px_0px_rgba(0,0,0,0.15)] h-fit">
      <header className="w-full px-6 py-4 bg-[#f8f9fa]">
        <strong className="tracking-[0.5px] text-2xl">Carrinho</strong>
      </header>
      <div className="px-4 py-2">
        <CartItem />
      </div>
      <footer className="w-full bg-[#f8f9fa]">
        <div className="flex px-6 py-4 justify-between items-center border-b border-t border-[rgba(218,218,218,1)]">
          <small className="font-normal">Sub total</small>
          <strong className="font-medium">R$ 48,00</strong>
        </div>
        <div className="flex px-6 py-4 justify-between items-center">
          <span className="text-2xl font-light">Total:</span>
          <strong className="text-2xl font-bold">R$ 48,00</strong>
        </div>
      </footer>
    </section>
  )
}
