export default function toggleChecked(item, itemsList, setItemsList) {
  const clonedItem = { ...item };
  clonedItem.isCompleted = !clonedItem.isCompleted;

  const clonedItemsList = itemsList.map((itemFromList) =>
    itemFromList.id === item.id ? clonedItem : itemFromList
  );

  setItemsList(clonedItemsList);
}
