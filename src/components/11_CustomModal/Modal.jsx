import React, { useState } from "react";
import PopUp from "./PopUp";
import "./modal.css";

function Modal() {
  const [popUp, setPopUp] = useState(false);

  function toggleModal() {
    setPopUp(!popUp);
  }

  function onClose() {
    setPopUp(false);
  }

  return (
    <div className="container">
      <button onClick={toggleModal}>Open Pop-up</button>
      {popUp ? (
        <PopUp
          header={"This is custom header"}
          body={"This is custom body"}
          footer={"This is custom footer"}
          onClose={onClose}
        />
      ) : null}
    </div>
  );
}

export default Modal;
