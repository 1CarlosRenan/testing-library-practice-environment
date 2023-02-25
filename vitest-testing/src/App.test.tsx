import "@testing-library/jest-dom";
import { render } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import App from "./App"

describe("App", () => {
  test("Should be able to see the initial text on screen", () => {
    const { getByText } = render(<App />)

    expect(getByText("Hey, its working")).toBeInTheDocument()
  })
})