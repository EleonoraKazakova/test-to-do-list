import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
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
    const item = screen.getByPlaceholderText(/ex.: \$5/i);
    fireEvent.change(item, { target: { value: "6" } });
    expect(item.value).toBe("6");
  });

  test("Should be able to tipe in input Price row", async () => {
    render(renderedForm);
    const item = screen.getByPlaceholderText(/ex.: \$5/i);
    fireEvent.change(item, { target: { value: "a6" } });
    expect(item.value).not.toBe();
  });
});
