import logo from "./logo.svg";
import "./App.css";
import RegistrationForm from "./components/RegistrationForm";
import UncontrollerdForm from "./components/UncontrollerdForm";
import RegistrationWithValidation from "./components/RegistrationWithValidation";

function App() {
  return (
    <div className="App">
      <h3>Kontroliuojama forma</h3>
      <RegistrationForm />
      <h3>Nekontroliuojama forma</h3>
      <UncontrollerdForm />
      <h3>Registracija su validacija</h3>
      <RegistrationWithValidation />
    </div>
  );
}

export default App;
