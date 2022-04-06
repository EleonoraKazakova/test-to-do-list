import ReactDOM from "react-dom";
import "../styles/modalWindow.css";

export default function ModalWindow({ open, children }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <section>
      <div className="modal-overlay" />
      <div className="modal-styles">
        <div className="modal-name-tech">{children}</div>
      </div>
    </section>,
    document.getElementById("portal")
  );
}
