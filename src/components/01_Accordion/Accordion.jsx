import React, { useState } from "react";
import "./style.css";
import data from "./data";

function Accordion() {
  const [selected, setSelected] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const [ids, setIds] = useState([]);

  const handleSingleSelection = (currId) => {
    console.log(currId);
    setSelected(currId == selected ? null : currId);
  };

  const handleMultiSelection = (currId) => {
    let activeIds = [...ids];
    const currIdIndex = activeIds.indexOf(currId);
    console.log(currIdIndex);
    if (currIdIndex == -1) activeIds.push(currId);
    else activeIds.splice(currIdIndex, 1);
    setIds(activeIds);
    console.log(ids);
  };

  return (
    <>
      <h1>Accordion</h1>
      <div className="accordion-container">
        <button onClick={() => setIsEnabled(!isEnabled)}>
          Enable Multiple Selection
        </button>
        {data && data.length > 0 ? (
          data.map((item) => (
            <div
              className="accordion-item"
              key={item.id}
              onClick={() =>
                isEnabled
                  ? handleMultiSelection(item.id)
                  : handleSingleSelection(item.id)
              }
            >
              <div className="title">
                <p>{item.question}</p>
                <span>+</span>
              </div>
              {isEnabled ? (
                ids.indexOf(item.id) != -1 && (
                  <div className="answer">
                    <p>{item.answer}</p>
                  </div>
                )
              ) : selected === item.id ? (
                <div className="answer">
                  <p>{item.answer}</p>
                </div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found!!!</div>
        )}
      </div>
    </>
  );
}

export default Accordion;
