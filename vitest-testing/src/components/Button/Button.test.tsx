import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test, vi } from "vitest";

import Button from './Button'

const buttonTestId = "button"

describe("Button on screen", () => {

  beforeEach(() => {
    render(<Button>Hey, click on me</Button>)
  })

  test("Should be able to render the button", () => {
    expect(screen.getByTestId(buttonTestId)).toBeInTheDocument();
  })

  test("Should be able to render based on the children prop", () => {
    expect(screen.getByTestId(buttonTestId)).toHaveTextContent("Hey, click on me");
  })
})

describe("Button event", () => {
  test("Should be able to fire event", () => {
    const handleClick = vi.fn();

    const { getByTestId } = render(<Button onClick={handleClick}>Hey, click on me</Button>)
    fireEvent.click(getByTestId(buttonTestId))

    expect(handleClick).toHaveBeenCalledTimes(1);
  })
})

describe("Button style", () => {
  test("Should be able to have default style", () => {
    const { getByTestId } = render(<Button>Hey, click on me</Button>)
    expect(getByTestId(buttonTestId)).toHaveStyle({
      width: "100%",
      maxWidth: "380px",
      height: "40px",
      backgroundColor: "#B6E06B",
      color: "#222222"
    })
  })
})