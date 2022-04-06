import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ShoppingList from "../components/ShoppingList";

const fakeOpenModal = jest.fn();
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
describe("", () => {
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

  test("Should hide items", () => {
    render(renderedItemsList);

    const buttonItemChecked = screen.getByTestId("itemChecked");

    fireEvent.click(buttonItemChecked);

    const buttonHideItem = screen.getByTestId("hide");
    fireEvent.click(buttonHideItem);

    expect(buttonItemChecked).not.toBeInTheDocument();
  });
});
