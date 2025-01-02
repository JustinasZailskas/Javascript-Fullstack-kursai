import { useState } from "react";
export default function Counter() {
  const [value, setValue] = useState(0);

  const increase = () => setValue(value + 1);
  const decrease = () => setValue(value - 1);
  return (
    <>
      <p>Dabartine reiksme: {value}</p>
      <button onClick={increase}>Padidinti</button>
      <button onClick={decrease}>Pamazinti</button>
    </>
  );
}
