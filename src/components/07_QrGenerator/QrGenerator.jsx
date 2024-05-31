import React, { useState } from "react";
import QRCode from "react-qr-code";
import "./style.css";

function QrGenerator() {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");

  return (
    <div className="container">
      <h1>QR Code Generator</h1>
      <div className="input-box">
        <input
          type="text"
          placeholder="Enter text..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={() => {
            setQrCode(input);
            setInput("");
          }}
          disabled={input.trim != "" ? false : true}
        >
          Generate Qr Code
        </button>
      </div>
      <div className="code-box">
        <QRCode value={qrCode} size={350} />
      </div>
    </div>
  );
}

export default QrGenerator;
