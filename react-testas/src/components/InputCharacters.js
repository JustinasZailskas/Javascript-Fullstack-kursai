import { useState } from "react";
export default function InputCharacters() {
  const [value, setValue] = useState("");

  return (
    <>
      <label>
        Text input:
        <input
          name="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={value.length >= 20 ? true : false}
        />
      </label>
      <p>Ivesta reiksme: {value}</p>
      <button onClick={() => setValue("")}>Reset input</button>
    </>
  );
}
