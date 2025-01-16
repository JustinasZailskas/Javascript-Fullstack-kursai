import React, { useState } from "react";
import Form from "./Forms/Form";
import Input from "./Forms/Input";
import ButtonComponent from "./ButtonComponent";

function InsertNameForm() {
  const [nameValue, setNameValue] = useState("");
  const [nameList, setNameList] = useState([]);

  const handleName = (e) => {
    setNameValue(e.target.value);
  };

  const addName = (e) => {
    e.preventDefault();
    const nextID = nameList.length + 1;
    setNameList([
      ...nameList,
      {
        id: nextID,
        name: nameValue,
      },
    ]);
    setNameValue("");
  };
  const cleartList = () => {
    setNameList([]);
  };
  return (
    <>
      <Form onSubmit={addName}>
        <Input
          label="Vardas"
          type="text"
          name="name"
          value={nameValue}
          onChange={handleName}
          placeholder="Iveskite varda"
        />
        <ButtonComponent type="submit" title="Prideti" />

        <ButtonComponent type="reset" action={cleartList} title="Isvalyti" />
      </Form>
      <div>
        <ul>
          {nameList.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default InsertNameForm;
