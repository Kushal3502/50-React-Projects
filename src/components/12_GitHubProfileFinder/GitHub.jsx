import React, { useState } from "react";
import "./github.css";
import User from "./User";

function GitHub() {
  const [data, setData] = useState(null);
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchData(user) {
    try {
      setLoading(true);
      setError(false);
      setData(null);
      const response = await fetch(`https://api.github.com/users/${user}`);
      if (!response.ok) {
        throw new Error("Profile not found");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(true);
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <div className="loader">Loading data...</div>;

  return (
    <div className="container">
      <h1>GitHub Profile Search</h1>
      <div className="top">
        <input
          type="text"
          onChange={(e) => setUser(e.target.value)}
          placeholder="Enter username..."
          value={user}
        />
        <button onClick={() => fetchData(user)}>Find Profile</button>
      </div>
      {error && <div className="error">Profile doesn't exist</div>}
      {data && !error && <User user={data} />}
    </div>
  );
}

export default GitHub;
