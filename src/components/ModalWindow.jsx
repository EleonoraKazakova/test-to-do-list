import ReactDOM from "react-dom";
import "../styles/modalWindow.css";

export default function ModalWindow({ open, children }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <section>
      <div className="modalWindow-overlay" />
      <div className="modalWindow-styles">
        <div className="modalWindow-name-tech">{children}</div>
      </div>
    </section>,
    document.getElementById("portal")
  );
}
