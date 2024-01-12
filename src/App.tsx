import { useState } from 'react'

import { Header } from '@/components/Header'
import { Banner } from '@/components/Banner'
import { SearchInput } from '@/components/SearchInput'
import { MenuTypes } from '@/components/MenuTypes'
import { ItemsList } from '@/components/ItemsList'
import { Cart } from './components/Cart'

function App() {
  const [loading, setLoading] = useState(false)

  if (loading) {
    return (
      <main className="h-screen w-full flex items-center justify-center">
        <div className="w-96 h-32 rounded-full animate-pulse flex justify-center items-center bg-orange-500">
          <h1 className="font-extrabold text-4xl text-center">
            Carregando Loja
          </h1>
        </div>
      </main>
    )
  }

  return (
    <>
      <Header />
      <Banner />
      <main className="container mx-auto mb-20">
        <SearchInput />
        <section className="bg-[rgb(248,249,250)] mt-[0.375rem] w-full px-10 py-8 flex gap-6">
          <div className="w-full bg-white shadow-[0px_2px_14px_0px_rgba(0,0,0,0.14)] py-5 px-4">
            <MenuTypes>
              <MenuTypes.Item />
              <MenuTypes.Item />
              <MenuTypes.Item />
            </MenuTypes>
            <ItemsList value="item-1" />
            <ItemsList value="item-2" />
            <ItemsList value="item-3" />
          </div>
          <Cart />
        </section>
      </main>
    </>
  )
}

export default App
