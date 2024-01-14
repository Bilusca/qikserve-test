export interface AppConfig {
  id: number
  name: string
  interalName: string
  description?: string
  liveFlag: number
  demoFlag: number
  address1: string
  address2: string
  address3: string
  city: string
  postcode: string
  country: string
  timezoneOffset: string
  locale: string
  timeZone: string
  webSettings: {
    id: number
    venueId: number
    bannerImage: string
    backgroundColour: string
    primaryColour: string
    primaryColourHover: string
    navBackgroundColour: string
  }
  ccy: string
  ccySymbol: string
  currency: string
}
