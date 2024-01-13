import { ReactNode } from 'react'
import { Root, Trigger, Portal, Overlay, Content } from '@radix-ui/react-dialog'

export function Modal({ children }: { children: ReactNode }) {
  return (
    <Root>
      <Trigger>{children}</Trigger>
      <Portal>
        <Overlay />
        <Content>Aqui</Content>
      </Portal>
    </Root>
  )
}
