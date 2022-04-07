import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ShoppingList from "../components/ShoppingList";

const fakeOpenModal = jest.fn();
const fakeItemsListStateTrue = [
  [
    {
      id: 0,
      name: "peach",
      price: "7",
      isCompleted: true,
    },
  ],
  jest.fn(),
];
const renderedCheckedItemsList = (
  <ShoppingList
    itemsListState={fakeItemsListStateTrue}
    setOpenModal={fakeOpenModal}
  />
);

const fakeItemsListState = [
  [
    {
      id: 0,
      name: "apple",
      price: "5",
      isCompleted: false,
    },
  ],
  jest.fn(),
];

const renderedItemsList = (
  <ShoppingList
    itemsListState={fakeItemsListState}
    setOpenModal={fakeOpenModal}
  />
);

test("Click on a checkbox and change isCompleted", () => {
  render(renderedItemsList);

  const buttonCheckBox = screen.getByTestId("itemChecked");
  fireEvent.click(buttonCheckBox);

  expect(fakeItemsListState[1].mock.calls.length).toBe(1);
  expect(fakeItemsListState[1].mock.calls[0][0]).toStrictEqual([
    {
      id: 0,
      name: "apple",
      price: "5",
      isCompleted: true,
    },
  ]);
});

test("Should hide checked items", () => {
  render(renderedCheckedItemsList);

  const buttonItemChecked = screen.getByTestId("itemChecked");
  fireEvent.click(buttonItemChecked);

  const buttonHideItem = screen.getByTestId("hide");
  fireEvent.click(buttonHideItem);

  expect(buttonItemChecked).not.toBeInTheDocument();
});

test("Should not hide unChecked items", () => {
  render(renderedItemsList);

  const buttonItemChecked = screen.getByTestId("itemChecked");
  fireEvent.click(buttonItemChecked);

  const buttonHideItem = screen.getByTestId("hide");
  fireEvent.click(buttonHideItem);

  expect(buttonItemChecked).toBeInTheDocument();
});
