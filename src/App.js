import { useState } from "react";
import logo from "./images/logo.png";
import "./styles/app.css";
import WelcomePage from "./components/WelcomePage";
import ShoppingList from "./components/ShoppingList";
import ModalForm from "./components/ModalForm";

export default function App() {
  const [itemsList, setItemsList] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  function createdItem(name, price) {
    const newItem = {
      id: itemsList.length,
      name: name,
      price: price,
      imgURL: "",
      isCompleted: false,
    };
    setItemsList([...itemsList, newItem]);
  }
  console.log("itemsList:", itemsList);
  return (
    <div className="app-grid">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
      </header>

      <main className="app-content">
        {itemsList.length === 0 && <WelcomePage setOpenModal={setOpenModal} />}
        {itemsList.length > 0 && (
          <ShoppingList
            itemsListState={[itemsList, setItemsList]}
            setOpenModal={setOpenModal}
          />
        )}
        <ModalForm
          createdItem={createdItem}
          modalState={[openModal, setOpenModal]}
        />
      </main>

      <footer className="app-footer">
        Copyright by Eleonora Kazakova 2022
      </footer>
    </div>
  );
}
