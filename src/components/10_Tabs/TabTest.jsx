import React from "react";
import Tab from "./Tab";

function randomComponent() {
  return "Random component";
}

function TabTest() {
  const tabs = [
    {
      label: "Tab 1",
      content: "This is tab 1",
    },
    {
      label: "Tab 2",
      content: "This is tab 2",
    },
    {
      label: "Tab 3",
      content: "This is tab 3",
    },
    {
      label: "Tab 4",
      content: randomComponent(),
    },
  ];
  return <Tab tabContent={tabs} />;
}

export default TabTest;
