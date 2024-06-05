import React from "react";

function User({ user }) {
  const {
    avatar_url,
    login,
    name,
    location,
    followers,
    following,
    public_repos,
  } = user;

  return (
    <div>
      <img src={avatar_url} />
      <div className="info">
        <p>Name : {name ? name : login}</p>
        <p>Location : {location ? location : "Not found :)"}</p>
        <p>Followers : {followers}</p>
        <p>Followings : {following}</p>
        <p>Public Repos : {public_repos}</p>
      </div>
    </div>
  );
}

export default User;
