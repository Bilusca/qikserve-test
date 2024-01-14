import { ReactNode } from 'react'
import { Root, Trigger, Portal, Overlay, Content } from '@radix-ui/react-dialog'

export function Modal({
  trigger,
  children,
  triggerClass,
}: {
  trigger: ReactNode
  children: ReactNode
  triggerClass?: string
}) {
  return (
    <Root>
      <Trigger className={triggerClass}>{trigger}</Trigger>
      <Portal>
        <Overlay className="bg-black/60 fixed top-0 left-0 right-0 bottom-0 grid place-items-center overflow-y-auto z-20">
          <Content className="bg-white w-[30rem] z-30">{children}</Content>
        </Overlay>
      </Portal>
    </Root>
  )
}
