import { useState, useEffect } from "react";

function TimerComponent() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = 0;

    if (isRunning) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

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

  return (
    <div>
      <p>Laikas: {count}</p>
      <button onClick={startTimer}>Pradeti</button>
      <button onClick={stopTimer}>Sustabdyti</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default TimerComponent;
