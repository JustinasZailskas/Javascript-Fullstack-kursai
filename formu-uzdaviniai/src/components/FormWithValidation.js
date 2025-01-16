import React, { useState } from "react";
import Form from "./Forms/Form";
import Input from "./Forms/Input";
import ButtonComponent from "./ButtonComponent";

function FormWithValidation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newError = {};
    const formDataKeys = Object.keys(formData);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    for (let formKeysID = 0; formKeysID < formDataKeys.length; formKeysID++) {
      if (formData.name < 1) {
        newError.name = `Privalomas ${formDataKeys[formKeysID]} laukelis`;
        break;
      }
      if (
        formDataKeys[formKeysID] === "email" &&
        !emailRegex.test(formData.email)
      ) {
        newError.name = "Netinkamas el. pasto formatas";
        break;
      }
      if (
        formDataKeys[formKeysID] === "password" &&
        formData.password.length < 6
      ) {
        newError.name = "Slaptazodis turi buti ben 6 simboliu";
        break;
      }
    }
    return newError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newError = validateForm();
    console.log(newError);
    if (Object.keys(newError).length > 0) {
      setError(newError);
    } else {
      console.log("Veikia");
      console.log(formData);
      setError({});
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          label="Vardas"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          label="El. pastas"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          label="Slaptazodis"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {error.name && <p style={{ color: "red" }}>{error.name}</p>}
        <ButtonComponent type="submit" title="Register" />
      </Form>
    </>
  );
}
export default FormWithValidation;
