export function Header() {
  return (
    <header className="w-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.16)] z-10 fixed top-0">
      <div className="container mx-auto py-[0.875rem] flex items-center justify-center">
        <nav className="w-full">
          <ul className="flex items-center justify-center">
            <li className="uppercase max-w-[14.5rem] w-full">Menu</li>
            <li className="uppercase max-w-[14.5rem] w-full">Entrar</li>
            <li className="uppercase max-w-[14.5rem] w-full">Contato</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
