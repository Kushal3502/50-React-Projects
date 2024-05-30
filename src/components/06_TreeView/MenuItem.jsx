import React, { useState } from "react";
import MenuList from "./MenuList";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";

function MenuItem({ item }) {
  const [displayChildren, setDisplayChildren] = useState({});

  function toggleChildren(currLabel) {
    setDisplayChildren({
      ...displayChildren,
      [currLabel]: !displayChildren[currLabel],
    });
  }

  return (
    <li className="item-container">
      <div className="item">
        <p>{item.label}</p>
        <span onClick={() => toggleChildren(item.label)}>
          {item.children ? (
            displayChildren[item.label] ? (
              <IoIosArrowDropdownCircle />
            ) : (
              <IoIosArrowDropupCircle />
            )
          ) : null}
        </span>
      </div>
      {item.children &&
      item.children.length > 0 &&
      displayChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}

export default MenuItem;
