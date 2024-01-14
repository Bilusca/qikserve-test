import { CSSProperties, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Header } from '@/components/Header'
import { Banner } from '@/components/Banner'
import { SearchInput } from '@/components/SearchInput'
import { MenuTypes } from '@/components/MenuTypes'
import { ItemsList } from '@/components/ItemsList'
import { Cart } from '@/components/Cart'
import { RootState } from '@/store'
import { setAppConfig } from '@/store/app-config'

import data from '../data.json'
import { AppConfig } from '@/store/app-config/entities'
import { setMenu } from '@/store/menu'
import { Menu } from '@/store/menu/entities'

function App() {
  const { appConfigStore, menuStore } = useSelector((state: RootState) => ({
    appConfigStore: state.appConfig.config,
    menuStore: state.menuStore.menu,
  }))
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      dispatch(setAppConfig(data.appConfig as unknown as AppConfig))
      dispatch(setMenu(data.products as unknown as Menu))

      setLoading(false)
    }

    if (!appConfigStore.id) {
      fetchData()
    } else {
      setLoading(false)
    }
  }, [])

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

  const style = {
    '--bg-colour': appConfigStore.webSettings.backgroundColour,
    '--primary-colour': appConfigStore.webSettings.primaryColour,
    '--primary-colour-hover': appConfigStore.webSettings.primaryColourHover,
    '--nav-colour': appConfigStore.webSettings.navBackgroundColour,
    '--banner-img': `url(${appConfigStore.webSettings.bannerImage})`,
  } as CSSProperties

  return (
    <div style={style}>
      <Header />
      <Banner />
      <main className="container mx-auto mb-20">
        <SearchInput />
        <section className="bg-[rgb(248,249,250)] mt-[0.375rem] w-full px-10 py-8 flex gap-6">
          <div className="w-full bg-white shadow-[0px_2px_14px_0px_rgba(0,0,0,0.14)] py-5 px-4">
            <MenuTypes>
              {menuStore.sections.map((section) => (
                <MenuTypes.Item
                  key={section.id}
                  name={section.name}
                  image={
                    section.images
                      ? section.images[0].image
                      : 'https://placehold.co/2245x150/orange/purple?font=oswald'
                  }
                />
              ))}
            </MenuTypes>
            {menuStore.sections.map((section) => (
              <ItemsList
                key={`${section.id}-${section.name}`}
                value={section.name}
                section={section}
              />
            ))}
          </div>
          <Cart />
        </section>
      </main>
    </div>
  )
}

export default App
