import React, { useState } from "react";
import "../styles/sorting.css";

export default function Sorting({ itemsListState }) {
  const [itemsList, setItemsList] = itemsListState;

  const [clickName, setClickName] = useState(false);
  const [clickPrice, setClickPrice] = useState(false);

  const sortItems = () => {
    setItemsList([...itemsList].sort((a, b) => (a.name > b.name ? 1 : -1)));
    setClickName(true);
    setClickPrice(false);
  };

  const sortPrice = () => {
    setItemsList([...itemsList].sort((a, b) => a.price - b.price));
    setClickPrice(true);
    setClickName(false);
  };

  return (
    <div className="sorting-completed">
      <div className="sorting-block">
        <p>Sort by:</p>
        <button
          onClick={sortItems}
          className={clickName ? "sorting-bold" : "sorting-kind"}
          data-testid="name"
        >
          Name
        </button>

        <button
          data-testid="price"
          onClick={sortPrice}
          className={clickPrice ? "sorting-bold" : "sorting-kind"}
        >
          Price
        </button>
      </div>
    </div>
  );
}
