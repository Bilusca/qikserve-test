import axios from 'axios'

const api = axios.create()

export async function getStoreDetails() {
  const { data } = await api.get(
    'https://98d36ac94d36499f89398905f4d4f609.api.mockbin.io/',
  )

  return data
}
