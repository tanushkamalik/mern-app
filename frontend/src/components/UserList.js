import React from "react";

function UserList({ users }) {
  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} – {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
