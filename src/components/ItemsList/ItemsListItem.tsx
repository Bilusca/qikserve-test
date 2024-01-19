import { useDispatch } from 'react-redux'
import * as RadioGroup from '@radix-ui/react-radio-group'

import { Item, ItemModifier } from '@/store/menu/entities'
import { Modal } from '../Modal'
import { Icons } from '../Icons'
import { addToCart } from '@/store/cart/indext'
import { useEffect, useState } from 'react'
import { formatCurrency } from '@/utils/numberFormat'

export function ItemsListItem({
  name,
  description = '',
  image,
  price,
  item,
}: {
  name: string
  description?: string
  image?: string
  price: number | string
  item: Item
}) {
  const [quantity, setQuantity] = useState(1)
  const [stateModifier, setStateModifier] = useState<ItemModifier>(
    {} as ItemModifier,
  )

  useEffect(() => {
    if (item.modifiers && item.modifiers[0]?.items[0]) {
      setStateModifier(item.modifiers[0].items[0])
    }
  }, [item])

  function handleModifier(item: ItemModifier) {
    console.log(item)
    setStateModifier(item)
  }

  const dispatch = useDispatch()

  function handleQuantity(mutate: string) {
    if (mutate === 'plus') {
      setQuantity((state) => state + 1)
    }

    if (mutate === 'minus') {
      if (quantity === 1) return
      setQuantity((state) => state - 1)
    }
  }

  return (
    <li className="mb-4 w-full">
      <Modal
        triggerClass="flex gap-4 w-full"
        trigger={
          <>
            <div className="w-full space-y-1 text-left">
              <h4 className="font-medium">{name}</h4>
              <p className="max-w-[26.5rem] truncate font-light">
                {description}
              </p>
              <strong className="font-medium">{price}</strong>
            </div>
            {image ? (
              <div className="w-32 h-[5.3125rem] rounded-md">
                <img
                  src={image}
                  className="z-0 object-cover w-full h-full rounded-md"
                  alt={name}
                />
              </div>
            ) : null}
          </>
        }
      >
        <div className="relative">
          <div className="h-[20rem]">
            <img
              className="w-full h-full object-cover"
              src={
                image ??
                `https://placehold.co/800x600/4f372f/white?font=roboto&text=${name}`
              }
              alt={name}
            />
          </div>
          <div className="w-full p-4 flex flex-col gap-2">
            <h4 className="text-2xl font-bold">{name}</h4>
            <p>{description}</p>
          </div>
          <div className="w-full">
            {item.modifiers?.length &&
              item.modifiers.map((modifier) => (
                <RadioGroup.Root
                  key={modifier.id}
                  defaultValue={stateModifier.name ?? ''}
                >
                  <div className="flex flex-col py-4 px-6 bg-[#f8f9fa]">
                    <strong className="font-bold">{modifier.name}</strong>
                    <span className="font-normal">
                      Select {modifier.minChoices} option
                    </span>
                  </div>
                  <div className="w-full flex flex-col relative">
                    {modifier.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between items-center py-4 px-6"
                      >
                        <div className="flex flex-col">
                          <strong className="font-bold">{item.name}</strong>
                          <span>{formatCurrency(item.price)}</span>
                        </div>
                        <RadioGroup.Item
                          className="bg-white border-2 border-primary-colour rounded-full p-0.5 h-6 w-6"
                          value={item.name}
                          onClick={() => handleModifier(item)}
                        >
                          <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative p-1 bg-primary-colour rounded-full" />
                        </RadioGroup.Item>
                      </div>
                    ))}
                  </div>
                </RadioGroup.Root>
              ))}
          </div>
          <div className="flex flex-col items-center justify-center w-full sticky bottom-0 p-6 pt-2 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleQuantity('minus')}
                className="group"
                disabled={quantity === 1}
              >
                <Icons
                  className="group-disabled:text-[rgba(218,218,218,1)] text-primary-colour"
                  name="minus"
                  width={32}
                />
              </button>
              <span>{quantity}</span>
              <button onClick={() => handleQuantity('plus')}>
                <Icons name="plus" width={32} className="text-primary-colour" />
              </button>
            </div>
            <button
              onClick={() => dispatch(addToCart(item, quantity, stateModifier))}
              className="w-full mt-[0.625rem] py-3 px-6 text-center text-white bg-primary-colour hover:bg-primary-colour-hover font-medium rounded-[2.5rem]"
            >
              Add to Order <span className="mx-8">•</span>{' '}
              {formatCurrency(
                item.price
                  ? item.price * quantity
                  : (stateModifier.price || 0) * quantity,
              )}
            </button>
          </div>
        </div>
        <Modal.Close>
          <button className="w-8 h-8 rounded-full bg-white absolute top-5 right-5 flex items-center justify-center">
            <Icons name="close" className="text-black" width={12} />
          </button>
        </Modal.Close>
      </Modal>
    </li>
  )
}
