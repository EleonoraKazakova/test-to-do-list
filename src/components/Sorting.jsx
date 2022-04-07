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
    setItemsList([...itemsList].sort((a, b) => (a.price > b.price ? 1 : -1)));
    setClickPrice(true);
    setClickName(false);
  };

  return (
    <div className="sorting-completed">
      <div className="sorting-block">
        <p>Sort by:</p>
        <div
          onClick={sortItems}
          className={clickName ? "sorting-bold" : "sorting-kind"}
        >
          <p>Name</p>
        </div>
        <div
          onClick={sortPrice}
          className={clickPrice ? "sorting-bold" : "sorting-kind"}
        >
          <p>Price</p>
        </div>
      </div>
    </div>
  );
}
