export interface IChild {
  children: React.ReactNode
}
export interface ItemDetail {
  author: {
    name: string
    lastname: string
  }
  item: {
    id: string
    title: string
    price: {
      currency: string
      amount: number
      decimals: number
    }
    picture: string
    condition: string
    free_shipping: boolean
    sold_quantity: number
    description: string
  }
}
export interface Result {
  author: {
    name: string
    lastname: string
  }
  categories: string[]
  items: Item[]
}
export interface Item {
  id: string
  title: string
  price: {
    currency: string
    amount: number
    decimals: number
  }
  picture: string
  condition: string
  free_shipping: boolean
  address: string
}
export interface ItemProps {
  item: Item
}
export interface BreadcrumbProps {
  items: string[]
}
