export function ItemsListItem() {
  return (
    <li className="flex gap-4 mb-4">
      <div className="w-full space-y-1">
        <h4 className="font-medium">Burgir bacana</h4>
        <p className="max-w-[26.5rem] truncate font-light">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
          aliquid aliquam, illum obcaecati dignissimos sapiente commodi
          molestias? Amet ducimus praesentium ab. Facere consequatur quidem
          soluta pariatur rerum quos, eaque odio.
        </p>
        <strong className="font-medium">R$ 33,00</strong>
      </div>
      <div className="w-32 h-[5.3125rem] rounded-md">
        <img
          src="https://placehold.co/2245x150/orange/purple?font=oswald"
          className="z-0 object-cover w-full h-full rounded-md"
          alt="Placeholder IMG"
        />
      </div>
    </li>
  )
}
