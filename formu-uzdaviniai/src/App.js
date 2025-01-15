import "./App.css";
import RegistrationForm from "./components/RegistrationForm";
import InsertNameForm from "./components/InsertNameForm";
import FormWithValidation from "./components/FormWithValidation";

function App() {
  return (
    <div className="App">
      <h3>1 praktine uzduotis</h3>
      <RegistrationForm />
      <h3>2 praktine uzduotis</h3>
      <InsertNameForm />
      <h3>3 praktine uzduotis</h3>
      <FormWithValidation />
    </div>
  );
}

export default App;
