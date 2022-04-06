import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ModalWindow from "../components/ModalWindow";
import ModalWindowMockup from "../mockups/ModalWindowMockup";

test("Open modal window", () => {
  const portalRoot = document.createElement("div");
  portalRoot.setAttribute("id", "portal");
  document.body.appendChild(portalRoot);

  const fakeChild = <ModalWindowMockup />;
  render(<ModalWindow open={true}>{fakeChild} </ModalWindow>);

  const titleElement = screen.queryByText("ModalWindowMockup");
  expect(titleElement).toBeInTheDocument();
});
