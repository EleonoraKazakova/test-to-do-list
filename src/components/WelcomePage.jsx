import "../styles/welcomePage.css";
import HomeImg from "../images/home-img.png";
import "../styles/base/button.css";

export default function WelcomePage({ setOpenModal }) {
  return (
    <div className="welcomePage-block">
      <img src={HomeImg} className="welcomePage-logo" />
      <h1 className="welcomePage-title">EIKA Shopping list</h1>

      <div className="welcomePage-content">
        <p>Hello!</p>
        <div className="welcomePage-text">
          <p>We are happy to welcome you to our website!</p>
          <p>You can click on the button and add orders.</p>
        </div>
      </div>
      <button onClick={() => setOpenModal(true)} className="button">
        <p className="button-text">Add item</p>
      </button>
    </div>
  );
}
