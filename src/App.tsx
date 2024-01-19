import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'

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
import { Modal } from './components/Modal'
import { Icons } from './components/Icons'

function App() {
  const { appConfigStore, menuStore, cartStore } = useSelector(
    (state: RootState) => ({
      appConfigStore: state.appConfig.config,
      menuStore: state.menuStore,
      cartStore: state.cartStore,
    }),
  )
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      dispatch(setAppConfig(data.appConfig as unknown as AppConfig))
    }

    if (!appConfigStore.id) {
      fetchData()
    }
  }, [appConfigStore, dispatch])

  useEffect(() => {
    if (!menuStore.menu.id) {
      dispatch(setMenu(data.products as unknown as Menu))
      setLoading(false)
    }
  }, [menuStore, dispatch])

  if (loading && !menuStore.menu.id) {
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
      <Helmet>
        <title>{appConfigStore.name}</title>
        <style type="text/css">
          {`
            :root {
              --bg-colour: ${appConfigStore.webSettings.backgroundColour};
              --primary-colour: ${appConfigStore.webSettings.primaryColour};
              --primary-colour-hover: ${appConfigStore.webSettings.primaryColourHover};
              --nav-colour: ${appConfigStore.webSettings.navBackgroundColour};
              --banner-img: url(${appConfigStore.webSettings.bannerImage});
            }
          `}
        </style>
      </Helmet>
      <Header />
      <Banner />
      <main className="container mx-auto mb-20 relative">
        <SearchInput />
        <section className="lg:bg-[rgb(248,249,250)] mt-[0.375rem] w-full lg:px-10 py-8 flex gap-6">
          <div className="w-full bg-white lg:shadow-[0px_2px_14px_0px_rgba(0,0,0,0.14)] py-5 px-4">
            <MenuTypes>
              {menuStore.sections.map((section, index) => (
                <MenuTypes.Item
                  key={section.id}
                  name={section.name}
                  active={index === 0}
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
          <Cart className="hidden lg:block" />
        </section>
        {cartStore.cart.length ? (
          <div className="lg:hidden flex flex-col items-center justify-center w-full fixed bottom-0 p-6 pt-2 backdrop-blur-sm">
            <Modal
              triggerClass="w-full"
              trigger={
                <div className="bg-primary-colour hover:bg-primary-colour-hover p-4 font-semibold text-white rounded-full">
                  Carrinho <span>•</span>{' '}
                  {cartStore.cart.length === 1
                    ? `${cartStore.cart.length} item`
                    : `${cartStore.cart.length} items`}
                </div>
              }
            >
              <Cart className="w-full h-full" />
              <Modal.Close>
                <button>
                  <Icons
                    name="close"
                    width={16}
                    className="text-black absolute top-6 right-6 z-20"
                  />
                </button>
              </Modal.Close>
            </Modal>
          </div>
        ) : null}
      </main>
    </>
  )
}

export default App
