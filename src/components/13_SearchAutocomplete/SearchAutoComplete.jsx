import React, { useEffect, useState } from "react";
import "./search.css";

function SearchAutoComplete() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [dropdown, setDropdown] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users?limit=100");
      const result = await response.json();
      setData(result.users.map((item) => item.firstName));
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  }

  function handleChange(e) {
    const name = e.target.value.toLowerCase();
    setInput(name);
    // console.log(data);
    if (name.length > 0) {
      const filteredData = data
        ? data.filter((item) => item.toLowerCase().indexOf(name) > -1)
        : [];
      console.log(filteredData);
      setFilteredData(filteredData);
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  }

  function handleClick(item) {
    console.log(item);
    setInput(item);
    setDropdown(false);
    setFilteredData([]);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Search Autocomplete</h1>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <input
          type="text"
          placeholder="Enter name"
          value={input}
          onChange={handleChange}
        />
      )}
      {dropdown && (
        <ul>
          {filteredData.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                handleClick(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchAutoComplete;
