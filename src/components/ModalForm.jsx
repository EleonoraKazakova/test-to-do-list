import { useState } from "react";
import "../styles/modalForm.css";

export default function ModalForm({ createdItem, modalState }) {
  const [openModal, setOpenModal] = modalState;
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const toogleError = (price) => {
    if (price.match(/^[1-9][0-9]*$/)) {
      setPrice(price);
      setShowErrorMessage(false);
    } else {
      setShowErrorMessage(true);
    }
  };

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
      <div className="modalForm-items">
        <label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            required
            className="modalForm-text"
            placeholder="Write item"
          />
        </label>

        <label>
          <input
            onChange={(e) => toogleError(e.target.value)}
            type="text"
            required
            className="modalForm-text"
            placeholder="Write price"
          />
        </label>
        {showErrorMessage ? (
          <p className="inputForm-message">You need to write the right price</p>
        ) : null}
        <button>Submit</button>
        <button onClick={clearForm}>Cancel</button>
      </div>
    </form>
  );
}
