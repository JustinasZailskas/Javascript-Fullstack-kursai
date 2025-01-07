import { useState } from "react";
export default function CounterWithRequirements() {
  const [value, setValue] = useState(5);

  const increase = () => {
    setValue(value + 1);
  };
  const decrease = () => {
    setValue(value - 1);
  };
  return (
    <>
      <p>Dabartine reiksme: {value}</p>
      <button onClick={increase} disabled={value >= 10 ? true : false}>
        Padidinti
      </button>
      <button onClick={decrease} disabled={value <= 0 ? true : false}>
        Pamazinti
      </button>
    </>
  );
}
