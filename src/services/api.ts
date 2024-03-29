import axios from 'axios'

import { AppConfig } from '@/store/app-config/entities'

const api = axios.create()

export async function getStoreDetails() {
  const { data, status } = await api.get<AppConfig>(
    'https://98d36ac94d36499f89398905f4d4f609.api.mockbin.io/',
  )

  return { data, status }
}
