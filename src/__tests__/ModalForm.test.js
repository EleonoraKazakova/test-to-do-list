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
  test("Should render input element", async () => {
    render(renderedForm);
    const item = screen.getByPlaceholderText(/ex.: ice cream/i);
    expect(item).toBeInTheDocument();
  });

  test("Should be able to tipe in input Item row", async () => {
    render(renderedForm);
    const item = screen.getByPlaceholderText(/ex.: ice cream/i);
    fireEvent.change(item, { target: { value: "apple" } });
    expect(item.value).toBe("apple");
  });

  test("Should be able to tipe in input Price row", async () => {
    render(renderedForm);
    const price = screen.getByPlaceholderText(/ex.: \$5/i);
    fireEvent.change(price, { target: { value: "6" } });
    expect(price.value).toBe("6");
  });

  test("Should be not able to tipe in input Price row with wrong price", async () => {
    render(renderedForm);
    const price = screen.getByPlaceholderText(/ex.: \$5/i);
    fireEvent.change(price, { target: { value: "a6" } });
    expect(price.value).not.toBe();
  });

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
