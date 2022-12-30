import { Wrapper } from "@/test"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import SearchBar from "./SearchBar"

describe("SearchBar", () => {
  it("renders a Navbar", () => {
    render(<SearchBar />, { wrapper: Wrapper })

    const btn = screen.getByRole("button")
    const input = screen.getByRole("textbox")

    expect(btn).toBeInTheDocument()
    expect(input).toBeInTheDocument()
  })
})
