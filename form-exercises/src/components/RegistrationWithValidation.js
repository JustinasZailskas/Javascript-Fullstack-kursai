import React, { useState } from "react";
import Form from "./Forms/Form";

function RegistrationWithValidation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const validateForm = () => {
    const newErrors = {};

    Object.keys(formData).map((formElementName) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (
        formElementName === "email" &&
        !emailRegex.test(formElementName.email)
      ) {
        newErrors[formElementName] = "Netinkamas el. pasto formatas";
      }
      if (
        formElementName === "password" &&
        formData[formElementName].length < 6
      ) {
        newErrors[formElementName] = "Slaptazodis turi buti ben 6 simboliu";
      }
      if (!formData[formElementName]) {
        newErrors[formElementName] = `Privalomas ${formElementName} laukelis`;
      }
    });
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const newErrors = validateForm();
    console.log(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Veikia");
      setErrors({});
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>
      <button type="submit">Register</button>
    </Form>
  );
}

export default RegistrationWithValidation;
