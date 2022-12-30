import { Wrapper } from "@/test"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Layout from "./Layout"

describe("Layout", () => {
  it("renders the Layout", () => {
    render(
      <Layout>
        <h1>hi</h1>
      </Layout>,
      { wrapper: Wrapper },
    )

    const hi = screen.getByRole("heading")

    expect(hi).toBeInTheDocument()
  })
})
