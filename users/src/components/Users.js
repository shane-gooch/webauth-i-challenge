import React, { useEffect } from "react";

export default function Users({ users }) {
  return (
    <div>
      {users.map(user => {
        return (
          <div>
            <p>{user.username}</p>
            <p>{user.password}</p>
          </div>
        );
      })}
    </div>
  );
}
