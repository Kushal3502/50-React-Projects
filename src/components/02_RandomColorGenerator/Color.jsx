import React, { useEffect, useState } from "react";
import "./style.css";

function Color() {
  const [type, setType] = useState("hex");
  const [color, setColor] = useState("#212121");

  const generateColor = () => {
    type == "hex" ? generateHEXColor() : generateRGBColor();
  };

  const generateHEXColor = () => {
    const list = "0123456789ABCDEF";
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += list[Math.floor(Math.random() * 16)];
    }
    console.log(hexColor);
    setColor(hexColor);
  };

  const generateRGBColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    setColor(`rgb(${red},${green},${blue})`);
  };

  useEffect(() => {
    type == "hex" ? generateHEXColor() : generateRGBColor();
  }, [type]);

  return (
    <div
      className="container"
      style={{
        backgroundColor: color,
      }}
    >
      <h1>Random Color Generator</h1>
      <div className="button-container">
        <button onClick={() => setType("hex")}>HEX Color</button>
        <button onClick={() => setType("rgb")}>RGB Color</button>
        <button onClick={generateColor}>Generate random color</button>
      </div>
      <div className="result">
        <p>{type.toUpperCase()} Color</p>
        <p>{color}</p>
      </div>
    </div>
  );
}

export default Color;
