import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Sorting from "../components/Sorting";

const fakeItemsListState = [
  [
    {
      id: 0,
      name: "apple",
      price: "15",

      isCompleted: false,
    },
    {
      id: 1,
      name: "peach",
      price: "5",
      isCompleted: false,
    },
  ],
  jest.fn(),
];

const renderedItemsList = <Sorting itemsListState={fakeItemsListState} />;

test("Should sort item by price", () => {
  render(renderedItemsList);

  const buttonPrice = screen.getByTestId("price");
  fireEvent.click(buttonPrice);

  expect(fakeItemsListState[1].mock.calls[0][0]).toStrictEqual([
    {
      id: 1,
      name: "peach",
      price: "5",
      isCompleted: false,
    },
    {
      id: 0,
      name: "apple",
      price: "15",
      isCompleted: false,
    },
  ]);
});

test("Should sort item by name", () => {
  render(renderedItemsList);

  const buttonPrice = screen.getByTestId("name");
  fireEvent.click(buttonPrice);

  expect(fakeItemsListState[1].mock.calls[0][0]).toStrictEqual([
    {
      id: 0,
      name: "apple",
      price: "15",
      isCompleted: false,
    },
    {
      id: 1,
      name: "peach",
      price: "5",
      isCompleted: false,
    },
  ]);
});
