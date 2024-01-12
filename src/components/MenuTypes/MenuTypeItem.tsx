export function MenuTypesItem() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="rounded-full w-[4.625rem] h-[4.625rem] mb-4 p-1 border-2 border-teal-500">
        <img
          src="https://placehold.co/2245x150/orange/purple?font=oswald"
          className="z-0 object-cover w-full h-full rounded-full"
          alt="Placeholder IMG"
        />
      </div>
      <h3 className="font-semibold leading-[normal] h-8 mb-2">Title</h3>
      <div className="w-full h-[2px] bg-orange-500"></div>
    </div>
  )
}
