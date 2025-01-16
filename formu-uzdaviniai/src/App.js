import "./App.css";
import RegistrationForm from "./components/RegistrationForm";
import InsertNameForm from "./components/InsertNameForm";
import FormWithValidation from "./components/FormWithValidation";
import DynamicForm from "./components/DynamicForm";

function App() {
  return (
    <div className="App">
      <h3>1 praktine uzduotis</h3>
      <RegistrationForm />
      <h3>2 praktine uzduotis</h3>
      <InsertNameForm />
      <h3>3 praktine uzduotis</h3>
      <FormWithValidation />
      <h3>Dinamine forma</h3>
      <DynamicForm />
    </div>
  );
}

export default App;
