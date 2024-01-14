import { Root, Content, Header, Item, Trigger } from '@radix-ui/react-accordion'
import { ItemsListItem } from './ItemsListItem'
import { Icons } from '@/components/Icons'
import { Item as ItemType, Section } from '@/store/menu/entities'

type ItemList = {
  value: string
  section: Section
}

export function ItemsList({ value, section }: ItemList) {
  function checkPrice(price: number, item: ItemType) {
    if (price > 0) {
      return price
    }

    return item.modifiers !== undefined
      ? item.modifiers[0].items.sort((a, b) => a.price - b.price)[0].price
      : price
  }

  return (
    <Root className="w-full" type="multiple" defaultValue={[value]}>
      <Item className="w-full" value={value}>
        <Header className="flex justify-between pt-8 pb-3">
          <span className="text-[#121212] font-medium text-2xl">
            {section.name}
          </span>
          <Trigger className="group data-[state=closed]:rotate-180 transition-all">
            <Icons
              name="caret"
              className="text-primary-colour group-hover:text-primary-colour-hover transition-colors text-xl"
              width={24}
            />
          </Trigger>
        </Header>
        <Content className="AccordionContent">
          <ul>
            {section.items.map((item) => (
              <ItemsListItem
                key={item.id}
                name={item.name}
                description={item.description}
                image={item.images ? item.images[0].image : undefined}
                price={checkPrice(item.price, item)}
              />
            ))}
          </ul>
        </Content>
      </Item>
    </Root>
  )
}
