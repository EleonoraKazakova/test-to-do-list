import { useState } from "react";
import "../styles/modalForm.css";
import "../styles/base/button.css";

export default function ModalForm({ createdItem, modalState }) {
  const [openModal, setOpenModal] = modalState;
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function ToogleError(price) {
    if (price.match(/^[1-9][0-9]*$/)) {
      setPrice(price);
      setShowErrorMessage(false);
    } else {
      setShowErrorMessage(true);
    }
  }

  function clearForm() {
    setName("");
    setPrice("");
    setOpenModal(false);
  }

  function onSubmit(event) {
    event.preventDefault();
    createdItem(name, price);
    clearForm();
  }

  if (openModal === false) return null;

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <h3 className="modalForm-title">You can add your item</h3>
      <div className="modalForm-items">
        <div className="modalForm-label-block">
          <label className="modalForm-label">
            Item
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              required
              className="modalForm-text"
              placeholder="Ex.: ice cream"
            />
          </label>
        </div>
        <div className="modalForm-label-block">
          <label className="modalForm-label">
            Price
            <input
              onChange={(e) => ToogleError(e.target.value)}
              type="text"
              required
              className="modalForm-text"
              placeholder="Ex.: $5"
            />
          </label>
          {showErrorMessage ? (
            <p className="modalForm-message">
              You need to write the right price
            </p>
          ) : null}
        </div>

        <button className="button">
          <p className="button-text">Submit</p>
        </button>
        <button onClick={clearForm} className="button">
          <p className="button-text"> Cancel</p>
        </button>
      </div>
    </form>
  );
}
