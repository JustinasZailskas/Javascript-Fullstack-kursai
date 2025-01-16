import React, { useState } from "react";
import Form from "./Forms/Form";
import Input from "./Forms/Input";
import ButtonComponent from "./ButtonComponent";

function RegistrationForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="email"
        name="email"
        label={"Email"}
        value={formData.email}
        onChange={handleChange}
        placeholder="Iveskite savo el. pasta"
      />
      <Input
        type="password"
        name="password"
        label={"Password"}
        value={formData.password}
        onChange={handleChange}
        placeholder="Iveskite slaptazodi"
      />
      <ButtonComponent type="submit" title="Submit" />
    </Form>
  );
}

export default RegistrationForm;
