import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Breadcrumb from "./Breadcrumb"

describe("Breadcrumb", () => {
  it("renders", () => {
    const categories = ["item"]
    render(<Breadcrumb items={categories} />)

    const path = screen.getByRole("heading")

    expect(path).toBeInTheDocument()
  })

  it("doesn't render", () => {
    const categories = [] as string[]
    const { container } = render(<Breadcrumb items={categories} />)

    const el = container.firstChild

    expect(el).not.toBeInTheDocument()
  })
})
