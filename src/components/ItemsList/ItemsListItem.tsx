import { Modal } from '../Modal'

export function ItemsListItem({
  name,
  description = '',
  image,
  price,
}: {
  name: string
  description?: string
  image?: string
  price: number
}) {
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
        <>
          <img src={image} alt={name} />
          <h1>Aqui</h1>
        </>
      </Modal>
    </li>
  )
}
