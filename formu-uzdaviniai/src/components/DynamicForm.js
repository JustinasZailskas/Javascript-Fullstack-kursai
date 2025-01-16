import React, { useState } from "react";
import Form from "./Forms/Form";
import Input from "./Forms/Input";
import ButtonComponent from "./ButtonComponent";
import styles from "./Forms/Input.module.css";

function DynamicForm() {
  const [inputFields, setInputFields] = useState([{ name: "" }]);

  const handleFormName = (index, event) => {
    let data = [...inputFields];
    data[index].name = event.target.value;
    setInputFields(data);
  };

  const addField = () => {
    let newField = { name: "" };
    setInputFields([...inputFields, newField]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputFields);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        {inputFields.map((input, index) => {
          return (
            <Input
              key={index}
              label="Vardas"
              type="text"
              name="name"
              value={input.name}
              onChange={(event) => handleFormName(index, event)}
              placeholder="Iveskite varda"
              className={index % 2 === 0 ? styles.inputEven : styles.inputOdd}
            />
          );
        })}
        <ButtonComponent
          type="button"
          title="Prideti lauka"
          action={addField}
        />
        <ButtonComponent type="submit" title="Patvirtinti" />
      </Form>
    </>
  );
}

export default DynamicForm;
