import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import ModalForm from "../components/ModalForm";

const fakeCreatedItem = jest.fn();
const fakeModalState = [[], jest.fn()];
const renderedForm = (
  <ModalForm createdItem={fakeCreatedItem} modalState={fakeModalState} />
);

test("Should render input element", async () => {
  render(renderedForm);
  const item = screen.getByPlaceholderText(/ex.: ice cream/i);
  expect(item).toBeInTheDocument();
});
