import toggleChecked from "../scripts/toogleChecked";

test("Check toggleChecked function", () => {
  const testSetItemsList = jest.fn();

  const testItem = {
    id: 0,
    name: "apple",
    price: "5",
    isCompleted: false,
  };
  const testItemsList = [
    {
      id: 0,
      name: "apple",
      price: "5",
      isCompleted: false,
    },
    {
      id: 1,
      name: "apple1",
      price: "5",
      isCompleted: false,
    },
  ];
  const result = [
    {
      id: 0,
      name: "apple",
      price: "5",
      isCompleted: true,
    },
    {
      id: 1,
      name: "apple1",
      price: "5",
      isCompleted: false,
    },
  ];

  toggleChecked(testItem, testItemsList, testSetItemsList);

  expect(testSetItemsList.mock.calls[0][0]).toStrictEqual(result);
});
