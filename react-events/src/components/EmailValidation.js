import { useState } from "react";

function EmailValidation() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const handleChange = (event) => {
    const email = event.target.value;
    setEmail(email);
    setIsValid(emailRegex.test(email));
  };

  return (
    <>
      <input
        name="Email"
        placeholder="Iveskite savo el. pasta"
        value={email}
        onChange={(event) => handleChange(event)}
      />
      <p>email: {email}</p>
      {isValid ? (
        <p style={{ color: "green" }}>Geras</p>
      ) : (
        <p style={{ color: "red" }}>Blogas</p>
      )}
    </>
  );
}

export default EmailValidation;
