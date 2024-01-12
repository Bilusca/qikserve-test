import { Icons } from './Icons'

export function SearchInput() {
  return (
    <div className="container mx-auto mt-3 rounded-lg bg-white flex items-center border border-[#8a94a4]">
      <button className="focus:outline-none py-[0.625rem] px-3">
        <Icons
          name="search"
          className="text-[#8a94a4]"
          width={24}
          height={24}
        />
      </button>
      <input
        type="text"
        placeholder="Search menu items"
        className="focus:outline-none w-full"
      />
    </div>
  )
}
