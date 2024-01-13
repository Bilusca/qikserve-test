import { Root, Content, Header, Item, Trigger } from '@radix-ui/react-accordion'
import { ItemsListItem } from './ItemsListItem'
import { Icons } from '@/components/Icons'

type ItemList = {
  value: string
}

export function ItemsList({ value }: ItemList) {
  return (
    <Root className="w-full" type="multiple" defaultValue={[value]}>
      <Item className="w-full" value={value}>
        <Header className="flex justify-between pt-8 pb-3">
          <span className="text-[#121212] font-medium text-2xl">Burgir</span>
          <Trigger className="data-[state=closed]:rotate-180 transition-all">
            <Icons name="caret" className="text-red-500 text-xl" width={24} />
          </Trigger>
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
