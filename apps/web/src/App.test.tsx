import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

it("renders content", () => {
  render(<App />);

  expect(screen.getByRole("paragraph").textContent).toBe("Hello Gloam Star!");
});
