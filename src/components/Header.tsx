import { Icons } from './Icons'

export function Header() {
  return (
    <header className="w-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.16)] z-10 fixed top-0 bg-nav-colour">
      <div className="container mx-auto py-[0.875rem] flex items-center justify-center">
        <nav className="w-full">
          <ul className="hidden lg:flex items-center justify-center text-white">
            <li className="uppercase max-w-[14.5rem] w-full">Menu</li>
            <li className="uppercase max-w-[14.5rem] w-full">Entrar</li>
            <li className="uppercase max-w-[14.5rem] w-full">Contato</li>
          </ul>
          <div className="flex lg:hidden flex-row-reverse items-center p-4 py-1 gap-3">
            <Icons name="menu" width={16} className="text-white" />
            <span className="font-medium text-center text-white w-full">
              Menu
            </span>
          </div>
        </nav>
      </div>
    </header>
  )
}
