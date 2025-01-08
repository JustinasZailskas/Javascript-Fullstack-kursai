import { useState } from "react";

function getRandomNum() {
  return Math.floor(Math.random() * 256);
}
function ColorGenerator() {
  const [colors, setColors] = useState([]);

  const generateColor = () => {
    const R = getRandomNum();
    const G = getRandomNum();
    const B = getRandomNum();

    setColors([R, G, B]);
  };
  return (
    <div
      style={{
        backgroundColor: `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`,
      }}
    >
      <button onClick={generateColor}>Generuoti spalvas</button>
    </div>
  );
}

export default ColorGenerator;
