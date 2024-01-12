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
        <button>
          <Icons className="text-orange-500 w-5" name="minus" />
        </button>
        <span className="font-bold w-5 text-center">1</span>
        <button>
          <Icons className="text-orange-500 w-5" name="plus" />
        </button>
      </div>
    </div>
  )
}
