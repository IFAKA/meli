import { Wrapper } from "@/test"
import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import Navbar from "./Navbar"

describe("Navbar", () => {
  it("renders a Navbar", () => {
    const { container } = render(<Navbar />, { wrapper: Wrapper })

    const el = container.firstChild

    expect(el).toBeInTheDocument()
  })
})
