export function MenuTypesItem({
  name,
  image,
  active = false,
}: {
  name: string
  image: string
  active: boolean
}) {
  return (
    <div
      className="flex flex-col items-center justify-center group"
      data-active={active}
    >
      <div className="rounded-full w-[4.625rem] h-[4.625rem] mb-4 p-1 border-2 border-transparent group-data-[active=true]:border-primary-colour">
        <img
          src={image}
          className="z-0 object-cover w-full h-full rounded-full"
          alt={name}
        />
      </div>
      <h3 className="font-semibold leading-[normal] h-8 mb-2">{name}</h3>
      <div className="w-full h-[2px] group-data-[active=true]:bg-primary-colour"></div>
    </div>
  )
}
