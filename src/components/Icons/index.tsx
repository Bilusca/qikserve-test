import { FC, SVGProps } from 'react'
import { Search } from './Search'
import { Plus } from './Plus'
import { Minus } from './Minus'
import { Caret } from './Caret'
import { Close } from './Close'
import { Menu } from './Menu'

const ICONS = {
  search: Search,
  plus: Plus,
  minus: Minus,
  caret: Caret,
  close: Close,
  menu: Menu,
} as const

interface IconsType extends SVGProps<SVGSVGElement> {
  name: keyof typeof ICONS
}

export const Icons: FC<IconsType> = ({ name, ...rest }) => {
  const SelectedIcon = ICONS[name]

  if (ICONS[name]) {
    return <SelectedIcon {...rest} />
  }

  return <small className="text-xs">icon don`t exists</small>
}
