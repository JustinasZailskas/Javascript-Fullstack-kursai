import React, { useRef } from "react";

function UncontrollerdForm() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name:", nameRef.current.value);
    console.log("email:", emailRef.current.value);
    console.log("password:", passwordRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" ref={nameRef} />
        <label>Email:</label>
        <input type="email" ref={emailRef} />
        <label>Password:</label>
        <input type="password" ref={passwordRef} />
        <button type="submit">Register</button>
      </div>
    </form>
  );
}
export default UncontrollerdForm;
