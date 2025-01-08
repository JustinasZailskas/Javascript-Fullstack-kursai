import { useState } from "react";

function FormComponent({ surname, placeholderValue, sendDataToParent }) {
  const [value, setValue] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    sendDataToParent(value);
  };
  return (
    <form>
      <input
        name={surname}
        placeholder={placeholderValue}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleClick}>Submit</button>
    </form>
  );
}

export default FormComponent;
