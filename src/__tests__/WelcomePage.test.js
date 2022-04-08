import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import WelcomePage from "../components/WelcomePage";

test("Checking button", () => {
  render(<WelcomePage />);
  const button = screen.queryByRole("button");
  expect(button).toBeEnabled();
});
