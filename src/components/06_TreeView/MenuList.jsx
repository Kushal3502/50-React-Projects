import React from "react";
import MenuItem from "./MenuItem";

function MenuList({ list = [] }) {
  //   console.log(list);
  return (
    <ul className="list-container">
      {list && list.length
        ? list.map((listItem) => <MenuItem item={listItem} />)
        : null}
    </ul>
  );
}

export default MenuList;
