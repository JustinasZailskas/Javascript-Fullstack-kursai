import { useState, useEffect } from "react";

function UserTimerComponent() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [inputValue, setInputValue] = useState(0);
  const [time, setTime] = useState(1000);

  useEffect(() => {
    let interval = 0;

    if (isRunning) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, time);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const startTimer = () => {
    setIsRunning(true);
  };
  const stopTimer = () => {
    setIsRunning(false);
  };
  const resetTimer = () => {
    setIsRunning(false);
    setCount(0);
  };

  const approveTime = () => {
    setIsRunning(false);
    setTime(inputValue);
    setIsRunning(true);
  };
  return (
    <div>
      <input
        name="time"
        placeholder="Iveskite laika"
        value={inputValue}
        type="number"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={approveTime}>Patvirtinti</button>
      <p>Laikas: {count}</p>
      <button onClick={startTimer}>Pradeti</button>
      <button onClick={stopTimer}>Sustabdyti</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default UserTimerComponent;
