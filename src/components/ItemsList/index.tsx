import { Root, Content, Header, Item, Trigger } from '@radix-ui/react-accordion'
import { ItemsListItem } from './ItemsListItem'

type ItemList = {
  value: string
}

export function ItemsList({ value }: ItemList) {
  return (
    <Root className="w-full" type="multiple" defaultValue={[value]}>
      <Item className="w-full" value={value}>
        <Header className="flex justify-between pt-8 pb-3">
          <span className="text-[#121212] font-medium text-2xl">Burgir</span>
          <Trigger>Crick</Trigger>
        </Header>
        <Content className="AccordionContent">
          <ul>
            <ItemsListItem />
            <ItemsListItem />
            <ItemsListItem />
            <ItemsListItem />
          </ul>
        </Content>
      </Item>
    </Root>
  )
}
