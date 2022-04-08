import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ModalForm from "../components/ModalForm";

const fakeCreatedItem = jest.fn();
const fakeModalState = [[], jest.fn()];
const renderedForm = (
  <ModalForm createdItem={fakeCreatedItem} modalState={fakeModalState} />
);

test("Should render input element", () => {
  render(renderedForm);
  const item = screen.getByPlaceholderText(/ex.: ice cream/i);
  expect(item).toBeInTheDocument();
});

test("Should be able to tipe in input Item row", () => {
  render(renderedForm);
  const item = screen.getByPlaceholderText(/ex.: ice cream/i);
  fireEvent.change(item, { target: { value: "apple" } });
  expect(item.value).toBe("apple");
});

test("Should be able to tipe in input Price row with right price", () => {
  render(renderedForm);
  const price = screen.getByPlaceholderText(/ex.: \$5/i);
  fireEvent.change(price, { target: { value: "6" } });
  expect(price.value).toBe("6");
});

test("Should be not able to tipe in input Price row with wrong price", () => {
  render(renderedForm);
  const price = screen.getByPlaceholderText(/ex.: \$5/i);
  fireEvent.change(price, { target: { value: "a6" } });
  expect(price.value).not.toBe();
});
