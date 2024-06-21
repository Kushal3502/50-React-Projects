import React from "react";
import "./search.css";

function Search({ city, setCity, handleClick }) {
  return (
    <div>
      <input
        className="search"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <button className="search-btn" onClick={handleClick}>
        Search
      </button>
    </div>
  );
}

export default Search;
