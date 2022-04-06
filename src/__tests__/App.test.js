import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import ModalForm from "../components/ModalForm";

const fakeCreatedItem = jest.fn();
const fakeModalState = [[], jest.fn()];
const renderedForm = (
  <ModalForm createdItem={fakeCreatedItem} modalState={fakeModalState} />
);

describe("", () => {
  test("Should be able to add Items", async () => {
    render(<App />);

    const portalRoot = document.createElement("div");
    portalRoot.setAttribute("id", "portal");
    document.body.appendChild(portalRoot);

    const buttonAddItem = screen.getByRole("button", { name: /add item/i });
    fireEvent.click(buttonAddItem);

    const item = screen.getByPlaceholderText(/ex.: ice cream/i);
    const price = screen.getByPlaceholderText(/ex.: \$5/i);

    fireEvent.change(item, { target: { value: "cherry" } });
    fireEvent.change(price, { target: { value: "8" } });

    const buttonSubmit = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(buttonSubmit);

    const itemList = screen.getByText(/cherry, \$8/i);

    expect(itemList).toBeInTheDocument();
  });
});
