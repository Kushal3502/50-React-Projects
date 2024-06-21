import React from "react";
import { useFetch } from "./useFetch";
import "./useFetch.css"

function UseFetchHook() {
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products?limit=30"
  );

  console.log(data);

  return (
    <div>
      <h2>useFetchHook</h2>
      {loading ? <h3>Loading...</h3> : null}
      {error ? <h3>{error}</h3> : null}
      {data && data.length
        ? data.map((item) => <p key={item.title}>{item.title}</p>)
        : null}
    </div>
  );
}

export default UseFetchHook;
