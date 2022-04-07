import { useState, useEffect } from "react";
import logo from "./images/logo.png";
import "./styles/app.css";
import WelcomePage from "./components/WelcomePage";
import ShoppingList from "./components/ShoppingList";
import ModalForm from "./components/ModalForm";
import ModalWindow from "./components/ModalWindow";

export default function App() {
  const [itemsList, setItemsList] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const storageKey = "todo-list";

  useEffect(() => loadData(), []);
  useEffect(() => {
    console.log("saved:");
    saveData();
  }, [itemsList]);

  function loadData() {
    const data = localStorage.getItem(storageKey);
    const parseData = JSON.parse(data) || [];

    console.log("parseData:", parseData);

    setItemsList(parseData);
  }

  function saveData() {
    const data = JSON.stringify(itemsList);
    localStorage.setItem(storageKey, data);

    console.log("data:", data);
  }

  function createdItem(name, price) {
    const newItem = {
      id: itemsList.length,
      name: name,
      price: price,
      isCompleted: false,
    };
    setItemsList([...itemsList, newItem]);
  }

  return (
    <div className="app-grid">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
      </header>

      <main className="app-content">
        {itemsList.length === 0 && (
          <WelcomePage
            setOpenModal={setOpenModal}
            modalState={[openModal, setOpenModal]}
            createdItem={createdItem}
          />
        )}
        {itemsList.length > 0 && (
          <ShoppingList
            itemsListState={[itemsList, setItemsList]}
            setOpenModal={setOpenModal}
          />
        )}

        <ModalWindow open={openModal} onClose={() => setOpenModal(false)}>
          <ModalForm
            createdItem={createdItem}
            modalState={[openModal, setOpenModal]}
          />
        </ModalWindow>
      </main>

      <footer className="app-footer">
        Copyright by Eleonora Kazakova 2022
      </footer>
    </div>
  );
}
