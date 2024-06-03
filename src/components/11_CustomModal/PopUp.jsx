import React from "react";
import { ImCross } from "react-icons/im";

function PopUp({ header, body, footer, onClose }) {
  return (
    <div className="pop-up">
      <div className="header">
        <h2>{header ? header : "Header"}</h2>
        <span onClick={onClose}>
          <ImCross />
        </span>
      </div>
      <div className="body">
        <h2>{body ? body : "Body"}</h2>
      </div>
      <div className="footer">
        <h2>{footer ? footer : "Footer"}</h2>
      </div>
    </div>
  );
}

export default PopUp;
