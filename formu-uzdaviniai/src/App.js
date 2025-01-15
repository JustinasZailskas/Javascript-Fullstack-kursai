import logo from "./logo.svg";
import "./App.css";
import RegistrationForm from "./components/RegistrationForm";
import InsertNameForm from "./components/InsertNameForm";

function App() {
  return (
    <div className="App">
      <h3>1 praktine uzduotis</h3>
      <RegistrationForm />
      <h3>2 praktine uzduotis</h3>
      <InsertNameForm />
    </div>
  );
}

export default App;
