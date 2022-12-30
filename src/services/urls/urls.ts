export const BASE_URL = "http://localhost:8080/api/"
export const SEARCH_URL = `${BASE_URL}items?q=`
export const ITEM_URL = `${BASE_URL}items/`
export const CATEGORY_URL = `${BASE_URL}categories/`
export const ADDRESS_URL = `${BASE_URL}address/`

export const getItemsUrl = (value: string) => `${SEARCH_URL}${value}`
export const getItemUrl = (value: string) => `${ITEM_URL}${value}`
export const getItemCategoryUrl = (value: string) => `${CATEGORY_URL}${value}`
export const getAddressUrl = (value: string) => `${ADDRESS_URL}${value}`
