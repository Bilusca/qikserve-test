type Image = {
  id: number
  image: string
}

type ItemModifier = {
  id: number
  name: string
  price: number
  maxChoices: number
  position: number
  visible: number
  availabilityType: string
  availabel: boolean
}

type Modifier = {
  id: number
  name: string
  minChoices: number
  maxChoices: number
  items: ItemModifier[]
}

export type Item = {
  id: number
  name: string
  description?: string
  alcoholic: number
  price: number
  position: number
  visible: number
  availabilityType: string
  sku: string
  modifiers?: Modifier[]
  images?: Image[]
  available: boolean
}

export type Section = {
  id: number
  name: string
  description?: string
  position: number
  visible: number
  images?: Image[]
  items: Item[]
}

export interface Menu {
  id: number
  name: string
  type: string
  collapse: 0
  sections: Section[]
}
