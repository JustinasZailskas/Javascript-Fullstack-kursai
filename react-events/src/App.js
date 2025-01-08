import { useState } from "react";
import "./App.css";
import { ButtonComponent } from "./components/ButtonComponent";
import EmailValidation from "./components/EmailValidation";
import DataTable from "./components/DataTable";
import citiesData from "./cities.json";
import ColorGenerator from "./components/ColorGenerator";
import FormComponent from "./components/FormComponent";

function App() {
  const [value, setValue] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const onIncrement = () => setValue(value + 1);
  const onDecrement = () => setValue(value - 1);
  const onIncremntBy5 = () => setValue(value + 5);
  const onReset = () => setValue(0);

  const handleName = (data) => {
    setName(data);
  };

  const handleAge = (data) => {
    setAge(data);
  };

  return (
    <div className="App">
      <section>
        <h3>Trecia uzduotele: skaitiklis su keliu mygtuku valdymu</h3>
        <p>Dabartine reiksme: {value}</p>
        <ButtonComponent title="Padidinti" callbackFunction={onIncrement} />
        <ButtonComponent title="Mazinti" callbackFunction={onDecrement} />
        <ButtonComponent title="Padidinti 5" callbackFunction={onIncremntBy5} />
        <ButtonComponent title="Reset" callbackFunction={onReset} />
      </section>
      <section>
        <h3>Ketvirta uzduotis: el. pasto validacija</h3>
        <EmailValidation />
      </section>
      <section>
        <h3>Penkta uzduotis</h3>
        <DataTable data={citiesData} />
      </section>
      <section>
        <h3>Sesta uzduotis: spalvu generatorius</h3>
        <ColorGenerator />
      </section>
      <section>
        <h3>Septinta uzduotis: lyginis nelyginis skaicius</h3>
        <p>
          Skaiciaus reiksme: {value} ir jis yra
          {value % 2 === 0 ? " Lyginis" : " Nelyginis"}
        </p>
        <ButtonComponent title="Increase" callbackFunction={onIncrement} />
        <ButtonComponent title="Decrease" callbackFunction={onDecrement} />
      </section>
      <section>
        <h3>Astunta uzduotis: Keliu formu sujungimas</h3>
        <FormComponent
          name="surname"
          placeholderValue="Iveskite savo varda"
          sendDataToParent={handleName}
        />
        <FormComponent
          name="age"
          placeholderValue="Iveskite savo amziu"
          sendDataToParent={handleAge}
        />
        <p>
          Vardas: {name}, Amzius: {age}
        </p>
      </section>
      <section>
        <h3>Devinta uzduotis: Laikmatis su valdymu</h3>
      </section>
    </div>
  );
}

export default App;
