import { CartItem as ICartItem } from '@/store/cart/entities'
import { formatCurrency } from '@/utils/numberFormat'
import { Icons } from '../Icons'
import { useDispatch } from 'react-redux'
import { updateQuantity } from '@/store/cart/indext'

export function CartItem({ item }: { item: ICartItem }) {
  const dispatch = useDispatch()

  function handleQuantityDispacth(id: number, mutate: string) {
    dispatch(updateQuantity({ id, mutate }))
  }

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <span className="tracking-[0.5px]">{item.name}</span>
        <strong className="font-medium tracking-[0.5px]">
          {formatCurrency(item.price * item.quantity)}
        </strong>
      </div>
      {item.modifier ? (
        <span className="tracking-[0.5px]">{item.modifier.name}</span>
      ) : null}
      <div className="flex items-center flex-row gap-1">
        <button
          className="group"
          onClick={() => handleQuantityDispacth(item.id, 'minus')}
        >
          <Icons
            className="text-primary-colour group-hover:text-primary-colour-hover transition-colors w-5"
            name="minus"
          />
        </button>
        <span className="font-bold w-5 text-center">{item.quantity}</span>
        <button
          className="group"
          onClick={() => handleQuantityDispacth(item.id, 'plus')}
        >
          <Icons
            className="text-primary-colour w-5 group-hover:text-primary-colour-hover transition-colors"
            name="plus"
          />
        </button>
      </div>
    </div>
  )
}
