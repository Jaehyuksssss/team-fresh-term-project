import { any } from 'prop-types'
import { atom, DefaultValue } from 'recoil'

export const OpenDaumPostCode = atom({
  key: 'OpenPost',
  default: false,
})
export const responseCode = atom({
  key: 'OpenPostcode',
  default: 0,
})
export const SearchResult = atom({
  key: 'searchResult',
  default: {
    zonecode: '',
    address: '',
    // searchResult: {},
  },
})
