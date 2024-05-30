import React from "react";
import MenuList from "./MenuList";
import "./style.css";

function Tree({ menu = [] }) {
  // console.log(menu);
  return (
    <>
      <div className="treeview-container">
        <h1>Menu</h1>
        <MenuList list={menu} />
      </div>
    </>
  );
}

export default Tree;
