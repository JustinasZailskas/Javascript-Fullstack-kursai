import { useState } from "react";
import "./App.css";
import { ButtonComponent } from "./components/ButtonComponent";
import EmailValidation from "./components/EmailValidation";

function App() {
  const [value, setValue] = useState(0);

  const onIncrement = () => setValue(value + 1);
  const onDecrement = () => setValue(value - 1);
  const onIncremntBy5 = () => setValue(value + 5);
  const onReset = () => setValue(0);

  return (
    <div className="App">
      <section>
        <h3>Trecia uzduotele: skaitiklis su keliu mygtuku valdymu</h3>
        <p>Dabartine reiksme: {value}</p>
        <ButtonComponent title="Padidinti" onClick={onIncrement} />
        <ButtonComponent title="Mazinti" onClick={onDecrement} />
        <ButtonComponent title="Padidinti 5" onClick={onIncremntBy5} />
        <ButtonComponent title="Reset" onClick={onReset} />
      </section>
      <section>
        <h3>Ketvirta uzduotis: el. pasto validacija</h3>
        <EmailValidation />
      </section>
    </div>
  );
}

export default App;
