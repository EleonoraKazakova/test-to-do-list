import logo from "./images/logo.png";
import "./styles/app.css";
import WelcomePage from "./components/WelcomePage";

function App() {
  return (
    <div className="app-grid">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
      </header>

      <main className="app-content">
        <WelcomePage />
      </main>

      <footer className="app-footer">
        Copyright by Eleonora Kazakova 2022
      </footer>
    </div>
  );
}

export default App;
