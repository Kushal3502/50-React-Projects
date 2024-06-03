import React, { useState } from "react";
import "./tab.css";

function Tab({ tabContent }) {
  const [currIdx, setCurrIdx] = useState(0);

  function handleClick(index) {
    setCurrIdx(index);
  }

  return (
    <div className="container">
      <div className="tabs-container">
        {tabContent.map((item, index) => (
          <div
            key={item.label}
            onClick={() => handleClick(index)}
            className={`tab ${index == currIdx ? "active" : ""}`}
          >
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      <div className="content">
        {tabContent[currIdx] && tabContent[currIdx].content ? (
          <p>{tabContent[currIdx].content}</p>
        ) : null}
      </div>
    </div>
  );
}

export default Tab;
