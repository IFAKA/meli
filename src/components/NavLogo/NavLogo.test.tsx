import { Wrapper } from "@/test"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import NavLogo from "./NavLogo"

describe("NavLogo", () => {
  it("renders a Navbar", () => {
    render(<NavLogo />, { wrapper: Wrapper })

    const img = screen.getByRole("img")

    expect(img).toBeInTheDocument()
  })
})
