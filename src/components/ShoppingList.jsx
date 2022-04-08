import { useState } from "react";
import "../styles/shoppingList.css";
import "../styles/base/button.css";
import Sorting from "./Sorting";
import toggleChecked from "../scripts/toogleChecked";

export default function ShoppingList({ itemsListState, setOpenModal }) {
  const [itemsList, setItemsList] = itemsListState;
  const [checkedHide, setCheckedHide] = useState(false);

  function toggleCheckedHide() {
    setCheckedHide(!checkedHide);
  }

  const items = itemsList.map((item) =>
    item.isCompleted && checkedHide ? null : (
      <div className="shopingList-line" key={item.id}>
        <input
          type="checkbox"
          name="itemChecked"
          data-testid="itemChecked"
          checked={item.isCompleted}
          onChange={() => toggleChecked(item, itemsList, setItemsList)}
        />
        <label>
          {item.name}, ${item.price}
        </label>
      </div>
    )
  );

  return (
    <section className="shopingList-content">
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
            <label key="hide">Hide selected items</label>
          </div>
          <Sorting itemsListState={[itemsList, setItemsList]} />
        </div>
        {items}
      </div>
      <button onClick={() => setOpenModal(true)} className="button">
        <p className="button-text">Add Item</p>
      </button>
    </section>
  );
}
