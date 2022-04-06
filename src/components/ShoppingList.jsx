import { useState } from "react";
import "../styles/shoppingList.css";

export default function ShoppingList({ itemsListState, setOpenModal }) {
  const [itemsList, setItemsList] = itemsListState;
  const [checkedHide, setCheckedHide] = useState(false);

  function toggleCheckedHide() {
    setCheckedHide(!checkedHide);
  }
  console.log("checkedHide:", checkedHide);
  function toggleChecked(item) {
    const clonedItem = { ...item };
    clonedItem.isCompleted = !clonedItem.isCompleted;
    const clonedItemsList = itemsList.map((itemFromList) =>
      itemFromList.id === item.id ? clonedItem : itemFromList
    );
    setItemsList(clonedItemsList);
  }

  const items = itemsList.map((item) =>
    item.isCompleted && checkedHide ? null : (
      <div className="shopingList-line" key={item.id}>
        <input
          type="checkbox"
          name="itemChecked"
          data-testid="itemChecked"
          checked={item.isCompleted}
          onChange={() => toggleChecked(item)}
        />
        <label>
          {item.name}, ${item.price}
        </label>
      </div>
    )
  );

  return (
    <div>
      <h3 className="shopingList-title">Shopping list</h3>
      <div className="shopingList-block">
        <div>
          <input
            type="checkbox"
            name="hide"
            data-testid="hide"
            checked={checkedHide}
            onChange={toggleCheckedHide}
          />
          <label key="hide">Hide completed items</label>
        </div>
      </div>
      {items}
      <button onClick={() => setOpenModal(true)}>Add Item</button>
    </div>
  );
}
