import { ReactNode } from 'react'
import {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Close,
} from '@radix-ui/react-dialog'
import { Icons } from '../Icons'

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
          <Content className="bg-white w-[30rem] max-h-[45rem] z-30 overflow-y-auto relative">
            {children}
            <Close asChild>
              <button className="w-8 h-8 rounded-full bg-white absolute top-5 right-5 flex items-center justify-center">
                <Icons name="close" className="text-black" width={12} />
              </button>
            </Close>
          </Content>
        </Overlay>
      </Portal>
    </Root>
  )
}
