import { Icons } from '../Icons'

export function CartItem() {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <span className="tracking-[0.5px]">Caipira</span>
        <strong className="font-medium tracking-[0.5px]">R$ 13,00</strong>
      </div>
      <span className="tracking-[0.5px]">Com 2 carnes</span>
      <div className="flex items-center flex-row gap-1">
        <button className="group">
          <Icons
            className="text-primary-colour group-hover:text-primary-colour-hover transition-colors w-5"
            name="minus"
          />
        </button>
        <span className="font-bold w-5 text-center">1</span>
        <button className="group">
          <Icons
            className="text-primary-colour w-5 group-hover:text-primary-colour-hover transition-colors"
            name="plus"
          />
        </button>
      </div>
    </div>
  )
}
