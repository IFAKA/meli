import { Wrapper } from "@/test"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Item from "./Item"

const item = {
  id: "hi",
  title: "hi",
  price: {
    currency: "hi",
    amount: 1,
    decimals: 1,
  },
  picture: "hi",
  condition: "hi",
  // eslint-disable-next-line camelcase
  free_shipping: true,
  address: "hi",
}

const itemWoFreeShipping = {
  ...item,
  // eslint-disable-next-line camelcase
  free_shipping: false,
}

describe("Item", () => {
  it("renders", () => {
    render(<Item item={item} />, { wrapper: Wrapper })

    const imgs = screen.queryAllByRole("img")
    const headers = screen.queryAllByRole("heading")

    expect(imgs).toHaveLength(2)
    expect(headers).toHaveLength(3)
  })

  it("doesn't renders free shipping", () => {
    render(<Item item={itemWoFreeShipping} />, { wrapper: Wrapper })

    const imgs = screen.queryAllByRole("img")

    expect(imgs).toHaveLength(1)
  })
})
