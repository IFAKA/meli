import "@testing-library/jest-dom"
import {
  ADDRESS_URL,
  CATEGORY_URL,
  ITEM_URL,
  SEARCH_URL,
  getAddressUrl,
  getItemCategoryUrl,
  getItemUrl,
  getItemsUrl,
} from "./urls"

describe("Urls functions", () => {
  it("gets items url", () => {
    const matchUrl = `${SEARCH_URL}query`
    const url = getItemsUrl("query")
    expect(url).toBe(matchUrl)
  })

  it("gets item url", () => {
    const matchUrl = `${ITEM_URL}id`
    const url = getItemUrl("id")
    expect(url).toBe(matchUrl)
  })

  it("gets item categories", () => {
    const matchUrl = `${CATEGORY_URL}id`
    const url = getItemCategoryUrl("id")
    expect(url).toBe(matchUrl)
  })

  it("gets items address", () => {
    const matchUrl = `${ADDRESS_URL}query`
    const url = getAddressUrl("query")
    expect(url).toBe(matchUrl)
  })
})
